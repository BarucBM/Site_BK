import { Component } from '@angular/core';

import { artistaItf } from '../../models/artista.model';
import { OnInit} from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';
import { tokenItf } from '../../models/token.model';
import { albumsItf, singleAlbumItf } from '../../models/albums.model';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf ],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  token1: tokenItf ={
    access_token: '',
    expires_in:0,
    token_type:''
  };

  
  artistaAlbum: artistaItf ={
    external_urls: {
      spotify: ''
    },
    followers: {
      href: '',
      total: 0
    },
    genres:[],
    href: '',
    id: '',
    images: []
    ,
    name: '',
    popularity: 0,
    type: '',
    uri: ''
  };

  albums1 : singleAlbumItf[] = []
  albums2 : singleAlbumItf[] = []
  lastAlbum : singleAlbumItf = this.albums1[0]

  impar:boolean =false;


  constructor(private spotifyService:SpotifyService){}
  getArtista(){

    console.log(this.token1.expires_in)
    this.spotifyService.getArtista(this.token1).subscribe((data)=>{
      console.log(data.name)
      this.artistaAlbum = data 
    })
  }
  
  getAccessToken(){
    this.spotifyService.getToken().subscribe((data)=>{
      console.log(data.access_token)
      this.token1 = data
      this.getArtista()
      this.getAlbums()
    })
  }


  ngOnInit(){
    this.getAccessToken()
    
  }

  getAlbums(){
    this.spotifyService.getAlbums(this.token1).subscribe((data1) =>{
      const albums:albumsItf = data1

      for (let i = 0; i < albums.items.length; i++) {
        if (albums.items[i].artists[0].name == "BK") {
          if (i < ((albums.items.length+1) /2)) {
            this.albums1.push(albums.items[i])
          }else{
            this.albums2.push(albums.items[i])
          } 
        }       
      }
      if (this.albums1.length < this.albums2.length) {
        this.impar = true
        this.lastAlbum = this.albums2[this.albums2.length - 1]
        this.albums2.pop()
      } 

      console.log(this.albums1)
      console.log(this.albums2)
      console.log(this.lastAlbum)
    }
    )
  }
}

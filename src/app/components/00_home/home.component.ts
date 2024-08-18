import { Component } from '@angular/core';

import { artistaItf } from '../../models/artista.model';
import { OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';
import { tokenItf } from '../../models/token.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  token1: tokenItf ={
    access_token: '',
    expires_in:0,
    token_type:''
  };

  
  artistaHome: artistaItf ={
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
  constructor(private spotifyService:SpotifyService){}
  getArtista(){

    console.log(this.token1.expires_in)
    this.spotifyService.getArtista(this.token1).subscribe((data)=>{
      console.log(data.name)
      this.artistaHome = data 
    })
  }
  
  getAccessToken(){
    this.spotifyService.getToken().subscribe((data)=>{
      console.log(data.access_token)
      this.token1 = data
      this.getArtista()
    })
  }


  ngOnInit(){
    this.getAccessToken()
    
  }

}

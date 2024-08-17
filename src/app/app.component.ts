import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/01_navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpotifyService } from './service/spotify.service';
import { tokenItf } from './models/token.model';
import { artistaItf } from './models/artista.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'site_bk';
    token1: tokenItf ={
      access_token: '',
      expires_in:0,
      token_type:''
  };
  artista1: artistaItf ={
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

  getAccessToken(){
    this.spotifyService.getToken().subscribe((data)=>{
      console.log(data.access_token)
      this.token1 = data
    })
  }

  getArtista(){
    this.spotifyService.getArtista(this.token1).subscribe((data)=>{
      console.log(data.name)
      this.artista1 = data
    })
  }
}

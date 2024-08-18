import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/01_navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpotifyService } from './service/spotify.service';
import { tokenItf } from './models/token.model';
import { artistaItf } from './models/artista.model';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'site_bk';


   
  

  constructor(private spotifyService:SpotifyService){}
  
  



}

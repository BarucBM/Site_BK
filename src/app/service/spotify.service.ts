import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Buffer } from 'buffer';
import { map, switchMap } from 'rxjs';
import { tokenItf } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  
private tokenUrl: string = 'https://accounts.spotify.com/api/token';
  tokenService :tokenItf ={
    access_token: '',
    expires_in:0,
    token_type:''
};

  constructor(private http:HttpClient) { }

  getToken():Observable<any>{
    var bf = 'Basic ' + Buffer.from('b99f1c69fdf14fcb852ac71daeabf443' + ':' + 'c677ba7a2a364bc5a46fb7e5af670f1a').toString('base64')
    const headers = new HttpHeaders({
        'Authorization': bf,
        'Content-Type': 'application/x-www-form-urlencoded'
        
      });
      const body = new URLSearchParams();
      body.set('grant_type', 'client_credentials');
    
      return this.http.post<any>(this.tokenUrl, body.toString(), { headers })
      .pipe(
        map(response => {
          if (response && response.access_token) {
            return response;
          } else {
            throw new Error('Authentication failed');
          }
        })
      );
  }

  getArtista(token:tokenItf): Observable<any> {
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token.access_token}`
        });
        const url = `https://api.spotify.com/v1/artists/1YOVBTvznjiDvtAj4ExHeo?si=b4oJvEcvTa2GYBF_3zdoFA`;
        return this.http.get<any>(url, { headers });
      };
  }
  
  











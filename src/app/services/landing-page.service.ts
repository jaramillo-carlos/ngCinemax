import { Movie } from './../models/movie.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SocialNetwork } from '../landing-page/navbar-social/social-network';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {
  apiNetwork: string = 'RedesSociales.json';
  apiMovies: string = 'Peliculas.json';
  formats: string[] = [
    'Doblada 2D', 'Doblada 3D', 'Idioma Original 2D', 'Idioma Original 3D'
  ];
  hours: string[] = [];

  constructor(public _http: HttpClient) {
    this.generateHours();
  }

  getSocialNetworks(): Observable<SocialNetwork[]> {
    return this._http.get<SocialNetwork[]>(`${environment.API}${this.apiNetwork}`);
  }

  getMovies(): Observable<Movie[]> {
    return this._http.get<Movie[]>(`${environment.API}${this.apiMovies}`);
  }

  generateHours() {
    for (let i = 2; i <= 10; i = i + 2) {
      const hour = `${i}:00pm`;
      this.hours.push(hour);
    }
  }
}

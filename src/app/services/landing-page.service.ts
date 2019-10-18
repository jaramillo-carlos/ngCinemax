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
  constructor(public _http: HttpClient) { }

  getSocialNetworks(): Observable<SocialNetwork[]> {
    return this._http.get<SocialNetwork[]>(`${environment.API}${this.apiNetwork}`);
  }

  getMovies(): Observable<Movie[]> {
    return this._http.get<Movie[]>(`${environment.API}${this.apiMovies}`);
  }
}

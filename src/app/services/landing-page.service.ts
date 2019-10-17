import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SocialNetwork } from '../landing-page/navbar-social/social-network';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {
  apiRedes: string = 'RedesSociales.json';
  constructor(public _http: HttpClient) { }

  getSocialNetworks(): Observable<SocialNetwork[]> {
    return this._http.get<SocialNetwork[]>(`${environment.API}${this.apiRedes}`);

  }
}

import { SocialNetwork } from './social-network';
import { LandingPageService } from './../../services/landing-page.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-social',
  templateUrl: './navbar-social.component.html',
  styleUrls: ['./navbar-social.component.css']
})
export class NavbarSocialComponent implements OnInit {
  socialNetworks: SocialNetwork[] = [];

  constructor(public _landingService: LandingPageService) {}

  ngOnInit() {
    this.getSocialNetworks();
  }

  getSocialNetworks() {
    this._landingService.getSocialNetworks().subscribe(networks => {
      this.socialNetworks = networks;
    });
  }

}

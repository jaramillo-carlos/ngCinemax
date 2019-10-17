import { SocialNetwork } from './../landing-page/navbar-social/social-network';
import { TestBed, getTestBed } from '@angular/core/testing';

import { LandingPageService } from './landing-page.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

fdescribe('LandingPageService', () => {
  const mockResponse: SocialNetwork[] = [
    {
      nombre: 'Facebook',
      url: 'https://www.facebook.com/dotcarlos1'
    },
    {
      nombre: 'Instagram',
      url: 'https://www.instagram.com/dotCarlos1/'
    },
    {
      nombre: 'Youtube',
      url: 'https://www.youtube.com/'
    },
    {
      nombre: 'Twitter',
      url: 'https://twitter.com/dotcarlos11'
    },
    {
      nombre: 'Github',
      url: 'https://github.com/dotCarlos/'
    }
  ];
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: LandingPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    service = TestBed.get(LandingPageService);
  });

  it('should be created service', () => {
    expect(service).toBeTruthy();
  });

  it('should call method getSocialNetworks() and return socialnetworks', () => {
    service.getSocialNetworks().subscribe(redes => {
      expect(redes.length).toBe(5);
      expect(redes).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('https://ngcinemax-71540.firebaseio.com/RedesSociales.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});

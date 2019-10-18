import { LandingPageService } from './../../services/landing-page.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSocialComponent } from './navbar-social.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { SocialNetwork } from './social-network';
import { of } from 'rxjs';

describe('NavbarSocialComponent', () => {
  const mockResponse: SocialNetwork[] = [
    {
      nombre: 'Facebook',
      url: 'https://www.facebook.com/dotcarlos1',
      icono: 'fab fa-facebook-f',
      estado: true
    },
    {
      nombre: 'Instagram',
      url: 'https://www.instagram.com/dotCarlos1/',
      icono: 'fab fa-instagram',
      estado: true
    },
    {
      nombre: 'Youtube',
      url: 'https://www.youtube.com/',
      icono: 'fab fa-youtube',
      estado: true
    },
    {
      nombre: 'Twitter',
      url: 'https://twitter.com/dotcarlos11',
      icono: 'fab fa-twitter',
      estado: true
    },
    {
      nombre: 'Github',
      url: 'https://github.com/dotCarlos/',
      icono: 'fab fa-github',
      estado: true
    }
  ];
  let component: NavbarSocialComponent;
  let fixture: ComponentFixture<NavbarSocialComponent>;
  let service: LandingPageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarSocialComponent ],
      providers: [ LandingPageService ],
      imports: [ HttpClientTestingModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSocialComponent);
    component = fixture.componentInstance;
    service = component._landingService;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inject LandingPageService', () => {
    expect(service).toBeTruthy();
  });

  it('Should must complete socialNetworks when call getSocialNetworks() from _landingService ', () => {
    spyOn(service, 'getSocialNetworks').and.returnValue(of(mockResponse));
    component.ngOnInit();
    expect(component.socialNetworks).toEqual(mockResponse);
  });

  it('Should must call getSocialNetworks() on ngOnInit()', () => {
    spyOn(component, 'getSocialNetworks').and.callThrough();
    spyOn(service, 'getSocialNetworks').and.returnValue(of(mockResponse));
    component.ngOnInit();
    expect(component.getSocialNetworks).toHaveBeenCalled();
  });
});

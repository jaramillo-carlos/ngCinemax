import { WeeklyBillboardsComponent } from './weekly-billboards/weekly-billboards.component';
import { SlidesComponent } from './slides/slides.component';
import { PremieresComponent } from './premieres/premieres.component';
import { NavbarSocialComponent } from './navbar-social/navbar-social.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { MoviesFilterComponent } from './movies-filter/movies-filter.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageComponent, CarouselComponent, FooterComponent,
      MoviesFilterComponent, NavbarMenuComponent, NavbarSocialComponent,
      PremieresComponent, SlidesComponent, WeeklyBillboardsComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

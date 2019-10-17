import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyBillboardsComponent } from './weekly-billboards.component';

describe('WeeklyBillboardsComponent', () => {
  let component: WeeklyBillboardsComponent;
  let fixture: ComponentFixture<WeeklyBillboardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyBillboardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyBillboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

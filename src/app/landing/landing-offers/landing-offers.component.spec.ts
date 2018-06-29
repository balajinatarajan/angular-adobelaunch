import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingOffersComponent } from './landing-offers.component';

describe('LandingOffersComponent', () => {
  let component: LandingOffersComponent;
  let fixture: ComponentFixture<LandingOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

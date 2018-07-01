import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingOffersVariantAComponent } from './landing-offers-variant-a.component';

describe('LandingOffersVariantAComponent', () => {
  let component: LandingOffersVariantAComponent;
  let fixture: ComponentFixture<LandingOffersVariantAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingOffersVariantAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingOffersVariantAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

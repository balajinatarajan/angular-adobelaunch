import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingCreditCardComponent } from './landing-credit-card.component';

describe('LandingCreditCardComponent', () => {
  let component: LandingCreditCardComponent;
  let fixture: ComponentFixture<LandingCreditCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingCreditCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

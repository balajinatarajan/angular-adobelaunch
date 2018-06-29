import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingThankYouComponent } from './landing-thank-you.component';

describe('LandingThankYouComponent', () => {
  let component: LandingThankYouComponent;
  let fixture: ComponentFixture<LandingThankYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingThankYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

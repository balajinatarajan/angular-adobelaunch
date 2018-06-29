import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlepzComponent } from './flepz.component';

describe('FlepzComponent', () => {
  let component: FlepzComponent;
  let fixture: ComponentFixture<FlepzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlepzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlepzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

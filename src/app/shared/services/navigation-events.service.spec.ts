import { TestBed, inject } from '@angular/core/testing';

import { NavigationEventsService } from './navigation-events.service';

describe('NavigationEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavigationEventsService]
    });
  });

  it('should be created', inject([NavigationEventsService], (service: NavigationEventsService) => {
    expect(service).toBeTruthy();
  }));
});

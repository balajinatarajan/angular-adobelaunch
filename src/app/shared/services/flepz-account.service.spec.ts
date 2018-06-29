import { TestBed, inject } from '@angular/core/testing';

import { FlepzAccountService } from './flepz-account.service';

describe('FlepzAccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlepzAccountService]
    });
  });

  it('should be created', inject([FlepzAccountService], (service: FlepzAccountService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { VisitorProfileService } from './visitor-profile.service';

describe('VisitorProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisitorProfileService]
    });
  });

  it('should be created', inject([VisitorProfileService], (service: VisitorProfileService) => {
    expect(service).toBeTruthy();
  }));
});

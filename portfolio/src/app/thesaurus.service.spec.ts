import { TestBed, inject } from '@angular/core/testing';

import { ThesaurusService } from './thesaurus.service';

describe('ThesaurusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThesaurusService]
    });
  });

  it('should be created', inject([ThesaurusService], (service: ThesaurusService) => {
    expect(service).toBeTruthy();
  }));
});

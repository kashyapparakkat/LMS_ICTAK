import { TestBed } from '@angular/core/testing';

import { TutordetailsService } from './tutordetails.service';

describe('TutordetailsService', () => {
  let service: TutordetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutordetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

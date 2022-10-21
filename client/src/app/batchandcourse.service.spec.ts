import { TestBed } from '@angular/core/testing';

import { BatchandcourseService } from './batchandcourse.service';

describe('BatchandcourseService', () => {
  let service: BatchandcourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatchandcourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

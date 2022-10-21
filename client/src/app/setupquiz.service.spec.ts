import { TestBed } from '@angular/core/testing';

import { SetupquizService } from './setupquiz.service';

describe('SetupquizService', () => {
  let service: SetupquizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupquizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

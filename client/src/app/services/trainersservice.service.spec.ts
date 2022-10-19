import { TestBed } from '@angular/core/testing';

import { TrainersserviceService } from './trainersservice.service';

describe('TrainersserviceService', () => {
  let service: TrainersserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainersserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

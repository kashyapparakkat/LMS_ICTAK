import { TestBed } from '@angular/core/testing';

import { BatchmaterialService } from './batchmaterial.service';

describe('BatchmaterialService', () => {
  let service: BatchmaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatchmaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

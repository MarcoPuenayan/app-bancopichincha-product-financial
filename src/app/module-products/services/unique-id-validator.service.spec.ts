import { TestBed } from '@angular/core/testing';

import { UniqueIdValidatorService } from './unique-id-validator.service';

describe('UniqueIdValidatorService', () => {
  let service: UniqueIdValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueIdValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ActivosFijosServiceService } from './activos-fijos-service.service';

describe('ActivosFijosServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivosFijosServiceService = TestBed.get(ActivosFijosServiceService);
    expect(service).toBeTruthy();
  });
});

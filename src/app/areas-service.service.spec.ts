import { TestBed } from '@angular/core/testing';

import { AreasServiceService } from './areas-service.service';

describe('AreasServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AreasServiceService = TestBed.get(AreasServiceService);
    expect(service).toBeTruthy();
  });
});

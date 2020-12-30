import { TestBed } from '@angular/core/testing';

import { CatagoryServicesService } from './catagory-services.service';

describe('CatagoryServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatagoryServicesService = TestBed.get(CatagoryServicesService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FacturasadminService } from './facturasadmin.service';

describe('FacturasadminService', () => {
  let service: FacturasadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacturasadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

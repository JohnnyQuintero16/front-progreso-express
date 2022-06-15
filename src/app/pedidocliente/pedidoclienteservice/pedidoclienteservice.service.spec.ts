import { TestBed } from '@angular/core/testing';

import { PedidoclienteserviceService } from './pedidoclienteservice.service';

describe('PedidoclienteserviceService', () => {
  let service: PedidoclienteserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidoclienteserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

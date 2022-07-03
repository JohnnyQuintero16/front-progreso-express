import { TestBed } from '@angular/core/testing';

import { ServicePerfilService } from './service-perfil.service';

describe('ServicePerfilService', () => {
  let service: ServicePerfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePerfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

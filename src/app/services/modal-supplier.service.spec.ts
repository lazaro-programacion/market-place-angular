import { TestBed } from '@angular/core/testing';

import { ModalSupplierService } from './modal-supplier.service';

describe('ModalSupplierService', () => {
  let service: ModalSupplierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalSupplierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

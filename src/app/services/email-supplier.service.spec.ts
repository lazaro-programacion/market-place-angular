import { TestBed } from '@angular/core/testing';

import { EmailSupplierService } from './email-supplier.service';

describe('EmailSupplierService', () => {
  let service: EmailSupplierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailSupplierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVendorComponent } from './form-vendor.component';

describe('FormVendorComponent', () => {
  let component: FormVendorComponent;
  let fixture: ComponentFixture<FormVendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Supplier } from 'src/app/models/supplier';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalSupplierService } from 'src/app/services/modal-supplier.service';

@Component({
  selector: 'app-show-suppliers',
  templateUrl: './show-suppliers.component.html',
  styleUrls: ['./show-suppliers.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowSuppliersComponent implements OnInit {
  @Input() suppliers: Supplier[];


  constructor(
    private activeModal: NgbActiveModal,
    private modalSupplierService: ModalSupplierService
            ) { }

  ngOnInit(): void {
   // console.log('suppliers', this.suppliers);
  }

  selectSupplier = (supplier: Supplier) => {
    // console.log('supplier selected', supplier);
    this.modalSupplierService.selectedSupplier.emit(supplier);
    this.activeModal.close();
  }

}

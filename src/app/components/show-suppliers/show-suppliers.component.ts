import { Component, OnInit, ChangeDetectionStrategy, Input, Output,EventEmitter } from '@angular/core';
import { Supplier } from 'src/app/models/supplier';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-show-suppliers',
  templateUrl: './show-suppliers.component.html',
  styleUrls: ['./show-suppliers.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowSuppliersComponent implements OnInit {
  @Input() suppliers: Supplier[];

  @Output() public selectSupplier: EventEmitter<Supplier> = new EventEmitter<Supplier>();

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log('suppliers', this.suppliers);
  }

  // selectSupplier = (supplier: Supplier) => {
  //   console.log('supplier selected', supplier);
  //   this.activeModal.close();
  // }

}

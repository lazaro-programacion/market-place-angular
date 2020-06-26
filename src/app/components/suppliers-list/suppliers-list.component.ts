import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/services/supplier.service';
import { Supplier } from 'src/app/models/supplier';
import { SelectItem } from 'primeng/api';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.css'],
  providers: []
})
export class SuppliersListComponent implements OnInit {

  displayDialog: boolean;
  sortOptions: SelectItem[];
  sortKey: string;
  sortField: string;
  sortOrder: number;

  selectedSupplier: Supplier;


  public suppliers: Supplier[];

  constructor(private serviceSupplier: SupplierService) { }

  ngOnInit(): void {
    this.serviceSupplier.getSuppliers().subscribe(
      supp => {
        this.suppliers = supp;
      }
    );
  }

  selectSupplier(event: Event, supplier: Supplier) {
    this.selectedSupplier = supplier;
    this.displayDialog = true;
    event.preventDefault();
  }

  onDialogHide() {
    this.selectSupplier = null;
  }

}

import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/services/supplier.service';
import { Supplier } from 'src/app/models/supplier';
import { SelectItem } from 'primeng/api';
import { UsersService } from '../../services/users.service';
import { Users } from '../../models/users';

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
  public identity: any;
  public user: Users;

  public suppliers: Supplier[];

  constructor(private usersService: UsersService, private serviceSupplier: SupplierService) { }

  ngOnInit(): void {
    this.serviceSupplier.getSuppliers().subscribe(
      supp => {
        this.suppliers = supp;
      }
    );

    this.identity = this.usersService.getIdentity();
    this.user = this.identity;
  }


  isAdmin() {
    if (this.user !== null && this.user.rol === 'admin') {
      return true;
    }
    else { return false; }
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

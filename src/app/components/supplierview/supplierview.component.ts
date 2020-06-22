import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/services/supplier.service';
import { Supplier } from 'src/app/models/supplier';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-supplierview',
  templateUrl: './supplierview.component.html',
  styleUrls: ['./supplierview.component.css']
})
export class SupplierviewComponent implements OnInit {

  public id: string;
  public supplier$: Observable<Supplier>;

  constructor(private route: ActivatedRoute,
              private supplierService: SupplierService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.supplier$ = this.supplierService.getSupplier(this.id);
  }

}

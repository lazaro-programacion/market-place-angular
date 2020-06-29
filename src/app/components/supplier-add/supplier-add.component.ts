import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.css']
})
export class SupplierAddComponent implements OnInit {

  private id = '';
  public nombre = '';
  public apellidos = '';
  public nif = '';
  public iban = '';
  public imagen = '';
  public active: boolean;
  public email = '';
  public description = '';


  constructor(private supplierService: SupplierService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.supplierService.getSupplier(this.id).subscribe(
        (e) => {
          this.nombre = e.nombre;
          this.apellidos = e.apellidos;
          this.nif = e.nif;
          this.iban = e.iban;
          this.imagen = e.imagen;
          this.active = e.active;
          this.email = e.email;
          this.description = e.description;
        }
      );
    }
  }

  save = () => {
    const newSu: Supplier = new Supplier();
    newSu.nombre = this.nombre;
    newSu.apellidos = this.apellidos;
    newSu.nif = this.nif;
    newSu.iban = this.iban;
    newSu.imagen = this.imagen;
    newSu.active = this.active;
    newSu.email = this.email;
    newSu.description = this.description;
    this.supplierService.saveSupplier(newSu, this.id).subscribe(
      () => {
        this.router.navigate(['/supplier']);
      }
    );
  }







}

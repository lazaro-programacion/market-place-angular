import { Component, OnInit } from '@angular/core';
import { Supplier} from '../../models/supplier';
import { EmailSupplierService } from '../../services/email-supplier.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-vendor',
  templateUrl: './form-vendor.component.html',
  styleUrls: ['./form-vendor.component.css'],
  providers: [EmailSupplierService]
})
export class FormVendorComponent implements OnInit {

  public supplier : Supplier;
  public extraDates: string;
  public status: string;

  constructor(
    private emailSupplierService : EmailSupplierService
  ) { }

  ngOnInit(): void {

    this.supplier = new Supplier();
    this.extraDates = '';
    this.status= '';

  }
  
  formulario(supplierForm){
    // console.log(this.supplier, this.extraDates)
    let datesSend ={
      nombre: this.supplier.nombre,
      cif: this.supplier.nif,
      iban: this.supplier.iban,
      email: this.supplier.email,
      extraDate: this.extraDates
    }
    console.log(datesSend)
 this.emailSupplierService.sendEmail(datesSend).subscribe(
   response =>{
     console.log(response)
        this.status = 'success';
        supplierForm.reset()
        console.log(this.status)
        /*
        this.supplier.nombre ='';
        this.supplier.nif = '';
        this.supplier.iban = '';
        this.supplier.email = '';
        this.extraDates = '';
        */
   },
   err =>{
    // console.log(err)
     var errorMessage = <any>err
             if(errorMessage != null){
              // let body = JSON.parse(err._body)
               this.status = 'error'
             }
   })
   console.log('status', this.status)
  }

  

}

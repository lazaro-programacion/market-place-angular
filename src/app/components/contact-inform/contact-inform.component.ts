import { Component, OnInit } from '@angular/core';
import { EmailSupplierService } from '../../services/email-supplier.service';
@Component({
  selector: 'app-contact-inform',
  templateUrl: './contact-inform.component.html',
  styleUrls: ['./contact-inform.component.css'],
  providers: [EmailSupplierService]
})
export class ContactInformComponent implements OnInit {
  public nombre: string;
  public apellidos: string;
  public email: string;
  public status: string;
  public extraDates: string;
  constructor(
    private emailSupplierService: EmailSupplierService
  ) { }

  ngOnInit(): void {
    this.nombre = '';
    this.apellidos = '';
    this.email = '';
    this.status = '';
    this.extraDates = '';
  }

  formulario(supplierForm){

    // tslint:disable-next-line: prefer-const
    let datesSend = {
      nombre: this.nombre,
      apellidos: this.apellidos,
      email: this.email,
      extraDate: this.extraDates
    };
    console.log(datesSend);
    this.emailSupplierService.sendEmail(datesSend).subscribe(
   response => {
     console.log(response);
     this.status = 'success';
     supplierForm.reset();
     console.log(this.status)
   },
   err => {
    // console.log(err)
     const errorMessage = err as any;
     if (errorMessage != null){
              // let body = JSON.parse(err._body)
               this.status = 'error';
             }
   });
    console.log('status', this.status);
  }




}

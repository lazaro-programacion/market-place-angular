import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/users';
import { UsersService } from '../../services/users.service';
import { ServicesService } from '../../services/services.service';
import { SupplierService } from '../../services/supplier.service';



@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  public user: Users;
  public identity: any;
  public token: string;
  public contactar: boolean;
  public informar: boolean;
  public progress: number;
  public status: string ;
  public show: boolean;
  public steps = false;
  public showOrden = false;
  public showDetail = false;
  public showConfirmar = false;
  public email: string;
  public orden: string;
  public detail = {
    servicio : '',
    proveedor: ''
  };

  public description: string;
  public confirm = false;
  constructor(
    private usersService: UsersService,
    private servicesService: ServicesService,
    private supplierService: SupplierService
  ) {
    this.contactar = false;
    this.informar = false;
    this.progress = 0;
    this.show = false;

    this.status = '';
    this.identity = this.usersService.getIdentity();
    this.token = this.usersService.getToken();
    this.user = this.identity;
    console.log(this.identity.usuario);
  }

  ngOnInit(): void {
  }

contacto(){
  this.contactar = true;
  this.informar = false;

}

informe(){
  this.contactar = false;
  this.informar = true;
}

mostrar(){
  this.steps = true;
  this.show = true;
}

anular(){
  this.email = '';
  this.orden = '';
  this.description = '';

  this.showOrden = false;
  this.showDetail = false;
  this.showConfirmar = false;
  this.contactar = false;
  this.informar = false;
  this.progress = 0;
  this.show = false;
  this.steps = false;
  this.status = '';
  this.detail = {
    servicio : '',
    proveedor: ''
  };
}

onSubmit(){
console.log(this.email);
this.email = this.email.toLowerCase();

if (this.email === ''){
  this.status = '';
}else{

this.usersService.getEmail(this.email).subscribe(
 response => {
  // console.log(response);
   this.user = response;

   if (this.user && (this.identity.email === this.user[0].email)){
    // this.status = 'success';
     this.showOrden = true;
     this.progress = this.progress + 25;

     this.show = false;
     // console.log(this.showOrden);

   }else{
     this.status = 'error';
   }

 },
 error => {

  const errorMessage = error as any;
  if (errorMessage != null){

   this.status = 'error';
 }
});

}


}



onOrder(){

console.log(this.orden);
if (this.orden.length === (undefined || 0)){
   //  this.status = 'error';
  return;
}else{
 // this.status = 'success';
  this.showDetail = true;
  this.progress = this.progress + 25;
  this.showOrden = false;
  console.log(this.progress, this.showOrden, this.showDetail);
}
}

onDetail(){

  if (this.detail === (undefined || null)){
    console.log('campos de servicio y proveedor deben estar rellenos')
    return;
  }else{
    this.showConfirmar = true;
    this.progress = this.progress + 25;
    this.showDetail = false;
    // this.status = 'success';
 }


}

  confirmar(){

    this.progress = this.progress + 25;
    this.confirm = true;
    this.showConfirmar = false;
  }


  exito(){
   this.confirm = false;
   this.status = 'success';
   const claimUser = {
    // id: uuid,
     usuario : this.identity.usuario,
     email : this.identity.email,
     userId : this.identity._id,
     orden: this.orden,
     servicio: this.detail.servicio,
     proveedor: this.detail.proveedor,
     descripcion: this.description

   }
   console.log('enviar', claimUser);

}


}

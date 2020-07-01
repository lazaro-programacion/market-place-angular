import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  providers: [MessageService]
})
export class CarritoComponent implements OnInit {

  public myCart: any[];
  public confirmMessage: any;
  public status : string;
  constructor(
    private messageService: MessageService
  ) {
    this.myCart = [];
  }

  ngOnInit(): void {
    this.myCart = JSON.parse(localStorage.getItem('cart'));
    console.log(this.myCart);
  }

  showConfirm() {
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity: 'info', summary:' Are you sure?', detail: 'Confirm to proceed'});
    this.status = 'success';
}

onConfirm() {
 this.messageService.clear('c');
 console.log(this.showSuccess());
 // localStorage.clear();
 this.myCart = [];

 localStorage.setItem('cart', JSON.stringify(this.myCart));
}

showSuccess() {
  if (this.status === 'success' ){
   return this.messageService.add({key: 'tl', severity: 'success', summary: 'Compra realizada con exito', detail: 'Order en curso'});
  }
  else if (this.status === 'warning' ){
    return this.messageService.add({key: 'tl', severity: 'info', summary: 'Compra anulada con exito', detail: 'puedes seguir comprando'});
   }
  else {
    return this.messageService.add({key: 'tl', severity: 'warning', summary: 'ha existido un problema', detail:'intentalo otra vez'});
  }

}

onReject() {
  this.messageService.clear('c');
}

clear() {
  this.messageService.clear();
}



deleteCart(){

  this.messageService.clear();
  this.messageService.add({key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed'});
  this.status = 'warning';

}

}

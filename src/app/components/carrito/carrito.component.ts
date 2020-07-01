import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Cart } from 'src/app/models/cart';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  providers: [MessageService]
})
export class CarritoComponent implements OnInit {

  public myCart: Cart[] = [];  /// El carrito ya tiene modelo
  public confirmMessage: any;
  public status: string;
  public totalCart: number;
  constructor(
    private messageService: MessageService,
    private cartService: CartService
  ) {
    this.myCart = [];
    this.totalCart = 100;
  }

  ngOnInit(): void {
    this.myCart = JSON.parse(localStorage.getItem('cartContent'));
    console.log('mi carrito', this.myCart);
  }

  showConfirm() {
    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'info', summary: ' Are you sure?', detail: 'Confirm to proceed' });
    this.status = 'success';
  }

  onConfirm() {
    this.messageService.clear('c');
    console.log(this.showSuccess());
    // localStorage.clear();

    const cart = {
      totalCart : this.totalCart,
       miCart : this.myCart
    }
    this.cartService.saveCart(cart).subscribe(
      res =>{ console.log('respuesta servidor', res)
              this.myCart = [];

              localStorage.setItem('cartContent', JSON.stringify(this.myCart));
    },
    error => {
      console.log('error', error);
    });


  }

  showSuccess() {
    if (this.status === 'success') {
      return this.messageService.add({ key: 'tl', severity: 'success', summary: 'Compra realizada con exito', detail: 'Order en curso' });
    }
    else if (this.status === 'warning') {
      // tslint:disable-next-line: max-line-length
      return this.messageService.add({ key: 'tl', severity: 'info', summary: 'Compra anulada con exito', detail: 'puedes seguir comprando' });
    }
    else {
      return this.messageService.add({ key: 'tl', severity: 'warning', summary: 'ha existido un problema', detail: 'intentalo otra vez' });
    }

  }

  onReject() {
    this.messageService.clear('c');
  }

  clear() {
    this.messageService.clear();
  }



  deleteCart() {

    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed' });
    this.status = 'warning';
    this.myCart = [];

    localStorage.setItem('cartContent', JSON.stringify(this.myCart));

  }

}

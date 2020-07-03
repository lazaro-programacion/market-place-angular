import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Cart } from 'src/app/models/cart';
import { CartService } from '../../services/cart.service';
import { element } from 'protractor';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  providers: [MessageService],
})
export class CarritoComponent implements OnInit {
  public myCart: Cart[] = []; /// El carrito ya tiene modelo
  public confirmMessage: any;
  public status: string;
  public precioTotal = 0;

  constructor(
    private messageService: MessageService,
    private cartService: CartService
  ) {
    this.myCart = [];
  }

  ngOnInit(): void {
    this.myCart = JSON.parse(localStorage.getItem('cartContent'));
    if (this.myCart === null) {
      return null;
    } else {
      const importe = this.myCart.reduce(
        (acc, actual) => acc + actual.service.price * actual.quantity,
        0
      );

      // tslint:disable-next-line: max-line-length
      this.precioTotal = Math.round(importe * 100) / 100;
    }
  }

  showConfirm() {
    this.messageService.clear();
    this.messageService.add({
      key: 'c',
      sticky: true,
      severity: 'info',
      summary: ' Are you sure?',
      detail: 'Confirm to proceed',
    });
    this.status = 'success';
  }

  onConfirm() {
    this.messageService.clear('c');
    // localStorage.clear();
    /*
    const cart = {
       totalCart : this.totalCart,
       miCart : this.myCart
    }
 */
    const cart = this.myCart;
    cart.forEach((element) => {
      this.cartService.saveCarts(element).subscribe(
        (res) => {},
        (error) => {}
      );
    });
    this.precioTotal = 0;
    this.myCart = [];

    localStorage.setItem('cartContent', JSON.stringify(this.myCart));
  }

  showSuccess() {
    if (this.status === 'success') {
      return this.messageService.add({
        key: 'tl',
        severity: 'success',
        summary: 'Compra realizada con exito',
        detail: 'Order en curso',
      });
    } else if (this.status === 'warning') {
      // tslint:disable-next-line: max-line-length
      return this.messageService.add({
        key: 'tl',
        severity: 'info',
        summary: 'Compra anulada con exito',
        detail: 'puedes seguir comprando',
      });
    } else {
      return this.messageService.add({
        key: 'tl',
        severity: 'warning',
        summary: 'ha existido un problema',
        detail: 'intentalo otra vez',
      });
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
    this.messageService.add({
      key: 'c',
      sticky: true,
      severity: 'warn',
      summary: 'Are you sure?',
      detail: 'Confirm to proceed',
    });
    this.status = 'warning';
  }
  borraProducto(idServici, idSupli) {
    const arrayfilter = this.myCart;
    // tslint:disable-next-line: no-shadowed-variable
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < arrayfilter.length; i++) {
      if (arrayfilter[i].service._id === idServici && arrayfilter[i].supplier._id === idSupli) {

        arrayfilter.splice(i, 1);
      }
    }
    this.myCart = arrayfilter;

    localStorage.setItem('cartContent', JSON.stringify(this.myCart));
    if (this.myCart === null) {
      return null;
    } else {
      const importe = this.myCart.reduce(
        (acc, actual) => acc + actual.service.price * actual.quantity,
        0
      );

      // tslint:disable-next-line: max-line-length
      this.precioTotal = Math.round(importe * 100) / 100;
    }
  }
  redondeo1(item) {
   return Math.round((item.quantity * item.service.price) * 100) / 100;
  }
}

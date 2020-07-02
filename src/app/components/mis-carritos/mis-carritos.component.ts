import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-mis-carritos',
  templateUrl: './mis-carritos.component.html',
  styleUrls: ['./mis-carritos.component.css']
})
export class MisCarritosComponent implements OnInit {
public misCarts: any;
public preload: boolean;
public mensaje: boolean;
  constructor(
    private cartService: CartService
  ) {
    this.misCarts = null;
    this.preload = false;

  }

  ngOnInit(): void {


      this.preload = true;
      this.cartService.misCarts().subscribe(
        res =>{
          console.log('respuesta', res);
          if(res.carts.length === 0  ){
            this.preload = false;
            return this.mensaje = true;
          }else{
            this.misCarts = res;
            this.preload = false;
            this.mensaje = false;
          }
          console.log(this.mensaje);
        },
        error => {
          console.log('error', error);
          this.preload = false;
        }
    );
  }

}

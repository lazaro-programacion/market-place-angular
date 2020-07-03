import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Users } from '../models/users';
import { Cart } from '../models/cart';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GLOBAL } from '../../config/global';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  public url: string;
  public identity: any;
  public token: string;

  constructor(private httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }
  getToken = () => {
    const token = localStorage.getItem('token');
    if (token !== 'undefined') {
      this.token = token;
    } else {
      this.token = null;
    }
    return this.token;
  }

  getIdentity = () => {
    const identity = JSON.parse(localStorage.getItem('identity'));
    if (identity !== 'undefined') {
      this.identity = identity;
    } else {
      this.identity = null;
    }
    return this.identity;
  }
// metodo que envia un array
  saveCart = (cart: any): Observable<any> => {
    console.log('saving', cart);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.getToken(),
    });
    return this.httpClient
      .post<any>(this.url + '/cart/', cart, {headers});
  }

// metodo que solo envia un cart
  saveCarts = (carts: any): Observable<any> => {
    console.log('saving', carts);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.getToken()
    });
    return this.httpClient
      .post<any>(this.url + '/cart/orders/', carts, {headers});
  }






  misCarts = (): Observable<any> => {
    console.log('mis carts');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.getToken(),
    });
    return this.httpClient
      .get<any>(this.url + '/cart/cart-user/', {headers});
  }

getCarts = (): Observable<any> => {
  console.log('total carts para admin');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.getToken(),
  });
  return this.httpClient
    .get<any>(this.url + '/cart/carts/', {headers});
}

getCartsFilterDates= (start: Date, end: Date): Observable<any> => {
  console.log('Filtro carts fechas', start, end);
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.getToken(),
  });
  return this.httpClient
    .get<any>(this.url + '/cart/cart-filter/' + start + '&' + end, {headers});
}

}

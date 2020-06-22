import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Supplier } from '../models/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private httpClient: HttpClient) {
  }

  getSuppliers = () => {
    return this.httpClient.get<Supplier[]>('http://localhost:4000/api/supplier/');
  }


  getSupplier = (id: string) => {
    return this.httpClient.get<Supplier>('http://localhost:4000/api/supplier/' + id);
  }

  // TODO: Implementar los demas
}

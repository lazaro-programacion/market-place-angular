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

  // TODO: Implementar los demas
}

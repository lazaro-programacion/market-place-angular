import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Service } from '../models/service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
  };


  constructor(private httpClient: HttpClient) { }

  getServices = () => {
    return this.httpClient.get<Service[]>('http://localhost:4000/api/service');
  }

  getService = (id: string) => {
    return this.httpClient.get<Service>('http://localhost:4000/api/service/' + id);

  }

  createService = (service: Service): Observable<Service> => {
    console.log('Guardando servicio', service);
    return null;
  }

  deleteService = () => {

  }

}

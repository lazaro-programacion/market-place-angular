import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Service } from '../models/service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient: HttpClient) { }

  getServices = () => {
    return this.httpClient.get<Service[]>('http://localhost:4000/api/service');
  }

  getService = (id: string) => {
    return this.httpClient.get<Service>('http://localhost:4000/api/service/' + id);
  }

  createService = (service: Service): Observable<Service> => {
    console.log('Guardando servicio', service);
    // TODO: Implementar

    return this.httpClient.post<Service>('http://localhost:4000/api/service', service);
  }

  editService = (service: Service) => {
    console.log('editando servicio', service._id);
    return this.httpClient.put<Service>('http://localhost:4000/api/service/' + service._id, service);
  }

}

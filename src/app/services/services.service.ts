import { Injectable } from '@angular/core';
import { PrbService } from '../models/prb-service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private services: PrbService[];

  constructor() {
    this.services = [
      new PrbService('1', 'antivirus1', 'instalación de antivirus1', 'sample.jpg', true),
      new PrbService('1', 'antivirus2', 'instalación de antivirus2', 'sample.jpg', true),
      new PrbService('1', 'antivirus3', 'instalación de antivirus3', 'sample.jpg', true),
      new PrbService('1', 'antivirus4', 'instalación de antivirus4', 'sample.jpg', true),
      new PrbService('1', 'antivirus5', 'instalación de antivirus5', 'sample.jpg', true),
      new PrbService('1', 'antivirus6', 'instalación de antivirus6', 'sample.jpg', true),
      new PrbService('1', 'antivirus7', 'instalación de antivirus7', 'sample.jpg', true),
      new PrbService('1', 'antivirus8', 'instalación de antivirus8', 'sample.jpg', true),
      new PrbService('1', 'antivirus9', 'instalación de antivirus9', 'sample.jpg', true),
      new PrbService('1', 'antivirus10', 'instalación de antivirus10', 'sample.jpg', true),
    ];
  }

  public getServices(): PrbService[] {
    return this.services;
  }

  public getService(id: string): PrbService {
    return this.services.filter(i => i.id === id)[0];
  }

  public createService(service: PrbService) {
    this.services = [
      ...this.services.filter(i => i.id !== service.id), service
    ];
  }

  public deleteService(service: PrbService) {
    this.services = this.services.filter(i => i.id !== service.id);
  }
}

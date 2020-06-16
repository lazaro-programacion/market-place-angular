import { Injectable } from '@angular/core';
import { PrbService } from '../models/prb-service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private services: PrbService[];

  constructor() {
    this.services = [
      new PrbService('1', 'antivirus1', 'Id aliquip id velit mollit amet fugiat incididunt enim cupidatat magna.Mollit cillum ullamco sint nostrud aute sunt nostrud nostrud veniam ea irure cupidatat.', 'https://picsum.photos/150/200', true),
      new PrbService('2', 'antivirus2', 'Velit duis pariatur officia officia amet adipisicing laboris ad nulla id pariatur.', 'https://picsum.photos/150/200', true),
      new PrbService('3', 'antivirus3', 'Aliqua amet incididunt consectetur tempor ut in anim anim aute incididunt eu.', 'https://picsum.photos/150/200', true),
      new PrbService('4', 'antivirus4', 'Labore enim elit minim culpa cupidatat eiusmod sit ullamco magna qui cupidatat culpa.', 'https://picsum.photos/150/200', true),
      new PrbService('5', 'antivirus5', 'Deserunt id sit nulla ipsum.Anim occaecat reprehenderit velit voluptate aliquip qui commodo.', 'https://picsum.photos/150/200', true),
      new PrbService('6', 'antivirus6', 'Pariatur in laboris esse in commodo eiusmod eu irure elit excepteur id excepteur consequat.. Consequat commodo est veniam irure mollit do minim. de antivirus6', 'https://picsum.photos/150/200', true),
      new PrbService('7', 'antivirus7', 'Exercitation commodo ea in eiusmod cupidatat. Est ut minim excepteur ex laboris. Officia velit commodo culpa labore consequat.', 'https://picsum.photos/150/200', true),
      new PrbService('8', 'antivirus8', 'Nulla deserunt enim cillum aliqua sint.. Laboris officia minim duis culpa veniam nostrud eu culpa fugiat ad ex amet Lorem.', 'https://picsum.photos/150/200', true),
      new PrbService('9', 'antivirus9', 'Nostrud aute commodo ipsum aute duis commodo nulla mollit irure eiusmod.', 'https://picsum.photos/150/200', true),
      new PrbService('10', 'antivirus10', 'Sunt eiusmod eu incididunt nulla consequat sit velit consectetur occaecat sint nulla.', 'https://picsum.photos/150/200', true),
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

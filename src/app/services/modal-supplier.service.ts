import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalSupplierService {

  public selectedSupplier = new EventEmitter();
  constructor() { }
}

import { Component, OnInit, DoCheck } from '@angular/core';
import { PrbService } from 'src/app/models/prb-service';
import { ServicesService } from 'src/app/services/services.service';
import { SupplierService} from 'src/app/services/supplier.service';
import { Router, ActivatedRoute, Params } from "@angular/router";

import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ServicesService]
})
export class SearchComponent implements OnInit, DoCheck {
  public code = '';
  public prService: PrbService[];
  
  cars: SelectItem[];
  selectedCar: string;

  constructor(
    private serviceService: ServicesService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.cars = [
      {label: 'Audi', value: 'Audi'},
      {label: 'BMW', value: 'BMW'},
      {label: 'Fiat', value: 'Fiat'},
      {label: 'Ford', value: 'Ford'},
      {label: 'Honda', value: 'Honda'},
      {label: 'Jaguar', value: 'Jaguar'},
      {label: 'Mercedes', value: 'Mercedes'},
      {label: 'Renault', value: 'Renault'},
      {label: 'VW', value: 'VW'},
      {label: 'Volvo', value: 'Volvo'}
  ];
   }

  ngOnInit(): void {
    this.code = this.route.snapshot.paramMap.get('search');
    console.log('params', this.code)
  }

  ngDoCheck(): void {
    this.code = this.route.snapshot.paramMap.get('search');
    console.log('params', this.code)
  }

}

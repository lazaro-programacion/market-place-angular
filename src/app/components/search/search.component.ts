import { Component, OnInit, DoCheck } from '@angular/core';
import { Service } from 'src/app/models/service';
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
  public prService: Service[];
  public services: Service[];
  public servFiltrados: any[]
  //public items: any[]
  
  items: SelectItem[];
  
  selectedItem: string;

  responsiveOptions;


  constructor(
    private serviceService: ServicesService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    
   
  this.responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];
  
this.selectedItem=''
this.items= []
this.servFiltrados= []
this.services = []
   }

  ngOnInit(): void {
    this.code = this.route.snapshot.paramMap.get('search');
  console.log('code', this.code)
  
  console.log('los servicios', this.services);
 this.serviceService.getServices().subscribe(
    serv => {
        this.services = serv;
        this.services.forEach(element => {
            this.items.push({
              label: element.descripcion,
              value: element.nombre
            });

        });
        this.servicesFilter(this.code)
    }
);

    
  //  console.log('los servicios', this.items);
   

  }

  ngDoCheck(): void {


  this.code = this.route.snapshot.paramMap.get('search');
    // console.log('params', this.code)
 
  this.servicesFilter(this.code)
 
    
   
  
   console.log('los servicios', this.services);
  
 

  

  }

  servicesFilter(search){

  //  console.log('mi busqueda', search)

    this.servFiltrados = this.services.filter(

   e => (e.nombre.toUpperCase().includes(search.toUpperCase() ) ) )
          
  
    console.log('servicios filtrados', this.servFiltrados)
  
   }
}





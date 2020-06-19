import { Component, OnInit, DoCheck } from '@angular/core';
import { Service } from 'src/app/models/service';
import { ServicesService } from 'src/app/services/services.service';
import { SupplierService } from 'src/app/services/supplier.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { SelectItem } from 'primeng/api';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ServicesService]
})
export class SearchComponent implements OnInit, DoCheck {
  public code = '';
  public services: Service[];
  public servFiltrados: any[];
  public items: SelectItem[];
  public selectedItem: string;
  public responsiveOptions: any[];

  constructor(
    private serviceService: ServicesService,
    private route: ActivatedRoute
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

    this.selectedItem = ''
    this.items = []
    this.servFiltrados = []
    this.services = []
  }

  ngOnInit(): void {
    this.code = this.route.snapshot.paramMap.get('search');
    this.serviceService.getServices().subscribe(
      serv => {
        this.services = serv;
        this.services.forEach(element => {
          this.items.push({
            label: element.descripcion,
            value: element.nombre
          });

        });
        this.servicesFilter(this.code);
      }
    );
  }

  ngDoCheck(): void {
    this.code = this.route.snapshot.paramMap.get('search');
    this.servicesFilter(this.code);
  }

  servicesFilter(search: string) {
    this.servFiltrados = this.services.filter(
      e => (e.nombre.toUpperCase().includes(search.toUpperCase())));
  }
}





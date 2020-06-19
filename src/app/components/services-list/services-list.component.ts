import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Service } from 'src/app/models/service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css'],
  providers: []
})
export class ServicesListComponent implements OnInit {

  displayDialog: boolean;
  sortOptions: SelectItem[];
  sortKey: string;
  sortField: string;
  sortOrder: number;

  selectedService: Service;


  public services: Service[];
  public administrador = false;

  constructor(private serviceService: ServicesService) { }

  ngOnInit(): void {
    this.serviceService.getServices().subscribe(
      serv => {
        this.services = serv;
      }
    );
    console.log('services', this.services);
  }

  toggleAdministrador() {
    this.administrador = !this.administrador;
    console.log('admin', this.administrador);
  }

  selectService(event: Event, service: Service) {
    this.selectedService = service;
    this.displayDialog = true;
    event.preventDefault();
  }

  onDialogHide() {
    this.selectedService = null;
  }

  serviceDetails(service: Service) {
    console.log('Nuevo servicio');

  }

}

import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Service } from 'src/app/models/service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css'],
  providers: [],
})
export class ServicesListComponent implements OnInit {
  public displayDialog: boolean;
  public sortOptions: SelectItem[];
  public sortKey: string;
  public sortField: string;
  public sortOrder: number;
  public selectedService: Service;
  public search = '';

  public services: Service[];
  public allServices: Service[];
  public user: any;

  public inactiveViewFlag = false;

  constructor(private serviceService: ServicesService) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('identity'));
    this.serviceService.getServices().subscribe((serv) => {
      this.allServices = serv;
      this.services = this.activeServicesList();
    });
  }

  // TODO: añadir botón para admin que liste servicios desactivados
  activeServicesList = () => {
    if (this.inactiveViewFlag) {
      return this.allServices.filter((item) => item.active === false);
    } else {
      return this.allServices.filter((item) => item.active === true);
    }
  };

  selectService(event: Event, service: Service) {
    this.selectedService = service;
    this.displayDialog = true;
    event.preventDefault();
  }

  onDialogHide() {
    this.selectedService = null;
  }

  inactiveViewToggle = () => {
    this.services = this.activeServicesList();
  };

  buscar() {
    this.serviceService.getServices().subscribe((res) => {
      this.allServices = res.filter(
        (item) =>
         (item.nombre && item.descripcion ) ? (item.nombre.includes(this.search) || item.descripcion.includes(this.search)) : null

      );
      this.services = this.activeServicesList();
      this.search = '';
    });
  }
}

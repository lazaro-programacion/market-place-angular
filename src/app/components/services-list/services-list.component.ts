import { Component, OnInit, DoCheck } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { PrbService } from 'src/app/models/prb-service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit, DoCheck {

  displayDialog: boolean;

  sortOptions: SelectItem[];

  selectedService: PrbService;

  sortKey: string;

  sortField: string;

  sortOrder: number;

  public services: PrbService[];

  constructor(private serviceService: ServicesService) { }

  ngOnInit(): void {
  }
  ngDoCheck(): void {
    this.services = this.serviceService.getServices();
  }

  selectService(event: Event, service: PrbService) {
    this.selectedService = service;
    this.displayDialog = true;
    event.preventDefault();
}

onDialogHide() {
  this.selectedService = null;
}

}

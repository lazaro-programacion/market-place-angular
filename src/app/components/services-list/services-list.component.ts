import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Service } from 'src/app/models/service';
import { SelectItem } from 'primeng/api';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css'],
  providers: []
})
export class ServicesListComponent implements OnInit {

  public displayDialog: boolean;
  public sortOptions: SelectItem[];
  public sortKey: string;
  public sortField: string;
  public sortOrder: number;
  public selectedService: Service;

  public services: Service[];
  public user: Users;

  constructor(private serviceService: ServicesService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.serviceService.getServices().subscribe(
      serv => {
        this.services = serv;
      }
    );
  }

  activeServicesList = (filter: string) => {
    if (filter === 'A') {
      return this.services.filter(item => item.active === true);
    } else if (filter === 'I') {
      return this.services.filter(item => item.active === false);
    } else { return this.services; }
  }

  selectService(event: Event, service: Service) {
    this.selectedService = service;
    this.displayDialog = true;
    event.preventDefault();
  }

  onDialogHide() {
    this.selectedService = null;
  }

}

import { Component, OnInit } from '@angular/core';
import {ServicesService} from 'src/app/services/services.service';
import { Service } from 'src/app/models/service';


@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.css']
})
export class ServiceAddComponent implements OnInit {

  public service: Service;

  constructor(private serviceService: ServicesService) { }

  ngOnInit(): void {
  }

}

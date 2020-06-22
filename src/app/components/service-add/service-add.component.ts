import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Service } from 'src/app/models/service';



@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.css']
})
export class ServiceAddComponent implements OnInit {


  public service: Service;
  public administrador: boolean;

  constructor(private serviceService: ServicesService) { }

  ngOnInit(): void {
    // console.log('servicio', history.state.data);
    // const id = history.state.id;
    this.administrador = true; // history.state.admin;
    const id = '5ee74de88e04772fb4f8f299'; // solo para pruebas
    this.serviceService.getService(id).subscribe(
      serv => {
        this.service = serv;
        // console.log('serv', serv);
      }
    );


  }

}

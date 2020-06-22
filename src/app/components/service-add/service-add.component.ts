import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Service } from 'src/app/models/service';



@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.css']
})
export class ServiceAddComponent implements OnInit {


  public administrador = history.state.admin;
  public service: Service;
  public id = history.state.id;

  constructor(private serviceService: ServicesService) { }

  ngOnInit(): void {
    this.administrador = true; // history.state.admin;
    // const id = '5ee74de88e04772fb4f8f299'; // solo para pruebas
    this.getTheService(this.id);

  }

  getTheService = (id: string) => {
    this.serviceService.getService(id).subscribe(
      serv => {
        this.service = serv;
      }
    );

    console.log('service', this.service);

  }

  editServicio(id: string) {
    console.log('Editar servicio', id, this.service);
    // TODO: editar servicio
  }

  nuevoServicio() {
    console.log('nuevo servicio');
    this.serviceService.createService(this.service).subscribe(
      serv => console.log('servicio', serv)
    );
    // TODO: añadir validación y comprobación
  }

  activeServiceToggle(id: string) {
    console.log('togle servicio activo');
    // TODO: cambiar servicio de activo a inactivo

  }

  cancelAction() {
    console.log('cancelar la edicion/creación');
    // TODO: si se pulsa restaurar el contenido por defecto
    this.getTheService(this.id);
  }
}

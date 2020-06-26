import { Component, OnInit, DoCheck } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Service } from 'src/app/models/service';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/models/users';



@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.css']
})
export class ServiceAddComponent implements OnInit {


  public service: Service;
  public id = history.state.id;
  public saveId: string;
  public user: any;

  constructor(private serviceService: ServicesService, private userService: UsersService) { }

  ngOnInit(): void {
    if (this.id) {
      localStorage.setItem('savedId', this.id);
    } else {
      this.id = localStorage.getItem('savedId');
    }
    this.user = this.userService.getIdentity();
    this.getTheService(this.id);
  }

  getTheService = (id: string) => {
    this.serviceService.getService(id).subscribe(
      serv => {
        this.service = serv;
      }
    );
  }

  editServicio(id: string) {
    this.serviceService.editService(this.service).subscribe(
      ser => console.log('servicio editado', this.service)
    );

  }

  nuevoServicio() {
    console.log('nuevo servicio');
    this.serviceService.createService(this.service).subscribe(
      serv => console.log('servicio', serv)
    );
    // TODO: añadir validación y comprobación
  }

  onChangeAlert = (event) => {
    console.log('tecla pulsada');
    if (this.service.descripcion !== event.target.value) {

      console.log('¡Hay cambios!');
    } else {
      console.log('sin cambios');
    }
  }

  cancelAction() {
    console.log('cancelar la edicion/creación');
    // TODO: si se pulsa restaurar el contenido por defecto
    this.getTheService(this.id);
  }
}

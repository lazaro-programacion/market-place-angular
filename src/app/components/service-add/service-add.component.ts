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
  public user: any;
  public oldService: Service;


  constructor(private serviceService: ServicesService, private userService: UsersService) { }

  ngOnInit(): void {
    if (this.id) {
      localStorage.setItem('savedId', this.id);
    } else {
      this.id = localStorage.getItem('savedId');
    }
    this.user = this.userService.getIdentity();
    console.log(this.id);
    this.getTheService(this.id);

  }

  getTheService = (id: string) => {
    this.serviceService.getService(id).subscribe(
      serv => {
        this.service = serv;
        console.log(this.service);
        this.oldService = {...this.service};
        // localStorage.setItem('savedNombre', this.service.nombre);
        // localStorage.setItem('savedDescricion', this.service.descripcion);
        // localStorage.setItem('savedPrice', this.service.price.toString());
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

  onChangeNombre = (event) => {
    const actualBg = event.target.style.background;
    if (localStorage.getItem('savedNombre') !== event.target.value) {
     // event.target.style.background = 'red';
    } else {
     // event.target.style.background = actualBg;

    }
  }
  onChangeDescripcion = (event) => {
    console.log('antiguo', localStorage.getItem('savedDescricion'));
    console.log('nuevo', event.target.value);
    if (localStorage.getItem('savedDescripcion') !== event.target.value) {
      console.log('hay cambios');
    }
  }
  onChangePrice = (event) => {
    console.log('antiguo', localStorage.getItem('savedPrice'));
    console.log('nuevo', event.target.value);
    if (parseFloat(localStorage.getItem('savedPrice')) !== event.target.value) {
      console.log('hay cambios');
    }
  }

  cancelAction() {
    console.log('cancelar la edicion/creación');
    // TODO: si se pulsa restaurar el contenido por defecto
    this.getTheService(this.id);
  }
}

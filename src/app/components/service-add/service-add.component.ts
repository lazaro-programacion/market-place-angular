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
  public nombreBgColor = '#ffffff';
  public descripcionBgColor = '#ffffff';
  public priceBgColor = '#ffffff';
  public createMode = false;
  public editMode = false;


  constructor(private serviceService: ServicesService, private userService: UsersService) { }

  ngOnInit(): void {
    if (this.id) {
      localStorage.setItem('savedId', this.id);
    } else {
      this.id = localStorage.getItem('savedId');
    }
    this.user = this.userService.getIdentity();
    console.log(this.user);
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
    this.editMode = true;
    this.oldService = { ...this.service };
  }

  guardarEditado() {
    this.serviceService.editService(this.service).subscribe(
      ser => console.log('servicio editado', this.service)
    );
    this.createMode = false;
    this.editMode = false;
  }


  nuevoServicio = () => {
    this.service = { _id: '', active: true, nombre: '', descripcion: '', price: 0, imagen: '' };
    this.createMode = true;

  }

  guardarNuevo() {
    this.serviceService.createService(this.service).subscribe(
      serv => console.log('servicio creado', serv)
    );
  }

  onChangeNombre = () => {
    if (this.editMode) {
      if (this.oldService.nombre !== this.service.nombre) {
        this.nombreBgColor = '#F76F6F';
      } else {
        this.nombreBgColor = '#ffffff';
      }
    }
  }

  onChangeDescripcion = () => {
    if (this.editMode) {
      if (this.oldService.descripcion !== this.service.descripcion) {
        this.descripcionBgColor = '#F76F6F';
      } else {
        this.descripcionBgColor = '#ffffff';
      }
    }
  }

  onChangePrice = () => {
    if (this.editMode) {
      if (this.oldService.price.toString() !== this.service.price.toString()) {
        this.priceBgColor = '#F76F6F';
      } else {
        this.priceBgColor = '#ffffff';
      }
    }
  }

  cancelAction() {
    this.service = this.oldService;
    this.createMode = false;
    this.editMode = false;
  }

  supplierSelector = () => {
    console.log('Seleccionar proveedor');
    // TODO: método selección de proveedor
  }
}

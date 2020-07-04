import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Service } from 'src/app/models/service';
import { SupplierService } from 'src/app/services/supplier.service';
import { Supplier } from 'src/app/models/supplier';
import { ShowSuppliersComponent } from '../show-suppliers/show-suppliers.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalSupplierService } from 'src/app/services/modal-supplier.service';
import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Cart } from 'src/app/models/cart';


@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.css']
})
export class ServiceAddComponent implements OnInit {


  public service: Service;
  public oldService: Service;
  public suppliers: Supplier[];
  public selectedSupplier: Supplier;
  public idService = history.state.id;
  public user: any;
  public productCount = 0;
  public cartContent: Cart[] = [];
  // misc vars
  public nombreBgColor = '#ffffff';
  public descripcionBgColor = '#ffffff';
  public priceBgColor = '#ffffff';
  // flags
  public createMode = false;
  public editMode = false;
  // upload vars
  public image: File;


  constructor(
    private serviceService: ServicesService,
    private supplierService: SupplierService,
    private modalService: NgbModal,
    private modalSupplierService: ModalSupplierService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }


  ngOnInit(): void {

    this.route.params.subscribe(val => {
      console.log('valid',val.id)
      if (val.id) { this.getTheService(val.id); } else { return; }

    });

    if (this.idService) {
      localStorage.setItem('savedId', this.idService);
    } else {
      this.idService = localStorage.getItem('savedId');
    }

    this.getTheService(this.idService);
    localStorage.removeItem('savedId' );
    this.supplierService.getSuppliers().subscribe(
      res => this.suppliers = res
    );

    this.modalSupplierService.selectedSupplier.subscribe(
      res => this.selectedSupplier = res
    );

    this.user = JSON.parse(localStorage.getItem('identity'));

    const localCart = localStorage.getItem('cartContent');
    this.cartContent = localCart ? JSON.parse(localCart) : [];
    // console.log('carrito', this.cartContent);

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
    this.createMode = false;
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
    this.oldService = { ...this.service };
    this.service = { _id: '', active: true, nombre: '', descripcion: '', price: 0, imagen: '' };
    this.createMode = true;
    this.editMode = false;

  }

  guardarNuevo() {
    this.serviceService.createService(this.service).subscribe(
      serv => console.log('servicio creado', serv)
    );
    this.createMode = false;
    this.editMode = false;

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
    const modalRef = this.modalService.open(ShowSuppliersComponent);
    modalRef.componentInstance.suppliers = this.suppliers;
  }

  incProductCount = () => {
    this.productCount++;
  }

  decProductCount = () => {
    if (this.productCount > 0) { this.productCount--; }
  }

  addToKart = () => {
    // TODO: metodo para enviar al carro
    console.log('Añadir al carro', this.service, this.selectedSupplier);
    const actualCart = new Cart(
      this.service,
      this.selectedSupplier,
      this.productCount
    );
    this.cartContent = [...this.cartContent, actualCart];
    console.log('cart-content', this.cartContent);
    localStorage.setItem('cartContent', JSON.stringify(this.cartContent));

    this.router.navigateByUrl('/service');
  }

  // image upload functions
  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image = file;
      console.log(this.image.name);
    }
  }

  onImageSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', this.image);
    console.log('imagen seleccionada', formData);

    this.http.post<any>('http://localhost:4000/api/service/upload', formData).subscribe(
      res => {
        this.service.imagen = res.url;
      },
      err => console.log(err)
    );
  }


}

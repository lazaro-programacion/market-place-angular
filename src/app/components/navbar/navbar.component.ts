import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { Service } from 'src/app/models/service';
import { ServicesService } from 'src/app/services/services.service';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/services/supplier.service';
import { Users } from '../../models/users';
import { Router, ActivatedRoute } from '@angular/router';

import { MenuItem } from 'primeng/api';
import { GLOBAL } from '../../../config/global';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ServicesService, SupplierService],
})
export class NavbarComponent implements OnInit, DoCheck {
  @Input() identity: Users;
  @Input() token: string;

  public url: string;

  public visibleSidebar: boolean;
  public itemsService: any[];
  public itemsSupplier: any[];
  itemsSub: MenuItem[];
  itemsMenu: MenuItem[];
  itemsSide: MenuItem[];
  activeItem: MenuItem;
  public mostrar = true;
  itemsMenu1: MenuItem[];
  public activar = false;

  displayBasic: boolean;
  displayPosition: boolean;
  position: string;
  public carrito: Cart[] = [];
  public carro1 = '';
  public entarDocheck = false;
  public login: boolean;
  public search: string;
  public services: Service[] = [];
  public supplierServices: Supplier[] = [];

  constructor(
    private supplierService: SupplierService,
    private serviceService: ServicesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.url = GLOBAL.url;

    this.login = false;
    this.search = '';
    this.itemsService = [];
    this.itemsSupplier = [];
    this.serviceService.getServices().subscribe((serv) => {
      this.services = serv.filter((item) => item.active === true);
      this.services.forEach((element) => {
        this.itemsService.push({
          label: element.nombre,
          icon: 'pi pi-android',
          routerLink: 'service/add/' + element._id,
        });
      });
    });
    // console.log('los servicios', this.services);

    this.supplierService.getSuppliers().subscribe((response) => {
      this.supplierServices = response.filter((item) => item.active === true);
      this.supplierServices.forEach((element) => {
        this.itemsSupplier.push({
          label: element.nombre,
          icon: 'pi pi-briefcase',
          routerLink: '/supplier/view/' + element._id,
        });
      });
    });

    // onsole.log('array', this.itemsService, this.itemsSupplier);

    this.itemsSide = [
      {
        label: 'SERVICIOS',
        icon: 'pi pi-tags',
        items: this.itemsService,
      },
      {
        label: 'PROVEEDORES',
        icon: 'pi pi-fw pi-users',
        items: this.itemsSupplier,
      },
      {
        label: 'Usuarios Settings',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Mis datos',
            icon: 'pi pi-pi pi-id-card',
            routerLink: 'editar-perfil',
          },
          {
            label: 'Atencion al cliente',
            icon: 'pi pi-pi pi-tablet',
            routerLink: 'contacta',
          },
        ],
      },
      {
        label: 'CARRITO',
        icon: 'pi pi-shopping-cart ',
        items: [
          {
            label: 'Carrito ',
            icon: 'pi pi-fw pi-calendar',
            routerLink: 'carrito',
          },
          {
            label: 'Mis Carritos',
            icon: 'pi pi-fw pi-heart',
            routerLink: 'mis-carritos',
          },
        ],
      },
    ];

    this.itemsSub = [
      {
        label: 'Contacta con nosotros',
        icon: 'pi pi-fw pi-envelope',
        routerLink: 'contacto',
      },
      {
        label: 'Vende con nosotros',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: 'form-vendedor',
      },
    ];

    this.carrito = JSON.parse(localStorage.getItem('cartContent'));
    this.itemsMenu1 = [
      { label: 'Lista-Usuarios', icon: 'pi pi-users', routerLink: '/lista' },
    ];
    this.itemsMenu = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/home' },
      {
        label: 'Nuestros servicios',
        icon: 'pi pi-fw pi-microsoft',
        routerLink: '/service',
      },
      {
        label: 'Proveedores',
        icon: 'pi pi-user-minus',
        routerLink: '/supplier',
        // command: (event) => {console.log('menu event', event.item.label, event.originalEvent);}
      },
      {
        label: 'Buscar',
        icon: 'pi pi-fw pi-search-minus',
        routerLink: '/buscador/ ' + '',
      },
      {
        label: 'Usuarios',
        icon: 'pi pi-fw pi-user',
        routerLink: '/editar-perfil',
      },
      {
        label: 'Carrito',
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink: '/carrito',
      },
    ];

    if (localStorage.getItem('cartContent') === null) {
      return null;
    } else {
      this.carrito = JSON.parse(localStorage.getItem('cartContent'));

      if (this.carrito.length.toString() === '0') {
        this.carro1 = '';
      } else {
        this.carro1 = this.carrito.length.toString();
      }
    }
    this.activeItem = this.itemsMenu[0];
  }

  ngDoCheck() {
    if (localStorage.getItem('cartContent') === null) {
      return null;
    } else {
      if (this.carrito === null) {
        return null;
      } else if (
        this.carrito.length.toString() !==
        JSON.parse(localStorage.getItem('cartContent')).length.toString()
      ) {
        this.carrito = JSON.parse(localStorage.getItem('cartContent'));
        if (this.carrito.length.toString() === '0') {
          this.carro1 = '';
        } else {
          this.carro1 = this.carrito.length.toString();
        }
      }

    }
    console.log('carriito', this.carrito.length.toString());
    console.log(
      'json',
      JSON.parse(localStorage.getItem('cartContent')).length.toString()
    );
    console.log('carro1', this.carro1);
  }

  buscador() {
    this.router.navigate(['/buscador', this.search]);
    this.search = '';
  }

  handleClick(event: Event) {
    // execute action
    event.preventDefault();
    this.login = !this.login;
  }

  logear() {
    this.router.navigate(['login']);
    this.displayBasic = false;
  }

  registrar() {
    this.router.navigate(['registro']);
    this.displayBasic = false;
  }

  logout() {
    localStorage.clear();
    this.carro1 = '';
    this.identity = null;
    this.token = null;
    this.router.navigate(['/home']);
  }

  showBasicDialog() {
    this.displayBasic = true;
  }
  cambiazoOff() {
    this.activar = false;
  }
  cambiazoOn() {
    this.activar = true;
  }
}

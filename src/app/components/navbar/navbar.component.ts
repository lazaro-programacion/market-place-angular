import { Component, OnInit, DoCheck } from '@angular/core';
import { Service } from 'src/app/models/service';
import { ServicesService } from 'src/app/services/services.service';
import { Supplier} from 'src/app/models/supplier';
import { SupplierService} from 'src/app/services/supplier.service';
import { Router, ActivatedRoute } from '@angular/router';

import { MenuItem } from 'primeng/api';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    providers: [ServicesService, SupplierService]
})
export class NavbarComponent implements OnInit {

    visibleSidebar1: any;
    public itemsService: any[];
    public itemsSupplier: any[];
    items2: MenuItem[];
    items4: MenuItem[];
    items5: MenuItem[];
    activeItem: MenuItem;

    displayBasic: boolean;
    displayPosition: boolean;
    position: string;

    public login: boolean;
    public search: string;
    public services: Service[] = [];
    public supplierServices: Supplier[] = [];


    constructor(
        private supplierService: SupplierService,
        private serviceService: ServicesService,
        private router: Router,
        private route: ActivatedRoute
    ) {

    }


    ngOnInit() {

        this.login = false;
        this.search = '';
        this.itemsService = [];
        this.itemsSupplier = [];
        this.serviceService.getServices().subscribe(
            serv => {
                this.services = serv;
                this.services.forEach(element => {
                    this.itemsService.push({
                        label: element.nombre,
                        icon: 'pi pi-android',
                        routerLink: '/service/' + element._id
                    });
                });
            }
        );
        console.log('los servicios', this.services);

        this.supplierService.getSuppliers().subscribe(
            response => {
               this.supplierServices = response;
               this.supplierServices.forEach(element => {
                   this.itemsSupplier.push({
                    label: element.nombre,
                    icon: 'pi pi-briefcase',
                    routerLink: '/supplier/' + element._id
                   });
               });
            }
        );


        console.log('array', this.itemsService, this.itemsSupplier);

        this.items5 = [
            {
                label: 'SERVICIOS',
                icon: 'pi pi-tags',
                items: this.itemsService
            },
            {
                label: 'PROVEEDORES',
                icon: 'pi pi-fw pi-users',
                items: this.itemsSupplier
            },
            {
                label: 'Usuarios Settings',
                icon: 'pi pi-cog',
                items: [
                    {
                        label: 'Contents',
                        icon: 'pi pi-pi pi-bars'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-pi pi-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'User',
                                icon: 'pi pi-fw pi-file',
                            }
                        ]
                    }
                ]
            },
            {
                label: 'CARRITO',
                icon: 'pi pi-shopping-cart',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            { label: 'Save', icon: 'pi pi-fw pi-save' },
                            { label: 'Update', icon: 'pi pi-fw pi-save' },
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'pi pi-fw pi-tags',
                        items: [
                            { label: 'Delete', icon: 'pi pi-fw pi-minus' }
                        ]
                    }
                ]
            }
        ];


        this.items2 = [
            {
                label: 'About',
                icon: 'pi pi-fw pi-users'
            },
            {
                label: 'Business',
                icon: 'pi pi-fw pi-briefcase'
            }
        ];

        this.items4 = [
            {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/home' },
            {label: 'Nuestros servicios', icon: 'pi pi-fw pi-microsoft', routerLink: '/service'},
            {label: 'Proveedores', icon: 'pi pi-user-minus', routerLink: '/supplier', command: (event) => {
              console.log('menu event', event.item.label, event.originalEvent);
          }} ,
            {label: 'Buscar', icon: 'pi pi-fw pi-search-minus'},
            {label: 'Usuarios', icon: 'pi pi-fw pi-user', routerLink: '/editar-perfil'},
            {label: 'Carrito', icon: 'pi pi-fw pi-shopping-cart'},
            {label: 'Lista-Usuarios', icon: 'pi pi-users', routerLink: '/lista'}
           // {label: 'Logout', icon: 'pi pi-power-off'}
          ];

        this.activeItem = this.items4[0];

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
        this.login = !this.login;
    }

    registrar() {
        this.router.navigate(['registro']);
        this.login = !this.login;
    }


    showBasicDialog() {
        this.displayBasic = true;
    }
}

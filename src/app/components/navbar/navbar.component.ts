import { Component, OnInit } from '@angular/core';


import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css' ]
})
export class NavbarComponent implements OnInit {
 
  visibleSidebar1;
  items1: MenuItem[];
  items2: MenuItem[];
  
  items4: MenuItem[];
  items5: MenuItem[];
  activeItem: MenuItem;

  public login : boolean;
  public search: string;

  displayBasic: boolean;
  displayPosition: boolean;

  position: string;
 

  constructor() {
    
   }


  ngOnInit() {
   
    this.login = false
    this.search= ''
    this.items5 = [
      {
          label: 'File',
          icon: 'pi pi-pw pi-file',
          items: [{
                  label: 'New', 
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'User', icon: 'pi pi-fw pi-user-plus'},
                      {label: 'Filter', icon: 'pi pi-fw pi-filter'}
                  ]
              },
              {label: 'Open', icon: 'pi pi-fw pi-external-link'},
              {separator: true},
              {label: 'Quit', icon: 'pi pi-fw pi-times'}
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      },
      {
          label: 'Help',
          icon: 'pi pi-fw pi-question',
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
              ]}
          ]
      },
      {
          label: 'Actions',
          icon: 'pi pi-fw pi-cog',
          items: [
              {
                  label: 'Edit',
                  icon: 'pi pi-fw pi-pencil',
                  items: [
                      {label: 'Save', icon: 'pi pi-fw pi-save'},
                      {label: 'Update', icon: 'pi pi-fw pi-save'},
                  ]
              },
              {
                  label: 'Other',
                  icon: 'pi pi-fw pi-tags',
                  items: [
                      {label: 'Delete', icon: 'pi pi-fw pi-minus'}
                  ]
              }
          ]
      }
  ];
  


this.items1 = [
  {
      label: 'File',
      icon: 'pi pi-fw pi-file',
      items: [{
              label: 'New', 
              icon: 'pi pi-fw pi-plus',
              items: [
                  {label: 'Project'},
                  {label: 'Other'},
              ]
          },
          {label: 'Open'},
          {separator:true},
          {label: 'Quit'}
      ]
  },
  {
      label: 'Edit',
      icon: 'pi pi-fw pi-pencil',
      items: [
          {label: 'Delete', icon: 'pi pi-fw pi-trash'},
          {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
      ]
  },
  {
      label: 'Help',
      icon: 'pi pi-fw pi-question',
      items: [
          {
              label: 'Contents'
          },
          {
              label: 'Search', 
              icon: 'pi pi-fw pi-search', 
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
                      label: 'File'
                  }
          ]}
      ]
  },
  {
      label: 'Actions',
      icon: 'pi pi-fw pi-cog',
      items: [
          {
              label: 'Edit',
              icon: 'pi pi-fw pi-pencil',
              items: [
                  {label: 'Save', icon: 'pi pi-fw pi-save'},
                  {label: 'Update', icon: 'pi pi-fw pi-save'},
              ]
          },
          {
              label: 'Other',
              icon: 'pi pi-fw pi-tags',
              items: [
                  {label: 'Delete', icon: 'pi pi-fw pi-minus'}
              ]
          }
      ]
  },
  {separator:true},
  {
      label: 'Quit', icon: 'pi pi-fw pi-times'
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
  {label: 'Home', icon: 'pi pi-fw pi-home'},
  {label: 'Nuestros servicios', icon: 'pi pi-fw pi-microsoft', url: 'http://www.primefaces.org/primeng'},
  {label: 'Proveedores', icon: 'pi pi-fw pi-users', command: (event) => {
    //event.originalEvent: Browser event
    //event.item: menuitem metadata
    console.log('menu event', event.item.label, event.originalEvent)
}} ,
  {label: 'Buscar', icon: 'pi pi-fw pi-search-minus'},
  {label: 'Usuarios Settings', icon: 'pi pi-fw pi-user'},
  {label: 'Carrito', icon: 'pi pi-fw pi-shopping-cart'}
 // {label: 'Login', icon: 'pi pi-sign-in'},
 // {label: 'Logout', icon: 'pi pi-power-off'}
];



this.activeItem = this.items4[0];


  }

buscador(){
  console.log(this.search)
  this.search=''
}

handleClick(event) {
  //execute action
  event.preventDefault();
  
  this.login= !this.login
  console.log('has hecho click', this.login)
}

showBasicDialog() {
  this.displayBasic = true;
}




}
import { Component, OnInit, DoCheck, HostListener } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/models/users';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  public users: Users[];
  public search = '';
  public error: any;
  public active = true;
  public show = false;
  public usuario: Users;
   roles;
  public opcionSeleccionado = '0';
  public verSeleccion = '';

  loading: boolean ;
  showScroll: boolean;
  showScrollHeight = 300;
  hideScrollHeight = 10;


  constructor(private usersService: UsersService) {
    this.users = [];
    this.usuario = null;
    this.loading = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll()
  {
    if (( window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight)
    {
        this.showScroll = true;
    }
    // tslint:disable-next-line: max-line-length
    else if ( this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight)
    {
      this.showScroll = false;
    }
  }

  scrollToTop() {
      (function smoothscroll() { 
        const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0)
        {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - (currentScroll / 15));
        }
      })();
    }


  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users) => (this.users = users));
    console.log('tenemos active ?', this.users);

  }

  buscador(): void {
    this.error = null;
    if (!this.search) {
      this.usersService.getUsers().subscribe((users) => (this.users = users));
    } else {
      this.usersService
        .searchUsers(this.search)
        .then((users) => {
          this.users = users;
        })
        .catch((err) => {
          this.error = err.error.message;
          this.usersService.getUsers().subscribe((usrs) => (this.users = usrs));
        });
    }
    this.search = '';
  }
  mostrarTodo() {
    this.show = !this.show;
  }
  active1(item) {
   // this.active = !this.active;
    const usuario = {
      active: !item.active,
      usuario: item.usuario,
      email: item.email,
      rol: item.rol,
      password: item.password,
    };
    this.usersService.putAdminUsers(usuario, item._id).subscribe(
      (response) => {
        this.usuario = response;
        this.usersService.getUsers().subscribe((users) => (this.users = users));      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  cambioRol(item) {
    if (this.opcionSeleccionado === '0'){
      return null;
    }
    const usuario = {
      active: item.active,
      usuario: item.usuario,
      email: item.email,
      rol: this.opcionSeleccionado,
      password: item.password,
    };
    this.usersService.putAdminUsers(usuario, item._id).subscribe(
      (response) => {
        this.usuario = response;
        this.usersService.getUsers().subscribe((users) => (this.users = users));
        this.opcionSeleccionado = '0';   },

      (error) => {
        console.log('error', error);
      }
    );

    this.loading = true;

    setTimeout( () => this.loading = false, 3000   );


  }
  capturar(event) {
    if (event.target.value === '1'){
      this.opcionSeleccionado = 'admin';
    }else if (event.target.value === '2'){
      this.opcionSeleccionado = 'usuario';
    // tslint:disable-next-line: align
    } else {
      this.opcionSeleccionado = 'vendedor';

    }
    this.verSeleccion = this.opcionSeleccionado;
    console.log('que es i', event.target.value);
}
}

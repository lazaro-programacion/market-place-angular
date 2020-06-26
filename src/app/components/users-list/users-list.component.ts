import { Component, OnInit, DoCheck } from '@angular/core';
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
  items: MenuItem[];

  constructor(private usersService: UsersService) {
    this.users = [];
    this.usuario = null;
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users) => (this.users = users));
    console.log('tenemos active ?', this.users);
    this.items = [
      {label: 'Admin' },
      {label: 'Vendedor' },
      {label: 'Usuario' }
  ];
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
    this.active = !this.active;
    const usuario = {
      active: this.active,
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
  save() {

  }
}

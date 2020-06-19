import { Component, OnInit, DoCheck } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/models/users';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit, DoCheck {
  public users: Users[];
  public search = '';
  public error: any;
  public render = true;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users) => (this.users = users));
  }

  ngDoCheck(): void {
    if (this.render) {
      this.render = false;
      if (this.error) {
        this.usersService.getUsers().subscribe((users) => (this.users = users));
      }
    }
  }

  buscador(): void {
    this.error = null;

    if (!this.search) {
      this.usersService.getUsers().subscribe((users) => (this.users = users));
    } else {
      this.usersService
        .searchUsers(this.search)
        .then((users) => {
          if (users) {
            this.users = users;
          } else {
            alert('No hay resultados para esta busqueda');
          }
        })
        .catch((err) => {
          this.render = true;
          this.error = err.error.message;
          return throwError('Algo ha salido mal');
        });

    }
    this.search = '';
  }
}

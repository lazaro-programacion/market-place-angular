import { Component, OnInit, DoCheck } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/models/users';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  public users: Users[];
  public search = '';
  public error: any;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users) => (this.users = users));
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
          this.usersService.getUsers().subscribe(
            (usrs) => (this.users = usrs));
        });
    }
    this.search = '';
  }
}

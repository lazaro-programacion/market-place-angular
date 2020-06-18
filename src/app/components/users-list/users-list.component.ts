import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/models/users';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public users: Users[];
  public search = '';
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(
      users => this.users = users
    );
    console.log('usersss', this.users);
  }

  buscador(): void {
    if (!this.search){
      this.usersService.getUsers().subscribe(
        users => this.users = users
      );
    } else{

      this.usersService.searchUsers(this.search).subscribe(
        users => {
          if (users){
            this.users = users;
          }else{
            console.log('vacio', users);

            alert('No hay resultados para esta busqueda');
          }
        }

        );

      console.log('usersfilter', this.users);
    }
    this.search = '';
}

}

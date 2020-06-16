import { Component, OnInit } from '@angular/core';
import { Users } from "../../models/users";
import {UsersService} from "../../services/users.service"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 public user : Users;
 public usuario: string = ''

  constructor() { 
 
  }

  ngOnInit(): void {
    
  }

logear(){
 
console.log('logeado' )

}





}

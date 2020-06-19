import { Component, OnInit } from '@angular/core';
import { Users } from "../../models/users";
import { UsersService } from "../../services/users.service"
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public newUsuario: Users;
  public id = '';
  public usuario = '';
  public email = '';
  public password = '';
  public rol = 'usuario';


  constructor(
    private usersSErvice: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

  }

  onSubmit(form) {

    console.log('logeado', form, this.email, this.password);
    const newUsuario: Users = new Users(); // (  this.usuario, this.email, this.rol, this.password)

    newUsuario.email = this.email;
    newUsuario.rol = this.rol;
    newUsuario.password = this.password;

  }





}

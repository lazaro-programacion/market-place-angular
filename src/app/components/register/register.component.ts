import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/users';
import { UsersService } from '../../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
    ) { }

  ngOnInit(): void {

  }


  registrar(){

    // tslint:disable-next-line: deprecation
    event.preventDefault();
    console.log('registrado', this.id, this.usuario, this.email, this.rol, this.password);
    // tslint:disable-next-line: new-parens
    const newUsuario: Users = new Users;  // (  this.usuario, this.email, this.rol, this.password)

   // newUsuario._id = this.id;
    newUsuario.usuario = this.usuario;
    newUsuario.email = this.email;
    newUsuario.rol = this.rol;
    newUsuario.password = this.password;

    this.usersSErvice.saveUsers(newUsuario).subscribe(
      () => {
        this.router.navigate(['/lista']);
      }
    );


  }

}

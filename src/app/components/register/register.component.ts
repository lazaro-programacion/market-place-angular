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

  public displayBasic2: boolean;

  public id = '';
  public usuario = '';
  public email = '';
  public password = '';
  public rol = 'usuario';

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  showBasicDialog2() {
    this.displayBasic2 = true;
  }

  onSubmit(form: any) {
    console.log('form', form, this.usuario, this.email, this.password);
    const newUsuario: Users = new Users();
    newUsuario.usuario = this.usuario;
    newUsuario.email = this.email;
    newUsuario.rol = this.rol;
    newUsuario.password = this.password;

    this.usersService.saveUsers(newUsuario).subscribe(
      () => {
        this.router.navigate(['/lista']);
      });
  }

}

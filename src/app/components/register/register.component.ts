import { Component, OnInit } from '@angular/core';
import { Users } from "../../models/users";
import { UsersService } from "../../services/users.service";
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  public newUsuario : Users 

  public id : string = ''
  public usuario: string = ''
  public email: string = ''
  public password: string = ''
  public rol : string = 'usuario'
  



  

  constructor( 
    private usersSErvice: UsersService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
   
    
      
  }




onSubmit(form){
  event.preventDefault()
  console.log('form' , form,  this.usuario , this.email, this.password) // (  this.usuario, this.email, this.rol, this.password)
    const newUsuario: Users = new Users 
    newUsuario.usuario = this.usuario;
    newUsuario.email = this.email;
    newUsuario.rol = this.rol;
    newUsuario.password = this.password;
   
    
    this.usersSErvice.saveUsers(newUsuario).subscribe(
      () => {
        this.router.navigate(['/lista']);
      })
   }

}
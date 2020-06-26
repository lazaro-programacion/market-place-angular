import { Component, OnInit } from '@angular/core';
import { Users } from "../../models/users";
import { UsersService } from "../../services/users.service"
import { Router, ActivatedRoute } from '@angular/router';
import { GLOBAL } from "../../../config/global";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: Users;
  public id = '';
  public usuario = '';
  public email = '';
  public password = '';
  public rol = 'usuario';
  
  public status:string= ''; 
  public url: string;
  public identity: any;
  public token: any;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.url = GLOBAL.url
    this.user = new Users("","","","usuario","","")
    
  }

  ngOnInit(): void {
   // console.log(this.usersService.getIdentity())
   console.log(this.usersService.getToken())
    
  }

  onSubmit(form: any) {

  //  console.log('form', form,this.user)
    // loguear y recibir datos usuario
    this.usersService.signUp(this.user).subscribe(
      response => {
        this.identity = response.user
         // console.log('usuario logeado', this.identity)
          if(!this.identity || !this.identity._id){
           // console.log('el usuario no se ha logeado')
            this.status = 'error'
            form.reset()
          // conseguir el token
          }else{
            // vaciar el password
           this.identity.password = ''
            localStorage.setItem('identity', JSON.stringify(this.identity))
            this.usersService.signUp(this.user, true).subscribe(
              response => {
                console.log('token', response.token)
                this.token = response.token
                localStorage.setItem('token', this.token)
                if(this.token.length <= 0){
                  console.log('el token no se ha generado')
                  this.status = 'error'
                }else{
                  this.status = 'success'
                  console.log(this.token)
                  this.router.navigate(['/home'])
                }
                // userForm.reset()
                
                },err =>{
                 // console.log(err)
                  var errorMessage = <any>err
                  if(errorMessage != null){
                   // let body = JSON.parse(err._body)
                    this.status = 'error'
                  }
                } 
            )} 
      
        },
       err =>{
         // console.log(err)
          var errorMessage = <any>err
                  if(errorMessage != null){
                   // let body = JSON.parse(err._body)
                    this.status = 'error'
                  }
        }
        
      )


  }





}

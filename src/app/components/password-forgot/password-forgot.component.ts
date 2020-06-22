import { Component, OnInit } from '@angular/core';
import { Users } from "../../models/users";
import { UsersService } from "../../services/users.service"

@Component({
  selector: 'app-password-forgot',
  templateUrl: './password-forgot.component.html',
  styleUrls: ['./password-forgot.component.css']
})
export class PasswordForgotComponent implements OnInit {
 public email : string;
 public userFilter: Users[];
 public users: Users[] = [];
 public newUser: Users;
 public status:string= '';
 public newPassword: string;
 public confirmPassword: string;
 public show: boolean;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.email = '';
    this.userFilter= [];
    this.usersService.getUsers().subscribe((users) => (this.users = users));
    this.show = true;
  
    
  }
  onSubmit(email:string){
    //console.log(email)

    this.usersService.getUsers().subscribe((users) => (this.users = users));
    
    //console.log(this.users)
  if(this.email === ''){ 
    this.status = ''
  }else{

    this.userFilter = this.users.filter(element =>(element.email === email))
    
    if (this.userFilter.length === 1 ){
      this.status = 'success'
     // console.log(this.userFilter[0])
      this.newUser = this.userFilter[0]
      this.show = false
    }else{
      this.status = 'error'
    }

  }   

  }

  onPassword(){
    
    
    this.newUser.password = this.newPassword 
    console.log('datos a enviar', this.newUser._id,  this.newUser.password )
    this.usersService.putUsers(this.newUser.password, this.newUser._id).subscribe(
      () => {
          this.status = 'correcto'
      });

  }     

}

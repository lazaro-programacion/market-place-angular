import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/users';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-password-forgot',
  templateUrl: './password-forgot.component.html',
  styleUrls: ['./password-forgot.component.css']
})
export class PasswordForgotComponent implements OnInit {
 public email: string;

 // public users: Users[] = [];
 public user: Users;
 public newUser: Users;
 // tslint:disable-next-line: no-inferrable-types
 public status: string = '';
 public newPassword: string;
 public confirmPassword: string;
 public show: boolean;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.email = '';

   // this.usersService.getUsers().subscribe((users) => (this.users = users));
    this.show = true;


  }
  onSubmit(email: string){
    // console.log(email)
   this.email = email.toLowerCase();
  //  let userFilter = []
   if (this.email === ''){
      this.status = '';
    }else{

   this.usersService.getEmail(this.email).subscribe(
     response => {
       // console.log(response);
       this.user = response;

       if (this.user){
         this.status = 'success';

         this.show = false;
       }else{
         this.status = 'error';
       }

     },
     error => {

      const errorMessage = error as any;
      if (errorMessage != null){

       this.status = 'error';
     }
   });



  }

  }

  onPassword(){

    this.newUser = this.user[0];
    this.newUser.password = this.newPassword;
   // console.log('datos a enviar', this.newUser._id,  this.newUser, this.newUser.password );

    this.usersService.putPassword(this.newUser, this.newUser._id).subscribe(
      () => {
          this.status = 'correcto';
      });



  }

}

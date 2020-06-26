import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/users';
import { UsersService } from '../../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GLOBAL } from "../../../config/global";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: Users;

  public displayBasic: boolean;

  public status:string= ''; 
  public url: string;

 

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { 
    
  }

  ngOnInit(): void {
    this.url = GLOBAL.url
    this.user = new Users("","","","usuario","","")
  }


  showBasicDialog() {
    this.displayBasic = true;
  }

  onSubmit(form: any) {
  
   
    
      this.usersService.register(this.user).subscribe(
        response => {
         
          if(response.user && !this.user._id){
            this.user = response.user
            
            this.status = 'success'
            //console.log('usuario registrado', this.user, this.status)
            form.reset()
           // this.router.navigate(['/home'])
    
          }else{
            this.user = new Users("","","","usuario","","")
           // this.status = 'error'
           
          }
          this.user = new Users("","","","usuario","","")
          //this.status = 'error'
        
        },
        err =>{
       //   console.log(err)
          this.status = 'error'
        }
      )
    
  }

}

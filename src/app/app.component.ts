import { Component, OnInit, DoCheck } from '@angular/core';
import { Users } from "./models/users";
import { UsersService } from "./services/users.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {

  public identity: Users ;
  public token: string ;
  
  constructor(
    private userService: UsersService
    
  ) {
  
   }


  ngOnInit(): void {
    
     
    //console.log(this.userService.getToken())
     
    this.identity = this.userService.getIdentity()
    //console.log(this.identity)
   }

   ngDoCheck(): void {
    this.identity= this.userService.getIdentity()
    this.token = this.userService.getToken()
   }

}

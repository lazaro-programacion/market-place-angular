import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from "../users.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  
  constructor(
    private userService: UsersService,
    private router: Router
   
  ) { 
  
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const identity = this.userService.getIdentity()
   
     if(identity && identity.rol === 'admin'){
         return true;
     }else{
       this.router.navigate(['/home'])
       return false
     }

  }
  
}

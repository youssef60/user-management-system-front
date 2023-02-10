import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService : AuthService ,private router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.authService.isAuthenticated() && this.authService.isInRole('Admin')){
        return true
      }
      if( this.authService.isInRole('User') && route.params['id'] === this.authService.getCurrentUserID() ){
        return true;
      }else {
        this.router.navigate([''])
      }
      return false
  }

}

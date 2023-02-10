import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import jwt_decode from "jwt-decode";
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../models/user.model';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor( private userService : UserService, private jwtHelper: JwtHelperService , private http : HttpClient , private router : Router) {

   }

   login( data : any ){
    return this.http.post('http://localhost:3000/users/login' , data )
   }

   currentUserFirstName : string = ''

   public isAuthenticated(): boolean {
     const token = localStorage.getItem('token');

    if(!this.jwtHelper.isTokenExpired(token)){
      this.currentUserFirstName =  this.jwtHelper.decodeToken(localStorage.getItem('token')!).firstName;
      return true;
    }

    return false;


  }

  public getCurrentUserID() : string {
    return this.jwtHelper.decodeToken(localStorage.getItem('token')!).id;
  }

  public isInRole(role: string): boolean {
    const decodedToken = this.jwtHelper.decodeToken(localStorage.getItem('token')!);
    return decodedToken.role === role;
  }

  public  getId() : string {
    const decodedToken = this.jwtHelper.decodeToken(localStorage.getItem('token')!);
    return decodedToken.id;
  }

   saveData( token : string  ){
      localStorage.setItem('token' , token);
      this.router.navigate([''])
   }
}

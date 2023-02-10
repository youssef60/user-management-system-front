import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) {


   }

   getUsers()  : Observable<User []>{
    return this.http.get< User[] >('http://localhost:3000/users');
   }

   getUserById(id : string | null) :  Observable<User>  {
    return this.http.get<User>('http://localhost:3000/users/' + id)
   }

   updateUserById( id: string | null , user : User ){
    return this.http.put('http://localhost:3000/users/' + id , user )
   }

   deleteUserById(id : string ){
    return this.http.delete('http://localhost:3000/users/' + id)
   }

   addUser( user : User ){
    return this.http.post('http://localhost:3000/users' , user)
   }

   getUserBuId(id : string ){
    return this.http.get('http://localhost:3000/users/' + id)
   }
}

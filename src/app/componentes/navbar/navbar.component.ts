import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit  {

  user : User = {}
  constructor( private userService : UserService , public authService : AuthService ,private router : Router) {

   }


  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

}

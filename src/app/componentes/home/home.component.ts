import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users : User [] = []
  modalUser : User = {}

  constructor( private modalService: NgbModal ,public authService : AuthService , private userService : UserService) {
    this.userService.getUsers().subscribe(
      (res : any) => this.users = res.users,
      (err) => console.log(err)
     )
   }


  ngOnInit(): void {

  }

  deleteUser(id : string ){
    if(confirm('Are you sure you wanna delete this user ? '))
    this.userService.deleteUserById(id).subscribe(
      (res) => {
        console.log(res);
        this.users = this.users.filter( e => e._id != id )
      }
    )
  }

  openWindowCustomClass(content : any , id : string) {
		this.modalService.open(content, { windowClass: 'dark-modal' });
    this.modalUser = this.users.find( user => user._id === id )!
	}
}

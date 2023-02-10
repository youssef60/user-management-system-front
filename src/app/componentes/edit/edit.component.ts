import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  userID : string | null = '';
  user : User = {};
  error : string | null = null

  form : FormGroup


  constructor( public authService : AuthService , private router :Router ,private activatedRoute : ActivatedRoute , private userService : UserService ) {


    this.form = new FormGroup({
      firstName : new FormControl(null , Validators.required),
      lastName : new FormControl(null , Validators.required),
      email : new FormControl(null , [Validators.required ,Validators.email] ),
      password : new FormControl(null , Validators.required),
      status : new FormControl(null , Validators.required),
      role : new FormControl(null , Validators.required)
    })
   }

  ngOnInit(): void {
    this.userID = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUserById(this.userID).subscribe(
      (res) => {
        this.user = res;
        this.form.patchValue({
          firstName : this.user.firstName,
          lastName : this.user.lastName,
          email : this.user.email,
          status  :this.user.status,
          role : this.user.role

        })

      },
      (err) => { console.log(err) }
    )
  }


  onSumbit(){

    if(!this.form.valid){

     this.error = 'Data invalid !!!!'
     return;

    }

    this.user = {
      firstName : this.form.value.firstName,
          lastName : this.form.value.lastName,
          email : this.form.value.email,
          status  :this.form.value.status,
          password : this.form.value.password,
          role : this.form.value.role
    }

    this.userService.updateUserById(this.userID , this.user ).subscribe(
      (res) => {
        this.router.navigate([''])
      }
    )



  }
}

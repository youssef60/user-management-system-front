import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {


  user : User = {};
  form : FormGroup
  error : string | null = null

  constructor( private userService : UserService , private router : Router ) {

    this.form = new FormGroup({
      firstName : new FormControl(null , Validators.required ),
      lastName : new FormControl(null , Validators.required),
      email : new FormControl(null , [Validators.required , Validators.email]),
      password : new FormControl(null , Validators.required),
      status : new FormControl(null , Validators.required),
      role : new FormControl(null , Validators.required)
    })

   }

  ngOnInit(): void {
  }

  onSumbit(){

    if(!this.form.valid){
      this.error = 'Data invalid !!!';
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

    this.userService.addUser(this.user).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate([''])

      }
    )


  }

}

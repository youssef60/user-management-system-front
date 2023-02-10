import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup , FormControl  } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error  = null;
  form : FormGroup

  constructor(private authService : AuthService) {
    this.form = new  FormGroup({
        email : new FormControl(null),
        password : new FormControl(null)
    })
  }

  ngOnInit(): void {
  }

  onSumbit( ){
    this.authService.login( this.form.value  ).subscribe(
      ( res : any) => {
        this.authService.saveData( res.token.token );
       },
      (err) => { this.error = err.error }
    )
  }




}

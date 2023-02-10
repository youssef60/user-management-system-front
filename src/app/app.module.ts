import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { UserService } from './services/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EditComponent } from './componentes/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NewComponent } from './componentes/new/new.component';
import { LoginComponent } from './componentes/login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { UserGuard } from './guards/user.guard';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    NewComponent,
    LoginComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        }
      }
    }),
    NgbModule

  ],
  providers: [
    UserService,
    UserGuard,
    { provide : HTTP_INTERCEPTORS , useClass : AuthInterceptor, multi : true }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }

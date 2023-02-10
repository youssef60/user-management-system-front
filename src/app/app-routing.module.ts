import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './componentes/edit/edit.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NewComponent } from './componentes/new/new.component';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  { path : '' , component : HomeComponent , canActivate : [UserGuard] },
  { path : 'edit/:id' , component : EditComponent , canActivate : [AdminGuard]  },
  { path : 'new' , component : NewComponent  , canActivate : [AdminGuard ] },
  { path : 'login' , component : LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

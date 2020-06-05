import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './users/users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './error/not-found/not-found.component';


const routes: Routes = [
  {
    path:"",component: HomeComponent
  },
  {
    path:"home",component: HomeComponent
  },
  {
    path:"users", component : UserComponent
  },
  {
    path:"users-list" ,component : UsersListComponent
  },{
    path:"register" ,component : RegisterComponent
  }, {
    path:"login" ,component : LoginComponent
  },{
    path:"product",
    loadChildren:()=> import('./product/product.module').then( m=>m.ProductModule )
  },
  {
    path:"**" , component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

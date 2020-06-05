import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './users/users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { ProductModule } from './product/product.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, UserComponent, UsersListComponent, HeaderComponent, 
    NavBarComponent, FooterComponent, LoginComponent, RegisterComponent,
     EmployeeComponent, EmployeeListComponent, HomeComponent, 
     NotFoundComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

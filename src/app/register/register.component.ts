import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user :User ={username:'',email:"",password:""};

  constructor() { }

  ngOnInit(): void {
  }

  userRegister(){
    console.log(this.user);
  }
}

interface User{
  username:string;
  email:string;
  password:string;
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userlist:User[] =[
    {name:"John Smith",email:"johnsmith@gmail.com",description:"John Smith is Will Smith son"},
    {name:"Will Smith",email:"willsmith@gmail.com", description:"Will Smith is father John Smith"},
    {name:"Mike Smith",email:"mikesmith@gmail.com", description:"Mike Smith is Will Smith brother"},
    {name:"Rohn David",email:"mikesmith@gmail.com", description:"Mike Smith is Will Smith brother"},
    {name:"Killer David",email:"mikesmith@gmail.com", description:"Rohn David is Will Smith brother"},
    {name:"Mak David",email:"mikesmith@gmail.com", description:"Rohn David is Will Smith brother"},
    {name:"SS David",email:"mikesmith@gmail.com", description:"Rohn David is Will Smith brother"},
    {name:"VV David",email:"mikesmith@gmail.com", description:"Rohn David is Will Smith brother"},
  ]
}


interface User {
  name:string;
  email:string;
  description:string;
}
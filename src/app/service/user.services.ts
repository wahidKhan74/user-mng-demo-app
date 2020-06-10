import { User } from '../models/user.model';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(public httpClient : HttpClient){}
    
    public userlist:User[] =[
        {name:"John Smith",email:"johnsmith@gmail.com",description:"John Smith is Will Smith son"},
        {name:"Will Smith",email:"willsmith@gmail.com", description:"Will Smith is father John Smith"},
        {name:"Mike Smith",email:"mikesmith@gmail.com", description:"Mike Smith is Will Smith brother"},
        {name:"Rohn David",email:"mikesmith@gmail.com", description:"Mike Smith is Will Smith brother"},
        {name:"Killer David",email:"mikesmith@gmail.com", description:"Rohn David is Will Smith brother"},
        {name:"Mak David",email:"mikesmith@gmail.com", description:"Rohn David is Will Smith brother"},
        {name:"SS David",email:"mikesmith@gmail.com", description:"Rohn David is Will Smith brother"},
        {name:"VV David",email:"mikesmith@gmail.com", description:"Rohn David is Will Smith brother"},
      ]

      getUser(){
        return this.userlist;
      }

      private userUri = "http://dummy.restapiexample.com/api/v1/employees";
      // HTTP Client


      getUserFromAPI(): any{
        // observable 
        return this.httpClient.get(this.userUri);
      }



}
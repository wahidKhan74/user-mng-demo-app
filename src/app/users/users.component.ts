import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../service/user.services';


@Component({
    selector  : 'app-users',
    // template:'<h1> This is a users component </h1> <h1>{{user}}</h1>',
    // styles:['h1 { color: red } ']
    templateUrl :'./users.component.html',
    styleUrls:['./users.component.css']
})
export class UserComponent implements OnInit{
        user :string = " John Smith";
        public userlist:User[];
        
        constructor(private usersrv:UserService) {
            // this.userlist = new UserService().userlist;
        }  

        ngOnInit(): void {
            this.userlist = this.usersrv.getUser();
            this.getUserData();
          }

          getUserData(){
              this.usersrv.getUserFromAPI().subscribe(res=>{
                  console.log(res);
              },err=>{
                  console.log(err);
                  
              })
          }
}
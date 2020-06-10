import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../service/user.services';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public userlist:User[];

  constructor(private usersrv:UserService) {
    // this.userlist = new UserService().getUser(); // tightly coupled classes
   }
  //life cycle hook method
  ngOnInit(): void {
    this.userlist = this.usersrv.getUser();
  }

  
}



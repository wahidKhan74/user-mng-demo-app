import { Component } from '@angular/core';


@Component({
    selector  : 'app-users',
    // template:'<h1> This is a users component </h1> <h1>{{user}}</h1>',
    // styles:['h1 { color: red } ']
    templateUrl :'./users.component.html',
    styleUrls:['./users.component.css']
})
export class UserComponent {
        user :string = " John Smith";
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // static data
  private title:string = 'user-app2';
  public data:string ="My Cool App with Angular !";

  public obj ={
    name:"John smith",
    age:29,
    gender:"male"
  }

  // dynamic data  -> API

  // logic 
  getName(){
    return this.obj.name;
  }


}

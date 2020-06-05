import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public data :string =" I am Angular Source Data";
  public inActive:boolean = false;
  public firstName:string;
  public email:string;
  
  constructor() { }

  ngOnInit(): void {
  }

  getFirstName($event){
    // console.log($event);    
    this.firstName = $event.target.value;
    console.log(this.firstName);
  }
}

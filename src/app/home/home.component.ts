import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:User[] = [
    {name:"shady", age: 22,gender: 'male',salary: 8000,hello:function(){return 'hello';}},
    {name:"Kh", age: 23,gender: 'male',salary: 12000},
    {name:"abdelhalim", age: 24,gender: 'male',salary: 81000},
    {name:"ali", age: 22,gender: 'male',salary: 82000}

  ]
  productPrice: number = 23;
  constructor() { }

  ngOnInit(): void {
  }

}

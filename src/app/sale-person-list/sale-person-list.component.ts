import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sale-person-list',
  templateUrl: './sale-person-list.component.html',
  styleUrls: ['./sale-person-list.component.css']
})
export class SalePersonListComponent implements OnInit {

  //create an array of salespersonobject

  salesPersonList : SalesPerson[] =[
    new SalesPerson("Shravani","thippani","sthippani@gmail.com",600),
    new SalesPerson("a","b","ab@gmail.com",600),
    new SalesPerson("c","d","cd@gmail.com",600),
    new SalesPerson("e","f","ef@gmail.com",600),
    new SalesPerson("g","h","gh@gmail.com",600)
]
  constructor() { }

  ngOnInit(): void {
  }

}

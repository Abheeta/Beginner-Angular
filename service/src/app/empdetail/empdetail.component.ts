import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empdetail',
  template:`<h2>Employee Detail</h2>
  <ul *ngFor="let employee of employees">
    <li>{{employee.id}}. {{employee.name}}</li>
  </ul>
  `,
  styleUrls: ['./empdetail.component.css']
})
export class EmpdetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

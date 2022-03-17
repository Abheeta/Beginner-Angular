import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emplist',
  template: `<h2>Employee list</h2>
  <ul *ngFor="let employee of employees">
    <li>{{employee.name}}</li>
  </ul>
  `,
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
  // public list = [
  //   {"id":1, "name":"Bruno"},
  //   {"id":2, "name":"Shirin"}
  // ]
  public employees =[]

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
  }

}

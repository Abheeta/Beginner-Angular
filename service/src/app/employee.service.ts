import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees(){
    return [
      {"id":1, "name":"Bruno"},
      {"id":2, "name":"Shirin"}
    ]
  }
}

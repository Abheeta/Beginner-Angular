import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  // styleUrls: ['./test.component.css']
  template:
  `
    <h2>Welcome {{name}}</h2>
    <button (click) = "onClick(event)">Greet</button> {{greeting}}
  `
})
export class TestComponent implements OnInit {
  public name = "Abheetha";
  public greeting = ""
  constructor() { }

  ngOnInit(): void {
  }
  onClick(event){
    console.log(event)
    this.greeting = "Welcome to code evolution"
  }
  
}

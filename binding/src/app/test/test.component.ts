import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  template:
    // `<h2>
    //   Welcome {{name}}
    // </h2>
    // <h2>
    //   {{2+2}}
    // </h2>
    // <h2>
    //   {{"Welcome " + name}}
    // </h2>
    // <h2>{{name.length}}</h2>
    // <h2>{{name.toUpperCase()}}</h2>
    // <h2>{{greetUser()}}
    // <h2>{{siteUrl}}</h2>
    // `,
    `
    <h2 class="text-success">
      Welcome {{name}}
    </h2>
    <h2 [class] = "successClass">
      classBinding
    </h2>
    
    <h2 [class.text-danger] = "hasError">ConditionallyApplyClassBinding</h2>
    <h2 [ngClass]= "conditionalClasses">conditionalclasses</h2>

    <h2 [style.color]="'orange'">stylebinding</h2>

    <h2 [style.color]="highlightColor">style binding 2 </h2>

    <h2 [ngStyle]="titleClass">style binding 3 </h2>

    <h2 [style.color]="hasError ? 'red':'green'">styleTernary</h2>
    <input [id]="myId" type="text" value="Vishwas">
    <input id={{myId}} type="text"  value="Vishwas">
    <input [disabled]="false" id={{myId}} type="text"  value="Vishwas">
    <input [disabled]="isDisabled" id={{myId}} type="text"  value="Vishwas">
    <input bind-disabled="isDisabled" id={{myId}} type="text"  value="Vishwas">
    

    `,
  // styleUrls: ['./test.component.css']
  styles:[
    `
    .text-success{
      color: green;
    }

    .text-danger{
      color: red;
    }

    .text-special{
      font-style:italic;
    }
    `
  ]
})
export class TestComponent implements OnInit {
  public name = "Ab";
  public myId = "testId";
  public siteUrl = window.location.href;
  public isDisabled = false;
  public successClass = "text-danger";
  public hasError = false;
  public isSpecial = true;
  public highlightColor = "pink";
  public conditionalClasses = {
    "text-success": !this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }

  public titleClass= {
    color: "blue",
    fontStyle: "italic"
  }
  constructor() { }

  ngOnInit(): void {
  }
  greetUser(){
    return "Hello " + this.name
  }

}

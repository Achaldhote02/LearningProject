import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  template: `
  <h2>Welcome11 {{name}}</h2>
  <h2 class="text-green">Soni<h2>
  <h2 [class]="succesClass">Bhawna<h2>
  <h2 class="text-italic" [class]="succesClass"> Diksha </h2>
  <h2 [class.text-red]="hasError">Dushyal</h2>
  `,
  styles: [`
  .text-green {
    color:green;
    font-size:20px;
  }
  .text-red {
    color:red;
    font-size:20px;

  }
  .text-italic {
font-style:italic;
font-size:20px;

  }

  `]
})
export class ClassComponent implements OnInit {

  public name = "vinoda";
  public succesClass = "text-succes";
  public hasError = false;
  public isSpecial = true;
  public massageClasses = {
    "text- green":!this.hasError,
      "text-red" : this.hasError,
        "text-italic": this.isSpecial

  }

constructor() { }

ngOnInit(): void {
}

}

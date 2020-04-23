import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styleexample',
  template: `
    <h1>Welcome {{ name }}</h1>

    <h2 [style.color]="'orange'">Achal Dhote</h2>
    <h2 [style.color]="'orange'">Achal</h2>
    <h2 [style.color]="hasError ? 'red' : 'green'">Dhote</h2>
    <h2 [style.color]="highLighter">Style Binding</h2>
    <h2 [ngStyle]="titlestyle">Style</h2>
  `,
  styles: [],
})
export class StyleexampleComponent implements OnInit {
  public name = 'Example';
  public hasError = false;
  public isSpecial = true;
  public highLighter = 'Pink';
  public titlestyle = {
    color: 'black',
    fontStyle: 'italic',
  };

  constructor() {}

  ngOnInit(): void {}
}

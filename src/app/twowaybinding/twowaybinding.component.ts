import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  template: `
    <br />
    <br />
    <input [(ngModel)]="name" type="text" />
    {{ name }}
  `,
  styles: [],
})
//squre[] for property binding which is data flow class to the template
//() event binding so the data flow from the template to the class 2 way data flow hence 2 way binding
export class TwowaybindingComponent implements OnInit {
  public name = '';
  constructor() {}

  ngOnInit(): void {}
}

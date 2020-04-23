import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temprefvariable',
  template: `
  <br><br>
    <input #myInput type="text" />
    <button (click)="logMassage(myInput.value)">Log</button>

    <br><br>
    <input #myInput type="text" />
    <button (click)="logMassage1(myInput)">Log1</button>
  `,
  styles: ['./temprefvariable.component.css'],
})
export class TemprefvariableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  logMassage(value) {
    console.log(value);
  }
  logMassage1(value) {
    console.log(value);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  template: `
    <br />
    <br />
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">pick red color</div>
      <div *ngSwitchCase="'blue'">pick blue color</div>
      <div *ngSwitchCase="'green'">pick green color</div>
      <div *ngSwitchDefault="'green'">pick again</div>
    </div>
  `,
  styles: [],
})
export class NgswitchComponent implements OnInit {
  public color = 'orange';
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngforexample',
  template: `<br /><br />
    <div *ngFor="let color of colors">
      <h2>{{ color }}</h2>
    </div>
    <br />

    <div *ngFor="let color of colors1; index as i">
      <h2>{{ i }} {{ color }}</h2>
    </div>
    <br />

    <div *ngFor="let color of colors2; first as f">
      <h2>{{ f }} {{ color }}</h2>
    </div>
    <br />

    <div *ngFor="let color of colors2; last as l">
      <h2>{{ l }} {{ color }}</h2>
    </div>
    <br />

    <div *ngFor="let color of colors3; index as i; odd as o">
      <h2>{{ o }} {{ i }} {{ color }}</h2>
    </div>
    <br />

    <div *ngFor="let color of colors4; index as i; even as e">
      <h2>{{ e }} {{ i }} {{ color }}</h2>
    </div> `,
  styles: [],
})
export class NgforexampleComponent implements OnInit {
  public colors = ['red', 'blue', 'pink', 'yellow'];
  public colors1 = ['red1', 'blue1', 'pink1', 'yellow1'];
  public colors2 = ['red2', 'blue2', 'pink2', 'yellow2'];
  public colors3 = ['red3', 'blue3', 'pink3', 'yellow3'];
  public colors4 = ['red4', 'blue4', 'pink4', 'yellow4'];

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
    <h2>{{ name | lowercase }}</h2>
    <br />
    <h2>{{ name | uppercase }}</h2>
    <br />
    <br />
    <h2>{{ msg | titlecase }}</h2>
    <br />
    <br />
    <h2>{{ name | slice: 3:5 }}</h2>
    <h2>{{ name | slice: 6:8 }}</h2>

    <br />
    <br />
    <h2>{{ person | json }}</h2>
    <br />
    <br />
    <h2>{{ 5.678 | number: '1.2-3' }}</h2>
    <br />

    <h2>{{ 5.678 | number: '1.4-5' }}</h2>
    <br />

    <h2>{{ 5.678 | number: '1.1-2' }}</h2>
    <br />
    <br />

    <h2>{{ 0.25 | percent }}</h2>
    <h2>{{ 0.35 | percent }}</h2>

    <br />

    <h2>{{ 0.25 | currency }}</h2>
    <br />

    <h2>{{ 0.25 | currency: 'GBP' }}</h2>
    <h2>{{ 0.25 | currency: 'GBP':'code' }}</h2>
    <h2>{{ 0.25 | currency: 'EUR' }}</h2>
    <h2>{{ 0.25 | currency: 'EUR':'code' }}</h2>
    <br />
    <h2>{{ date }}</h2>
    <h2>{{ date | date: 'short' }}</h2>
    <h2>{{ date | date: 'shortDate' }}</h2>
    <h2>{{ date | date: 'shortTime' }}</h2>
  `,
  styles: [],
})
//pipe transform data before displaying them in the view eg. ganu 20000 sallery 200 tax ==19800
// slice: 3:5 -> convolution madhla 3-v disel 4-o disel $& 5 pasn katel mnje disnar nhi, 6-u 8-t
//titlecase-> 1st letter capital
// 5.678 | number: '1.2-3'-> 2-minimum, 3 maximum,
//person | json-> person madhala data json mdhe disel
export class PipesComponent implements OnInit {
  public name = 'convolution';
  public msg = 'welcome to convolution';
  public person = {
    firstName: 'john',
    lastName: 'Dhote',
  };

  public date = new Date();
  constructor() {}

  ngOnInit(): void {}
}

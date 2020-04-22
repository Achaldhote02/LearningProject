import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `<h1>
  hello {{name}}
  </h1>
  <h2>
  {{2+2}}
  <h2>
  <h3>
  {{"Dhote " + name}}
  </h3>
  <h4>
{{siteUrl}}  </h4>`,
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  public name = "Achal";
  public siteUrl = window.location.href
  
  constructor() { }

  ngOnInit(): void {
  }

}

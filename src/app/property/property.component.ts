import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  template: `
<h2>
welcome {{name}}
</h2>
  `,
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  public name = "Achal1";
  constructor() { }

  ngOnInit(): void {
  }

}

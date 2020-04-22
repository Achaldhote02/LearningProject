import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  template: `
<h2>
welcome {{name}}
</h2>
<input type="text" value="Ganesh">
<input [id]="myId" type="text" value="Ganesh">
<input id="{{myId}}" type="text" value="Ganesh">
<input disabled id="{{myId}}" type="text" value="Ganesh">
<input [disabled]="false" id="{{myId}}" type="text" value="Ganesh">
<input [disabled]="isDisabled" id="{{myId}}" type="text" value="Ganesh">
<input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Ganesh">

  `,
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  public name = "Achal1";
  public myId = "userId";
  public isDisabled=false;
  constructor() { }

  ngOnInit(): void {
  }

}

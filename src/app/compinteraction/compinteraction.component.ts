import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-compinteraction',
  template: `
    <h2>{{ 'Hello' + ganeshData }}</h2>
    <button (click)="onClick()">Sent Data</button>
  `,
  styles: [],
})
// parents to child pass data to used @input
// child to parents pass data to used @output
//emmitter when used data passed child to parents
export class CompinteractionComponent implements OnInit {
  // @Input() public parentData;

  @Input('parentData') public ganeshData;
  @Output() public childEvent = new EventEmitter(); //chaild to parent
  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.childEvent.emit('Hi Aanesh');
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventexample',
  template: `
    <h2>Welcome {{ name }}</h2>
    <button (click)="onClick()">clickbutton1</button><br />

    <button (click)="onClick1($event)">clickbutton2</button>
    {{ greetting }}

    <button (click)="greetting = 'Wecome Achal'">clickbutton3</button>
  `,
  styles: [],
})
export class EventexampleComponent implements OnInit {
  public name = 'event Binding';
  public greetting = '';

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log('Welcome to event Binding');
    this.greetting = 'welcome to code Convolution';
  }
  onClick1(event) {
    console.log(event);
    this.greetting = 'welcome to code Convolution';
    this.greetting = event.type;
  }
}

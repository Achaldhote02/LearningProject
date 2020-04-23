import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifexample',
  template: `
    <h2 *ngIf="displayName">
      Kisana1
    </h2>

    <h2 *ngIf="displayName">
      Kisana2
    </h2>

    <h2 *ngIf="displayName; else elseBlock">
      Display code
    </h2>
    <ng-template #elseBlock>
      <h2>
        Hidden Code
      </h2>
    </ng-template>
    <br />
    <br />
    <div *ngIf="displayName; then thenBlock; else elseBlock">
      Display code
    </div>
    <ng-template #thenBlock> usha Display code </ng-template>

    <ng-template #elseBlock> usha Hidden Code</ng-template>
  `,
  styles: [],
})
//ngif & ngswitch is used to conditionaly render html element
//ngfor is used to list of render html element
export class NgifexampleComponent implements OnInit {
  public displayName = true;
  public disName = true;

  constructor() {}

  ngOnInit(): void {}
}

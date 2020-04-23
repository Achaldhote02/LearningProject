import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemprefvariableComponent } from './temprefvariable.component';

describe('TemprefvariableComponent', () => {
  let component: TemprefvariableComponent;
  let fixture: ComponentFixture<TemprefvariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemprefvariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemprefvariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

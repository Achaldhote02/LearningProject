import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventexampleComponent } from './eventexample.component';

describe('EventexampleComponent', () => {
  let component: EventexampleComponent;
  let fixture: ComponentFixture<EventexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

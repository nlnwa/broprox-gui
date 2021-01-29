import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventChangeComponent } from './event-change.component';

describe('EventChangeComponent', () => {
  let component: EventChangeComponent;
  let fixture: ComponentFixture<EventChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

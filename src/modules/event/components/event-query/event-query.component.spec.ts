import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventQueryComponent } from './event-query.component';

describe('EventQueryComponent', () => {
  let component: EventQueryComponent;
  let fixture: ComponentFixture<EventQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

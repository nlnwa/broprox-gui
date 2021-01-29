import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventActivityComponent } from './event-activity.component';

describe('EventActivityComponent', () => {
  let component: EventActivityComponent;
  let fixture: ComponentFixture<EventActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

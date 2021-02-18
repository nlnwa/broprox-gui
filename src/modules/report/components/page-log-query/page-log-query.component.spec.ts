import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageLogQueryComponent } from './page-log-query.component';
import {FormBuilder} from '@angular/forms';

describe('PageLogQueryComponent', () => {
  let component: PageLogQueryComponent;
  let fixture: ComponentFixture<PageLogQueryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormBuilder],
      declarations: [ PageLogQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLogQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

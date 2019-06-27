import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CollectionListComponent} from './collection-list.component';
import {MaterialModule} from '../../../../commons/material.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('CollectionListComponent', () => {
  let component: CollectionListComponent;
  let fixture: ComponentFixture<CollectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionListComponent ],
      imports: [MaterialModule, NoopAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

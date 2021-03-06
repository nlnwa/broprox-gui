import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BrowserconfigMultiDialogComponent } from './browserconfig-multi-dialog.component';

describe('BrowserconfigMultiDialogComponent', () => {
  let component: BrowserconfigMultiDialogComponent;
  let fixture: ComponentFixture<BrowserconfigMultiDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserconfigMultiDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserconfigMultiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

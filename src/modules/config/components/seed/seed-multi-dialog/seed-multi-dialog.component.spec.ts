import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedMultiDialogComponent } from './seed-multi-dialog.component';

describe('SeedMultiDialogComponent', () => {
  let component: SeedMultiDialogComponent;
  let fixture: ComponentFixture<SeedMultiDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeedMultiDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedMultiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

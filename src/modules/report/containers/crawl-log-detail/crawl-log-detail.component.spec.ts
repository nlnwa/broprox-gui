import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CrawlLogDetailComponent } from './crawl-log-detail.component';
import {ActivatedRoute} from '@angular/router';

describe('CrawlLogDetailComponent', () => {
  let component: CrawlLogDetailComponent;
  let fixture: ComponentFixture<CrawlLogDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ActivatedRoute],
      declarations: [ CrawlLogDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlLogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

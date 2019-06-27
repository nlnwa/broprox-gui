import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CrawlConfigDetailsComponent} from './crawlconfig-details.component';
import {CommonsModule} from '../../../../commons/commons.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {CoreTestingModule} from '../../../../core/core.testing.module';

describe('CrawlConfigDetailsComponent', () => {
  let component: CrawlConfigDetailsComponent;
  let fixture: ComponentFixture<CrawlConfigDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrawlConfigDetailsComponent],
      imports: [
        CommonsModule,
        RouterTestingModule,
        NoopAnimationsModule,
        CoreTestingModule.forRoot()
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlConfigDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

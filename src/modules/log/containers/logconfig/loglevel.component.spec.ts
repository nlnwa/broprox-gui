import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {LoglevelComponent} from './loglevel.component';
import {CommonsModule} from '../../../commons/commons.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {CoreTestingModule} from '../../../core/core.testing.module';
import {SnackBarService} from '../../../core/services';
import {RouterTestingModule} from '@angular/router/testing';
import {LogService} from '../../services';

describe('LoglevelComponent', () => {
  let component: LoglevelComponent;
  let fixture: ComponentFixture<LoglevelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonsModule,
        LogService,
        RouterTestingModule,
        CoreTestingModule.forRoot(),
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: SnackBarService,
          useValue: {}
        }
      ],
      declarations: [LoglevelComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoglevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

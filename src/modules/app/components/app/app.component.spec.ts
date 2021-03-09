import { TestBed, waitForAsync } from '@angular/core/testing';
import {AppComponent} from './app.component';
import {MaterialModule} from '../../../commons/material.module';
import {DialogComponent, TimeComponent} from '..';
import {RouterTestingModule} from '@angular/router/testing';
import {AppInitializerService} from '../../../core/services/app.initializer.service';
import {AuthService, GuardService} from '../../../core/services/auth';
import {ErrorService, SnackBarService} from '../../../core/services';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogRef} from '@angular/material/dialog';
import {AppConfig} from '../../../core/models/app-config.model';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule, NoopAnimationsModule],
      declarations: [
        AppComponent,
        TimeComponent,
        DialogComponent
      ],
      providers: [
        {
          provide: AppInitializerService,
          useValue: {
            initialized: true,
            error: {message: ''}
          }
        },
        {
          provide: AuthService,
          useValue: {
            isAdmin: () => true,
          }
        },
        {
          provide: AppConfig,
          useValue: {}
        },
        {
          provide: GuardService,
          useValue: {}
        },
        {
          provide: SnackBarService,
          useValue: {}
        },
        {
          provide: ErrorService,
          useValue: {}
        },
        {
          provide: MatDialogRef,
          useValue: {
            close: () => {}
          }
        }
      ]
    }).compileComponents();
  }));

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

import {TestBed} from '@angular/core/testing';

import {ConfigurationsService} from './configurations.service';
import {DataService} from './data';
import {RouterTestingModule} from '@angular/router/testing';
import {CoreTestingModule} from '../../core/core.testing.module';

describe('ConfigurationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      CoreTestingModule.forRoot()
    ],
    providers: [
      ConfigurationsService,
      {
        provide: DataService,
        useValue: {}
      }
    ]
  }));

  it('should be created', () => {
    const service: ConfigurationsService = TestBed.get(ConfigurationsService);
    expect(service).toBeTruthy();
  });
});

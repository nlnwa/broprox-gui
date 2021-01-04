import { TestBed } from '@angular/core/testing';

import { EventHandlerApiService } from './event-handler-api.service';

describe('EventHandlerApiService', () => {
  let service: EventHandlerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventHandlerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

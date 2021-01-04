import {Injectable} from '@angular/core';
import {
  EventHandlerPromiseClient,
  EventListRequest,
  EventObjectProto,
  EventSaveRequest,
  EventUpdateRequest, ListLabelRequest
} from '../../../../api';
import {AuthService} from '../auth';
import {AppConfigService} from '../app.config.service';
import {ErrorService} from '../error.service';
import {EMPTY, from, Observable, Observer} from 'rxjs';
import {EventObject} from '../../../../shared/models';

import {catchError, map} from 'rxjs/operators';
import {EventRef} from '../../../../shared/models/event/event.model';


@Injectable({
  providedIn: 'root'
})
export class EventHandlerApiService {

  private eventHandlerPromiseClient: EventHandlerPromiseClient;

  constructor(private authService: AuthService,
              appConfigService: AppConfigService,
              private errorService: ErrorService) {
    this.eventHandlerPromiseClient = new EventHandlerPromiseClient(appConfigService.grpcWebUrl, null, null);
  }

  get(eventRef: EventRef): Observable<EventObject> {
    return from(this.eventHandlerPromiseClient.getEventObject(EventRef.toProto(eventRef), this.authService.metadata))
      .pipe(
        map(EventObject.fromProto),
        catchError(error => {
          this.errorService.dispatch(error);
          return EMPTY;
        })
      );
  }

  list(listRequest: EventListRequest): Observable<EventObject> {
    return new Observable((observer: Observer<EventObjectProto>) => {
      const stream = this.eventHandlerPromiseClient.listEventObjects(listRequest, this.authService.metadata)
        .on('data', (data) => observer.next(data))
        .on('error', error => observer.error(error))
        .on('end', () => observer.complete());
      return () => stream.cancel();
    }).pipe(
      map(EventObject.fromProto),
      catchError(error => {
        this.errorService.dispatch(error);
        return EMPTY;
      })
    );
  }

  count(request: EventListRequest): Observable<number> {
    return from(this.eventHandlerPromiseClient.countEventObjects(request, this.authService.metadata))
      .pipe(
        map(listCountResponse => listCountResponse.getCount()),
        catchError(error => {
          this.errorService.dispatch(error);
          return EMPTY;
        })
      );
  }

  save(request: EventSaveRequest): Observable<EventObject> {
    return from(this.eventHandlerPromiseClient.saveEventObject(request, this.authService.metadata))
      .pipe(
        map(EventObject.fromProto),
        catchError(error => {
          this.errorService.dispatch(error);
          return EMPTY;
        })
      );
  }

  update(request: EventUpdateRequest): Observable<number> {
    return from(this.eventHandlerPromiseClient.updateEventObjects(request, this.authService.metadata))
      .pipe(
        map(updateResponse => updateResponse.getUpdated()),
        catchError(error => {
          this.errorService.dispatch(error);
          return EMPTY;
        })
      );
  }

  delete(eventObject: EventObject): Observable<boolean> {
    return from(
      this.eventHandlerPromiseClient.deleteEventObject(EventObject.toProto(eventObject), this.authService.metadata))
      .pipe(
        map(deleteResponse => deleteResponse.getDeleted()),
        catchError(error => {
          this.errorService.dispatch(error);
          return EMPTY;
        })
      );
  }

  listLabels(request: ListLabelRequest): Observable<string[]> {
    return from(this.eventHandlerPromiseClient.listLabels(request, this.authService.metadata))
      .pipe(
        map(listLabelResponse => listLabelResponse.getLabelList()),
        catchError(error => {
          this.errorService.dispatch(error);
          return EMPTY;
        })
      );
  }


}

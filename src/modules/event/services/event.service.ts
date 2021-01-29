import {Injectable} from '@angular/core';
import {EventHandlerApiService} from '../../core/services/api/event-handler-api.service';
import {Detail, Page} from '../../../shared/func';
import {Observable} from 'rxjs';
import {EventListRequest, EventSaveRequest, EventUpdateRequest, FieldMask, ListRequest} from '../../../api';
import {EventObject} from '../../../shared/models';
import {LoadingService} from '../../../shared/services';
import {Getter} from '../../../shared/directives';
import {Severity, State} from '../../../shared/models/event/event.model';
import {AuthService} from '../../core';

export interface EventQuery extends Page {
  assignee: string;
  source: string;
  state: State;
  severity: Severity;
}

@Injectable({
  providedIn: 'root'
})
export class EventService extends LoadingService implements Getter<EventObject> {
  private readonly cache: Map<string, EventObject>;

  // The listRequest last used to fetch data
  private effectiveListRequest: ListRequest;

  constructor(private eventHandlerApiService: EventHandlerApiService, private authService: AuthService) {
    super();
    this.cache = new Map();
  }

  get(query: Detail): Observable<EventObject> {
    const listRequest = new EventListRequest();
    listRequest.addId(query.id);
    return this.eventHandlerApiService.list(listRequest);
  }

  search(query: EventQuery): Observable<EventObject> {
    return this.load(this.eventHandlerApiService.list(this.getListRequest(query)));
  }

  count(query: EventQuery): Observable<number> {
    const request = this.getListRequest(query);
    return this.eventHandlerApiService.countEventObjects(request);
  }

  private getListRequest(query: EventQuery): EventListRequest {
    const listRequest = new EventListRequest();
    const queryTemplate = new EventObject();
    const fieldMask = new FieldMask();

    listRequest.setOffset(query.pageIndex * query.pageSize);
    listRequest.setPageSize(query.pageSize);

    if (query.assignee) {
      queryTemplate.assignee = query.assignee;
      fieldMask.addPaths('assignee');
    }

    if (query.source) {
      queryTemplate.source = query.source;
      fieldMask.addPaths('source');
    }

    if (query.state) {
      console.log('1.service state: ', query.state);
      queryTemplate.state = query.state;
      fieldMask.addPaths('state');
    }

    // if (query.assignedToMe) {
    //   queryTemplate.assignee = this.authService.email;
    //   fieldMask.addPaths('assignee');
    // }

    // if (query.severity) {
    //   console.log('service severity: ', query.severity);
    //   queryTemplate.severity = query.severity;
    //   fieldMask.addPaths('severity');
    // }

    if (fieldMask.getPathsList().length > 0) {
      listRequest.setQueryTemplate(EventObject.toProto(queryTemplate));
      listRequest.setQueryMask(fieldMask);
    }

    return listRequest;
  }

  save(event: EventObject): Observable<EventObject> {
    return this.load(this.eventHandlerApiService.save(new EventSaveRequest().setObject(EventObject.toProto(event))));
  }

  delete(event: EventObject): Observable<boolean> {
    return this.load(this.eventHandlerApiService.delete(event));
  }

  updateWithTemplate(updateTemplate: EventObject, paths: string[], ids: string[]): Observable<number> {
    let listRequest: EventListRequest;

    if (ids.length > 0) {
      listRequest = new EventListRequest();
      listRequest.setIdList(ids);
    } else {
      listRequest.setPageSize(0);
      listRequest.setOffset(0);
    }

    const fieldMask = new FieldMask();
    fieldMask.setPathsList(paths);

    const updateRequest = new EventUpdateRequest();
    updateRequest.setListRequest(listRequest);
    updateRequest.setUpdateTemplate(EventObject.toProto(updateTemplate));
    updateRequest.setUpdateMask(fieldMask);

    return this.load(this.eventHandlerApiService.update(updateRequest));
  }
}

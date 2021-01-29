import {Directive, Inject} from '@angular/core';
import {BASE_LIST, QueryDirective} from '../../../shared/directives';
import {BaseList, EventObject, ListDataSource} from '../../../shared/models';
import {EventQuery, EventService} from '../services/event.service';


@Directive({
  selector: '[appQueryEvent]'
})
export class QueryEventDirective extends QueryDirective<EventQuery, EventObject> {
  constructor(protected service: EventService,
              @Inject(BASE_LIST) protected baseList: BaseList<EventObject>) {
    super(service, baseList, new ListDataSource<EventObject>());
  }

  onInit(): void {
    super.onInit();
   }
 }

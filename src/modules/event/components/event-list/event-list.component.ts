import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import {BaseListComponent} from '../../../commons/components';
import {EventObject, ListDataSource} from '../../../../shared/models';
import {BASE_LIST} from '../../../../shared/directives';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css', '../../../commons/components/base-list/base-list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ListDataSource,
    {
      provide: BASE_LIST,
      useExisting: forwardRef(() => EventListComponent)
    }
  ],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class EventListComponent extends BaseListComponent<EventObject> {

  displayedColumns: string[] = ['type', 'source', 'state', 'severity', 'assignee'];

  constructor() {
    super();
  }


}

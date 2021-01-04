import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ListDataSource} from '../../../../shared/models';
import {BASE_LIST} from '../../../../shared/directives';
import {EventListComponent} from '../../components/event-list/event-list.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ListDataSource, {
    provide: BASE_LIST,
    useClass: EventListComponent
  }]
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

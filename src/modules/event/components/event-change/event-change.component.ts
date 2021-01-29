import {Component, Input, OnInit} from '@angular/core';
import {Change, ChangeType} from 'src/shared/models/event/event.model';

@Component({
  selector: 'app-event-change',
  templateUrl: './event-change.component.html',
  styleUrls: ['./event-change.component.css']
})
export class EventChangeComponent implements OnInit {
  readonly ChangeType = ChangeType;
  displayedColumns = ['type', 'field', 'new', 'old'];

  @Input()
  changes: Change[];

  constructor() {
  }

  ngOnInit(): void {
  }

}

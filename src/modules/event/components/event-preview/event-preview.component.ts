import {Component, Input, OnInit} from '@angular/core';
import {EventObject} from '../../../../shared/models';
import { Severity, State, ChangeType } from 'src/shared/models/event/event.model';

@Component({
  selector: 'app-event-preview',
  templateUrl: './event-preview.component.html',
  styleUrls: ['./event-preview.component.css']
})
export class EventPreviewComponent implements OnInit {
readonly Severity = Severity;
readonly State = State;
readonly ChangeType = ChangeType;

  @Input()
  event: EventObject;


  constructor() { }

  ngOnInit(): void {
  }

}

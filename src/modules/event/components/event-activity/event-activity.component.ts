import {Component, Input, OnInit} from '@angular/core';
import {Activity, Change} from '../../../../shared/models/event/event.model';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-event-activity',
  templateUrl: './event-activity.component.html',
  styleUrls: ['./event-activity.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class EventActivityComponent implements OnInit {
  displayedColumns: string[] = ['time', 'by', 'changes', 'comment'];
  selectedRow: any;
  expandedElement: Change | null;

  @Input()
  activities: Activity[];

  constructor() {
  }

  ngOnInit() {
  }

  onRowClick(item: any) {
    console.log('rowClick activity: ', item);
    if (item.id === this.selectedRow?.id) {
      this.selectedRow = null;
    } else {
      this.selectedRow = item;
    }
  }

  isSelected(item: any): boolean {
    return this.selectedRow ? this.selectedRow.id === item.id : false;
  }

}

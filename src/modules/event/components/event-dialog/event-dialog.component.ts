import {Component, Inject, OnInit} from '@angular/core';
import {EventDetailsComponent} from '../../containers/event-details/event-details.component';
import {FormBuilder} from '@angular/forms';
import {AuthService, ErrorService, SnackBarService} from '../../../core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EventObject} from '../../../../shared/models';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../../services/event.service';

export interface EventDialogData {
  eventObject: EventObject;
}

@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.css']
})

export class EventDialogComponent extends EventDetailsComponent implements OnInit {

  constructor(protected fb: FormBuilder,
              protected authService: AuthService,
              protected route: ActivatedRoute,
              protected service: EventService,
              protected errorService: ErrorService,
              protected router: Router,
              protected snackBarService: SnackBarService,
              @Inject(MAT_DIALOG_DATA) public data: EventDialogData,
              public dialogRef: MatDialogRef<EventDetailsComponent>) {
    super(fb, authService, route, service, errorService, router, snackBarService);
    this.createForm();
    this.eventObject = this.data.eventObject;
  }

  ngOnInit(): void {
    this.updateForm();
  }

  onDialogClose(): EventObject {
    return this.prepareSave();
  }

}

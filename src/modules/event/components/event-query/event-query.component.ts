import {Component} from '@angular/core';
import {QueryComponent} from '../../../commons/components';
import {EventQuery} from '../../services/event.service';
import {FormBuilder} from '@angular/forms';
import {Severity, Severities, State, States} from 'src/shared/models/event/event.model';
import {AuthService} from '../../../core';

@Component({
  selector: 'app-event-query',
  templateUrl: './event-query.component.html',
  styleUrls: ['./event-query.component.css']
})
export class EventQueryComponent extends QueryComponent<EventQuery> {
  readonly Severity = Severity;
  readonly Severities = Severities;
  readonly State = State;
  readonly States = States;

  constructor(protected fb: FormBuilder, private authService: AuthService) {
    super(fb);
  }

  protected createForm() {
    this.form = this.fb.group({
      assignee: '',
      state: '',
      severity: '',
      source: '',
      assignedToMe: false
    });
  }

  onShowAssignedToMe(event: any) {
    if (event.checked) {
      const user = this.authService.email;
      this.form.patchValue({
        assignee: user
      });
    } else {
      this.form.patchValue({
        assignee: ''
      });
    }
  }

}

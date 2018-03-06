import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DateTime} from '../../../commons/datetime';
import {CrawlScheduleConfig} from '../../../commons/models/config.model';
import {
  VALID_CRON_DOM_PATTERN,
  VALID_CRON_DOW_PATTERN,
  VALID_CRON_HOUR_PATTERN,
  VALID_CRON_MINUTE_PATTERN,
  VALID_CRON_MONTH_PATTERN,
  VALID_DAY_PATTERN,
  VALID_MONTH_PATTERN,
  VALID_YEAR_PATTERN
} from '../../../commons/validator';
import {RoleService} from '../../../auth/role.service';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.css'],
})
export class ScheduleDetailsComponent implements OnChanges {

  @Input()
  schedule: CrawlScheduleConfig;

  @Output()
  save = new EventEmitter<CrawlScheduleConfig>();
  @Output()
  update = new EventEmitter<CrawlScheduleConfig>();
  // noinspection ReservedWordAsName
  @Output()
  delete = new EventEmitter<CrawlScheduleConfig>();

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private roleService: RoleService) {
    this.createForm();
  }

  get canDelete(): boolean {
    return this.roleService.isAdmin();
  }

  get canEdit(): boolean {
    return this.roleService.isCurator() || this.roleService.isAdmin();
  }

  get showSave(): boolean {
    return this.schedule && !this.schedule.id
  }

  get canSave(): boolean {
    return this.form.valid && this.canEdit;
  }

  get canUpdate() {
    return this.form.valid && this.form.dirty && this.canEdit;
  }

  get canRevert() {
    return this.canEdit && this.form.dirty;
  }

  get name() {
    return this.form.get('meta.name');
  }

  get cronExpression() {
    return this.form.get('cron_expression');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.schedule) {
      this.form.reset();
      return;
    }

    if (this.schedule) {
      this.updateForm();
    }
  }

  onSave() {
    this.save.emit(this.prepareSave());
  }

  onUpdate(): void {
    this.update.emit(this.prepareSave());
  }

  onDelete(): void {
    this.delete.emit(this.schedule);
  }

  onRevert() {
    this.updateForm();
  }

  private createForm() {
    this.form = this.fb.group({
      id: {value: '', disabled: true},
      cron_expression: this.fb.group({
        minute: ['', [Validators.required, Validators.pattern(new RegExp(VALID_CRON_MINUTE_PATTERN))]],
        hour: ['', [Validators.required, Validators.pattern(new RegExp(VALID_CRON_HOUR_PATTERN))]],
        dom: ['', [Validators.required, Validators.pattern(new RegExp(VALID_CRON_DOM_PATTERN))]],
        month: ['', [Validators.required, Validators.pattern(new RegExp(VALID_CRON_MONTH_PATTERN))]],
        dow: ['', [Validators.required, Validators.pattern(new RegExp(VALID_CRON_DOW_PATTERN))]],
      }),
      valid_from: this.fb.group({
        year: ['', [Validators.maxLength(4), Validators.pattern(VALID_YEAR_PATTERN)]],
        month: ['', [Validators.maxLength(2), Validators.pattern(VALID_MONTH_PATTERN)]],
        day: ['', [Validators.maxLength(2), Validators.pattern(VALID_DAY_PATTERN)]]
      }),
      valid_to: this.fb.group({
        year: ['', [Validators.maxLength(4), Validators.pattern(VALID_YEAR_PATTERN)]],
        month: ['', [Validators.maxLength(2), Validators.pattern(VALID_MONTH_PATTERN)]],
        day: ['', [Validators.maxLength(2), Validators.pattern(VALID_DAY_PATTERN)]]
      }),
      meta: this.fb.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
        description: '',
        created: {value: '', disabled: true},
        created_by: {value: '', disabled: true},
        last_modified: {value: '', disabled: true},
        last_modified_by: {value: '', disabled: true},
        label: [],
      }),
    });

    if (!this.canEdit) {
      this.form.disable();
    }
  }

  private updateForm() {
    const cronSplit = this.schedule.cron_expression.split(' ');
    this.form.patchValue({
      id: this.schedule.id,
      cron_expression: {
        minute: cronSplit[0],
        hour: cronSplit[1],
        dom: cronSplit[2],
        month: cronSplit[3],
        dow: cronSplit[4],
      },
      meta: {
        name: this.schedule.meta.name,
        description: this.schedule.meta.description,
        created: new Date(this.schedule.meta.created),
        created_by: this.schedule.meta.created_by,
        last_modified: new Date(this.schedule.meta.last_modified),
        last_modified_by: this.schedule.meta.last_modified_by,
        label: this.schedule.meta.label || [],

      },
    });

    if (this.schedule.valid_from != null) {
      const {year, month, day} = DateTime.fromISOToDateUTC(this.schedule.valid_from);
      this.form.patchValue({
        valid_from: {
          year: year,
          month: month + 1,
          day: day,
        },
      });
    } else {
      this.form.patchValue({
        valid_from: {
          year: '',
          month: '',
          day: '',
        },
      });
    }
    if (this.schedule.valid_to != null) {
      const {year, month, day} = DateTime.fromISOToDateUTC(this.schedule.valid_to);
      this.form.patchValue({
        valid_to: {
          year: year,
          month: month + 1,
          day: day,
        },
      });
    } else {
      this.form.patchValue({
        valid_to: {
          year: '',
          month: '',
          day: '',
        },
      });
    }
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }

  private setCronExpression(formModel): string {
    return formModel.minute + ' '
      + formModel.hour + ' '
      + formModel.dom + ' '
      + formModel.month + ' '
      + formModel.dow;
  }

  private prepareSave(): CrawlScheduleConfig {
    const formModel = this.form.value;
    const formCronExpression = this.form.value.cron_expression;
    const formValidFrom = this.form.value.valid_from;
    const formValidTo = this.form.value.valid_to;

    const validFrom = DateTime.setValidFromSecondsUTC(formValidFrom.year, formValidFrom.month, formValidFrom.day);
    const validTo = DateTime.setValidToSecondsUTC(formValidTo.year, formValidTo.month, formValidTo.day);
    const cronExpression = this.setCronExpression(formCronExpression);
    return {

      id: this.schedule.id,
      cron_expression: cronExpression,
      valid_from: validFrom ? validFrom.toString() : null,
      valid_to: validTo ? validTo.toString() : null,
      meta: {
        name: formModel.meta.name as string,
        description: formModel.meta.description as string,
        // created: '',
        // created_by: '',
        // last_modified: null,
        last_modified_by: '',
        label: formModel.meta.label.map(label => ({...label})),
      }
    };
  }
}


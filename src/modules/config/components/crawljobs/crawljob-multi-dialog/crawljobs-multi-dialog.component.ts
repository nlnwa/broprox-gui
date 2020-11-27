import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {CrawlJobDetailsComponent} from '..';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../../../core/services/auth';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ConfigDialogData} from '../../../func';
import {ConfigObject, Kind, Label} from '../../../../../shared/models/config';
import {NUMBER_OR_EMPTY_STRING} from '../../../../../shared/validation/patterns';
import {LabelMultiComponent} from '../../label/label-multi/label-multi.component';

@Component({
  selector: 'app-crawljobs-multi-dialog',
  templateUrl: './crawljobs-multi-dialog.component.html',
  styleUrls: ['./crawljobs-multi-dialog.component.css']
})
export class CrawlJobMultiDialogComponent extends CrawlJobDetailsComponent implements OnInit {

  shouldAddLabel: boolean = undefined;
  allSelected = false;

  @ViewChild(LabelMultiComponent) labelMulti: LabelMultiComponent;

  constructor(protected fb: FormBuilder,
              protected authService: AuthService,
              @Inject(MAT_DIALOG_DATA) public data: ConfigDialogData,
              public dialogRef: MatDialogRef<CrawlJobMultiDialogComponent>) {
    super(fb, authService);
    this.configObject = this.data.configObject;
    this.crawlScheduleConfigs = this.data.options.crawlScheduleConfigs;
    this.crawlConfigs = this.data.options.crawlConfigs;
    this.scopeScripts = this.data.options.scopeScripts;
    this.allSelected = this.data.allSelected;
  }

  get labelList() {
    return this.form.get('labelList');
  }

  get canUpdate(): boolean {
    return this.form.valid && (
      this.form.dirty
      || (this.shouldAddLabel !== undefined && this.labelList.value.length)
    );
  }

  get canRevert(): boolean {
    return this.form.dirty
      || this.shouldAddLabel !== undefined;
  }

  ngOnInit(): void {
    this.updateForm();
  }

  onDialogClose(): { updateTemplate: ConfigObject, pathList: string[] } {
    return this.prepareSave();
  }

  onRevert() {
    this.shouldAddLabel = undefined;
    this.labelMulti.onRevert();
    super.onRevert();
  }

  onUpdateLabels({add, labels}: { add: boolean, labels: Label[] }) {
    this.form.patchValue({
      labelList: labels
    });
    this.shouldAddLabel = add;
  }

  protected createForm() {
    this.form = this.fb.group({
      labelList: {value: []},
      scheduleRef: this.fb.group({
        id: '',
        kind: Kind.CRAWLSCHEDULECONFIG,
      }),
      crawlConfigRef: this.fb.group({
        id: '',
        kind: Kind.CRAWLCONFIG,
      }),
      scopeScriptRef: this.fb.group({
        id: '',
        kind: Kind.BROWSERSCRIPT,
      }),
      disabled: {value: '', disabled: true},
      limits: this.fb.group({
        maxDurationS: ['', [Validators.pattern(NUMBER_OR_EMPTY_STRING)]],
        maxBytes: ['', [Validators.pattern(NUMBER_OR_EMPTY_STRING)]],
      })
    });
  }

  protected updateForm() {
    if (this.configObject.crawlJob.disabled !== undefined) {
      this.disabled.enable();
    } else {
      this.disabled.disable();
    }
    this.form.setValue({
      labelList: this.configObject.meta.labelList,
      disabled: !!this.configObject.crawlJob.disabled,
      scheduleRef: this.configObject.crawlJob.scheduleRef,
      crawlConfigRef: this.configObject.crawlJob.crawlConfigRef,
      scopeScriptRef: this.configObject.crawlJob.scopeScriptRef,
      limits: {
        maxDurationS: this.configObject.crawlJob.limits.maxDurationS || '',
        maxBytes: this.configObject.crawlJob.limits.maxBytes || '',
      },
    });
    this.form.markAsPristine();
    this.form.markAsUntouched();
    if (!this.canEdit) {
      this.form.disable();
    }
  }

  protected prepareSave(): any {
    const pathList: string[] = [];

    const formModel = this.form.value;

    const updateTemplate = new ConfigObject({kind: Kind.CRAWLJOB});
    const crawlJob = updateTemplate.crawlJob;

    if (this.labelList.value.length && this.shouldAddLabel !== undefined) {
      updateTemplate.meta.labelList = formModel.labelList;
      if (this.shouldAddLabel) {
        pathList.push('meta.label+');
      } else {
        pathList.push('meta.label-');
      }
    }

    if (this.disabled.dirty && formModel.disabled !== undefined) {
      crawlJob.disabled = formModel.disabled;
      pathList.push('crawlJob.disabled');
    }

    if (this.maxBytes.dirty &&
      (this.allSelected || formModel.limits.maxBytes !== this.configObject.crawlJob.limits.maxBytes)) {
      crawlJob.limits.maxBytes = formModel.limits.maxBytes;
      pathList.push('crawlJob.limits.maxBytes');
    }

    if (this.maxDurationSeconds.dirty &&
      (this.allSelected || formModel.limits.maxDurationS !== this.configObject.crawlJob.limits.maxDurationS)) {
      crawlJob.limits.maxDurationS = formModel.limits.maxDurationS;
      pathList.push('crawlJob.limits.maxDurationS');
    }

    if (formModel.scheduleRef.id &&
      this.scheduleRef.dirty && (this.allSelected || formModel.scheduleRef !== this.configObject.crawlJob.scheduleRef)) {
      crawlJob.scheduleRef = formModel.scheduleRef;
      pathList.push('crawlJob.scheduleRef');
    } else {
      updateTemplate.crawlJob.scheduleRef = null;
    }

    if (formModel.crawlConfigRef.id && this.crawlConfigRef.dirty &&
      (this.allSelected || formModel.crawlConfigRef !== this.configObject.crawlJob.crawlConfigRef)) {
      crawlJob.crawlConfigRef = formModel.crawlConfigRef;
      pathList.push('crawlJob.crawlConfigRef');
    } else {
      crawlJob.crawlConfigRef = null;
    }

    if (formModel.scopeScriptRef.id && this.scopeScriptRef.dirty &&
      (this.allSelected || formModel.scopeScriptRef !== this.configObject.crawlJob.scopeScriptRef)) {
      crawlJob.scopeScriptRef = formModel.scopeScriptRef;
      pathList.push('crawlJob.scopeScriptRef');
    } else {
      crawlJob.scopeScriptRef = null;
    }

    return {updateTemplate, pathList};
  }

}

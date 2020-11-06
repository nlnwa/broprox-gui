import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {CrawlConfigDetailsComponent} from '..';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../../../core/services/auth';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ConfigDialogData} from '../../../func';
import {ConfigObject, ConfigRef, Kind, Label} from '../../../../../shared/models/config';
import {NUMBER_OR_EMPTY_STRING} from '../../../../../shared/validation/patterns';
import {LabelMultiComponent} from '../../label/label-multi/label-multi.component';

@Component({
  selector: 'app-crawlconfig-multi-dialog',
  templateUrl: './crawlconfig-multi-dialog.component.html',
  styleUrls: ['./crawlconfig-multi-dialog.component.css']
})
export class CrawlConfigMultiDialogComponent extends CrawlConfigDetailsComponent implements OnInit {

  shouldAddLabel = undefined;
  allSelected = false;

  @ViewChild(LabelMultiComponent) labelMulti: LabelMultiComponent;

  constructor(protected fb: FormBuilder,
              protected authService: AuthService,
              @Inject(MAT_DIALOG_DATA) public data: ConfigDialogData,
              public dialogRef: MatDialogRef<CrawlConfigMultiDialogComponent>) {
    super(fb, authService);
    this.configObject = this.data.configObject;
    this.browserConfigs = this.data.options.browserConfigs;
    this.politenessConfigs = this.data.options.politenessConfigs;
    this.collections = this.data.options.collections;
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
      collectionRefId: '',
      browserConfigRefId: '',
      politenessRefId: '',
      extra: this.fb.group({
        createScreenshot: {value: '', disabled: true},
      }),
      minimumDnsTtlS: ['', Validators.pattern(NUMBER_OR_EMPTY_STRING)],
      priorityWeight: ['', Validators.pattern(NUMBER_OR_EMPTY_STRING)],
    });
  }

  protected updateForm() {
    if (this.configObject.crawlConfig.extra.createScreenshot !== null && !this.allSelected) {
      this.createScreenshot.enable();
    } else {
      this.createScreenshot.disable();
    }
    this.form.setValue({
      labelList: this.configObject.meta.labelList,
      collectionRefId: this.configObject.crawlConfig.collectionRef ? this.configObject.crawlConfig.collectionRef.id : '',
      politenessRefId: this.configObject.crawlConfig.politenessRef ? this.configObject.crawlConfig.politenessRef.id : '',
      browserConfigRefId: this.configObject.crawlConfig.browserConfigRef ? this.configObject.crawlConfig.browserConfigRef.id : '',
      minimumDnsTtlS: this.configObject.crawlConfig.minimumDnsTtlS || '',
      priorityWeight: this.configObject.crawlConfig.priorityWeight || '',
      extra: this.configObject.crawlConfig.extra,
    });
    this.form.markAsPristine();
    this.form.markAsUntouched();
    if (!(this.canEdit)) {
      this.form.disable();
    }
  }

  protected prepareSave(): any {
    const pathList: string[] = [];

    const formModel = this.form.value;

    const updateTemplate = new ConfigObject({kind: Kind.CRAWLCONFIG});
    const crawlConfig = updateTemplate.crawlConfig;

    if (this.labelList.value.length && this.shouldAddLabel !== undefined) {
      updateTemplate.meta.labelList = formModel.labelList;
      if (this.shouldAddLabel && (this.allSelected || this.configObject.meta.labelList !== formModel.labelList)) {
        pathList.push('meta.label+');
      } else {
        pathList.push('meta.label-');
      }
    }

    if (this.minDnsTtlSeconds.dirty
      && (this.allSelected || formModel.minimumDnsTtlSeconds !== this.configObject.crawlConfig.minimumDnsTtlS)) {
      crawlConfig.minimumDnsTtlS = formModel.minimumDnsTtlS;
      pathList.push('crawlConfig.minimumDnsTtlS');
    }

    if (this.priorityWeight.dirty && (this.allSelected || formModel.priorityWeight !== this.configObject.crawlConfig.priorityWeight)) {
      crawlConfig.priorityWeight = formModel.priorityWeight;
      pathList.push('crawlConfig.priorityWeight');
    }

    if (this.createScreenshot.dirty
      && (this.allSelected || formModel.extra.createScreenshot !== this.configObject.crawlConfig.extra.createScreenshot)) {
      crawlConfig.extra.createScreenshot = formModel.extra.createScreenshot;
      pathList.push('crawlConfig.extra.createScreenshot');
    }

    if (formModel.collectionRefId && this.collectionRefId.dirty && (this.allSelected
      || formModel.collectionRefId !== (this.configObject.crawlConfig.collectionRef && this.configObject.crawlConfig.collectionRef.id))) {
      crawlConfig.collectionRef = new ConfigRef({kind: Kind.COLLECTION, id: formModel.collectionRefId});
      pathList.push('crawlConfig.collectionRef');
    } else {
      crawlConfig.collectionRef = null;
    }

    if (formModel.browserConfigRefId && this.browserConfigRefId.dirty && (this.allSelected
      || formModel.browserConfigRefId !== (this.configObject.crawlConfig.browserConfigRef
        && this.configObject.crawlConfig.browserConfigRef.id))) {
      crawlConfig.browserConfigRef = new ConfigRef({kind: Kind.BROWSERCONFIG, id: formModel.browserConfigRefId});
      pathList.push('crawlConfig.browserConfigRef');
    } else {
      crawlConfig.browserConfigRef = null;
    }

    if (formModel.politenessRefId && this.politenessRefId.dirty && (this.allSelected
      || formModel.politenessRefId !== (this.configObject.crawlConfig.politenessRef
        && this.configObject.crawlConfig.politenessRef.id))) {
      crawlConfig.politenessRef = new ConfigRef({kind: Kind.POLITENESSCONFIG, id: formModel.politenessRefId});
      pathList.push('crawlConfig.politenessRef');
    } else {
      crawlConfig.politenessRef = null;
    }

    return {updateTemplate, pathList};
  }

  onDialogClose(): { updateTemplate: ConfigObject, pathList: string[] } {
    return this.prepareSave();
  }
}

import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DECIMAL_NUMBER_OR_EMPTY_STRING, NUMBER_OR_EMPTY_STRING} from '../../../../../shared/validation/patterns';
import {ConfigObject, ConfigRef, CrawlConfig, Kind, Meta} from '../../../../../shared/models';
import {AuthService} from '../../../../core/services/auth';

@Component({
  selector: 'app-crawlconfig-details',
  templateUrl: './crawlconfig-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrawlConfigDetailsComponent implements OnChanges {
  readonly Kind = Kind;

  @Input()
  configObject: ConfigObject;

  @Input()
  politenessConfigs: ConfigObject[];

  @Input()
  collections: ConfigObject[];

  @Input()
  browserConfigs: ConfigObject[];

  @Output()
  save = new EventEmitter<ConfigObject>();

  @Output()
  update = new EventEmitter<ConfigObject>();

  // noinspection ReservedWordAsName
  @Output()
  delete = new EventEmitter<ConfigObject>();

  form: FormGroup;

  constructor(protected fb: FormBuilder, protected authService: AuthService) {
    this.createForm();
  }

  get canEdit(): boolean {
    return this.authService.canUpdate(this.configObject.kind);
  }

  get canSave(): boolean {
    return this.form.valid;
  }

  get canUpdate(): boolean {
    return this.form.valid && this.form.dirty;
  }

  get canDelete(): boolean {
    return this.authService.canDelete(this.configObject.kind);
  }

  get showSave(): boolean {
    return (this.configObject && !this.configObject.id);
  }

  get name(): string {
    return this.form.get('meta').value.name;
  }

  get collectionRefId(): AbstractControl {
    return this.form.get('collectionRefId');
  }

  get browserConfigRefId(): AbstractControl {
    return this.form.get('browserConfigRefId');
  }

  get politenessRefId(): AbstractControl {
    return this.form.get('politenessRefId');
  }

  get minDnsTtlSeconds(): AbstractControl {
    return this.form.get('minimumDnsTtlS');
  }

  get priorityWeight(): AbstractControl {
    return this.form.get('priorityWeight');
  }

  get createScreenshot(): AbstractControl {
    return this.form.get('extra.createScreenshot');
  }

  get showShortcuts(): boolean {
    return (this.politenessRefId && this.politenessRefId.value)
      || (this.browserConfigRefId && this.browserConfigRefId.value)
      || (this.collectionRefId && this.collectionRefId.value);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.configObject) {
      if (!this.configObject) {
        this.form.reset();
      } else {
        this.updateForm();
      }
    }
  }

  onSave() {
    this.save.emit(this.prepareSave());
  }

  onUpdate(): void {
    this.update.emit(this.prepareSave());
  }

  onDelete(): void {
    this.delete.emit(this.configObject);
  }

  onRevert() {
    this.updateForm();
  }

  protected createForm() {
    this.form = this.fb.group({
      id: '',
      collectionRefId: '',
      browserConfigRefId: '',
      politenessRefId: '',
      extra: this.fb.group({
        createScreenshot: '',
      }),
      minimumDnsTtlS: ['', Validators.pattern(NUMBER_OR_EMPTY_STRING)],
      priorityWeight: ['', Validators.pattern(DECIMAL_NUMBER_OR_EMPTY_STRING)],
      meta: new Meta(),
    });
  }

  protected updateForm() {
    this.form.setValue({
      id: this.configObject.id,
      collectionRefId: this.configObject.crawlConfig.collectionRef.id,
      politenessRefId: this.configObject.crawlConfig.politenessRef.id,
      browserConfigRefId: this.configObject.crawlConfig.browserConfigRef.id,
      minimumDnsTtlS: this.configObject.crawlConfig.minimumDnsTtlS || '',
      priorityWeight: this.configObject.crawlConfig.priorityWeight || '',
      extra: this.configObject.crawlConfig.extra,
      meta: this.configObject.meta,
    });
    this.form.markAsPristine();
    this.form.markAsUntouched();
    if (!(this.canEdit)) {
      this.form.disable();
    }
  }

  protected prepareSave(): ConfigObject {
    const formModel = this.form.value;

    const configObject = new ConfigObject({
      id: formModel.id,
      kind: Kind.CRAWLCONFIG,
      meta: formModel.meta
    });

    const crawlConfig = new CrawlConfig();
    crawlConfig.collectionRef = formModel.collectionRefId ? new ConfigRef({id: formModel.collectionRefId, kind: Kind.COLLECTION}) : null;
    crawlConfig.browserConfigRef = formModel.browserConfigRefId ? new ConfigRef({
      id: formModel.browserConfigRefId,
      kind: Kind.BROWSERCONFIG
    }) : null;
    crawlConfig.politenessRef = formModel.politenessRefId ? new ConfigRef({
      id: formModel.politenessRefId,
      kind: Kind.POLITENESSCONFIG
    }) : null;
    crawlConfig.minimumDnsTtlS = parseInt(formModel.minimumDnsTtlS, 10) || 0;
    crawlConfig.priorityWeight = parseFloat(formModel.priorityWeight) || 0;
    crawlConfig.extra.createScreenshot = formModel.extra ? formModel.extra.createScreenshot : null;

    configObject.crawlConfig = crawlConfig;

    return configObject;
  }
}


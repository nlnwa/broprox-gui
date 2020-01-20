import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';


import {AuthService} from '../../../../core/services/auth';
import {ConfigObject, ConfigRef, Kind, Meta} from '../../../../../shared/models';
import {Subject} from 'rxjs';
import {Parcel} from '../../seed-meta/seed-meta.component';

@Component({
  selector: 'app-seed-details',
  templateUrl: './seed-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeedDetailComponent implements OnChanges, OnDestroy {

  @Input()
  configObject: ConfigObject;

  @Input()
  crawlJobs: ConfigObject[];

  @Output()
  save = new EventEmitter<ConfigObject>();

  @Output()
  saveMultiple = new EventEmitter<ConfigObject[]>();

  @Output()
  update = new EventEmitter<ConfigObject>();

  @Output()
  move = new EventEmitter<Parcel>();

  // noinspection ReservedWordAsName
  @Output()
  delete = new EventEmitter<ConfigObject>();

  form: FormGroup;

  ngUnsubscribe = new Subject<void>();

  constructor(protected fb: FormBuilder,
              protected authService: AuthService) {
    this.createForm();
  }

  get showSave(): boolean {
    return (this.configObject && !this.configObject.id);
  }

  get canSave(): boolean {
    return !(
      this.entityRef.get('id').hasError('required')
      || this.meta.hasError('required')
      || this.meta.hasError('pattern')
      || this.meta.pending
    );
  }

  get canUpdate(): boolean {
    return this.form.valid && this.form.dirty;
  }

  get canRevert(): boolean {
    return this.form.dirty;
  }

  get canEdit(): boolean {
    return this.authService.isAdmin() || this.authService.isCurator();
  }

  get entityRef(): AbstractControl {
    return this.form.get('entityRef');
  }

  get jobRefListId(): AbstractControl {
    return this.form.get('jobRefListId');
  }

  get meta(): AbstractControl {
    return this.form.get('meta');
  }

  get disabled(): AbstractControl {
    return this.form.get('disabled');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.configObject) {
      if (this.configObject) {
        this.updateForm();
      } else {
        this.form.reset();
      }
    }
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  getCrawlJobName(id) {
    const found = this.crawlJobs.find(crawlJob => crawlJob.id === id);
    return found ? found.meta.name : 'crawlJob';
  }

  onSave(): void {
    if (this.isMultipleSeed()) {
      this.saveMultiple.emit(this.prepareSaveMultiple());
    } else {
      this.save.emit(this.prepareSave());
    }
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
      id: {value: ''},
      disabled: '',
      entityRef: this.fb.group({
        kind: '',
        id: ['', [Validators.required]],
      }),
      jobRefListId: {value: []},
      scope: this.fb.group({
        surtPrefix: ''
      }),
      meta: new Meta(),
    });
  }

  protected updateForm() {
    if (!this.canEdit) {
      this.form.disable();
    }

    this.form.setValue({
      id: this.configObject.id,
      disabled: !!this.configObject.seed.disabled,
      entityRef: this.configObject.seed.entityRef,
      jobRefListId: this.configObject.seed.jobRefList.map(job => job.id),
      scope: {
        surtPrefix: this.configObject.seed.scope.surtPrefix,
      },
      meta: this.configObject.meta,
    });
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }

  /**
   * Disabled values in form must be copied from model and not the view model (form.value)
   */
  protected prepareSave(): ConfigObject {
    const formModel = this.form.value;

    return new ConfigObject({
      id: formModel.id,
      kind: Kind.SEED,
      meta: formModel.meta,
      seed: {
        disabled: formModel.disabled,
        entityRef: formModel.entityRef,
        jobRefList: formModel.jobRefListId.map(id => new ConfigRef({kind: Kind.CRAWLJOB, id})),
        scope: formModel.scope
      }
    });
  }

  private prepareSaveMultiple(): ConfigObject[] {
    const formModel = this.form.value;

    const configObjectTemplate = new ConfigObject({
      id: formModel.id,
      kind: Kind.SEED,
      meta: formModel.meta,
      seed: {
        disabled: formModel.disabled,
        entityRef: formModel.entityRef,
        jobRefList: formModel.jobRefListId.map(id => new ConfigRef({kind: Kind.CRAWLJOB, id})),
        scope: formModel.scope
      }
    });

    const urls = formModel.meta.name.trim().split(/\s+/).filter(s => !!s);

    return urls.map(url => {
      const seed = ConfigObject.clone(configObjectTemplate);
      seed.seed = configObjectTemplate.seed;
      seed.meta.name = url;
      return seed;
    });
  }

  private isMultipleSeed() {
    const meta = this.meta.value;
    const parts = meta.name.split(/\s+/);
    return parts.length > 1;
  }
}

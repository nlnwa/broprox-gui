import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../../../core/services/auth';
import {BrowserScript, BrowserScriptType, ConfigObject, Kind, Meta} from '../../../../../shared/models';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-browserscript-details',
  templateUrl: './browserscript-details.component.html',
})
export class BrowserScriptDetailsComponent implements OnChanges {
  readonly BrowserScriptType = BrowserScriptType;

  @Input()
  browserScriptTypes: BrowserScriptType[] = [];

  @Input()
  configObject: ConfigObject;

  @Output()
  save = new EventEmitter<ConfigObject>();

  @Output()
  update = new EventEmitter<ConfigObject>();

  @Output()
  delete = new EventEmitter<ConfigObject>();

  private selectedRegexpIndex = -1;

  form: FormGroup;

  regexpForm: FormGroup;
  control = new FormControl();
  removable = true;

  labelInputSeparators = [ENTER, COMMA];

  constructor(protected fb: FormBuilder,
              protected authService: AuthService) {
    this.createForm();
  }

  get canEdit(): boolean {
    return this.authService.canUpdate(this.configObject.kind);
  }

  get canDelete(): boolean {
    return this.authService.canDelete(this.configObject.kind);
  }

  get canSave(): boolean {
    return this.form.valid;
  }

  get canUpdate(): boolean {
    return this.form.valid && this.form.dirty;
  }

  get canUpdateRegex(): boolean {
    return this.regexpForm.get('regexp').valid && this.regexpForm.get('regexp').dirty;
  }

  get showSave(): boolean {
    return (this.configObject && !this.configObject.id);
  }

  get name(): string {
    return this.form.get('meta').value.name;
  }

  get urlRegexpList(): string[] {
    return this.form.get('urlRegexpList').value;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.configObject) {
      this.form.reset();
      if (this.configObject) {
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

  onRemoveRegex(regex: string) {
    const index = this.urlRegexpList.indexOf(regex);

    if (index >= 0) {
      this.urlRegexpList.splice(index, 1);
      this.form.markAsDirty();
    }
  }

  onClickRegex(regex: string) {
    this.selectedRegexpIndex = this.findRegexpIndex(regex);
    this.regexpForm.enable();
    this.regexpForm.reset({regexp: regex});
  }

  onSaveRegexp(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value.trim();

    if (value === '') {
      return;
    }
    if (this.findRegexpIndex(value) > -1) {
      input.value = '';
      return;
    }
    this.urlRegexpList.push(value);
    this.form.markAsDirty();

    if (input) {
      input.value = '';
    }
  }

  onUpdateRegexp(regexp: string): void {
    regexp = regexp.trim();
    this.urlRegexpList.splice(this.selectedRegexpIndex, 1);
    this.urlRegexpList.push(regexp);
    this.regexpForm.disable();
    this.form.markAsDirty();
  }

  onAbort(): void {
    this.regexpForm.disable();
  }

  protected createForm() {
    this.form = this.fb.group({
      id: '',
      urlRegexpList: [],
      script: '',
      browserScriptType: '',
      meta: new Meta(),
    });
    this.regexpForm = this.fb.group({
      regexp: '',
    });
    this.regexpForm.disable();
  }

  protected updateForm(): void {
    this.form.setValue({
      id: this.configObject.id,
      script: this.configObject.browserScript.script,
      browserScriptType: this.configObject.browserScript.browserScriptType,
      meta: this.configObject.meta,
      urlRegexpList: this.configObject.browserScript.urlRegexpList.map(_ => _)
    });
    this.form.markAsPristine();
    this.form.markAsUntouched();
    if (!this.canEdit) {
      this.form.disable();
    }
  }

  protected prepareSave(): ConfigObject {
    const formModel = this.form.value;

    const configObject = new ConfigObject({kind: Kind.BROWSERSCRIPT});
    configObject.id = this.configObject.id;

    const browserScript = new BrowserScript();
    browserScript.script = formModel.script;
    browserScript.urlRegexpList = formModel.urlRegexpList;
    browserScript.browserScriptType = formModel.browserScriptType;

    configObject.meta = formModel.meta;
    configObject.browserScript = browserScript;

    this.form.markAsPristine();
    return configObject;
  }

  private findRegexpIndex(regexp: string): number {
    return this.urlRegexpList.findIndex((regex) => {
      return regex === regexp;
    });
  }
}

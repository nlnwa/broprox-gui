import {ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, OnChanges, OnInit,} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {Label} from '../commons/models/config.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ENTER} from '@angular/cdk/keycodes';

const COMMA = 188;

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => LabelsComponent),
    multi: true
  }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LabelsComponent implements OnChanges, ControlValueAccessor, OnInit {

  @Input() canEdit = true;
  @Input() disabled = false;
  @Input() type;

  public showAddLabelCard = false;
  public canUpdateLabel = false;
  private indexOfClickedLabel;
  private labels: Label[];
  public canEditLabel: boolean;

  public myFocusTriggeringEventEmitter = new EventEmitter<boolean>();

  labelForm: FormGroup;

  groups: BehaviorSubject<any[]> = new BehaviorSubject([]);
  groups$ = this.groups.asObservable();

  selectable = true;
  separatorKeysCodes = [ENTER, COMMA];


  constructor(private formbuilder: FormBuilder) {
    this.createForm()
  }

  // Function to call when the rating changes.
  onChange = (labels: Label[]) => {
  };

  // Function to call when the input is touched (when a star is clicked).
  onTouched = () => {
  };

  createForm() {
    this.labelForm = this.formbuilder.group({
      newKeyInput: ['', [Validators.required, Validators.minLength(1)]],
      newValueInput: ['', [Validators.required, Validators.minLength(1)]],
    });
    if (!this.canEdit) {
      this.labelForm.disable();
    }
  }


    ngOnInit(): void {
      this.canEditLabel = this.canEdit;
      if (!this.canEditLabel) {
        this.labelForm.disable();
      }
    }

  ngOnChanges(): void {
    this.labelForm.controls['newKeyInput'].setValue('');
    this.labelForm.controls['newValueInput'].setValue('');
    this.showAddLabelCard = false;
  }

  writeValue(labels: Label[]): void {
    if (labels == null) {
      this.labels = [];
    } else {
      this.labels = labels;
      this.regroup();
    }
    this.ngOnChanges();
  }


  registerOnChange(fn: (labels: Label[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  regroup() {
    const grouping = {};

    this.labels.forEach(label => {
      if (grouping.hasOwnProperty(label.key)) {
        grouping[label.key].push(label.value);
      } else {
        grouping[label.key] = [label.value];

      }
    });
    this.groups.next(Object.keys(grouping).map(key => ({key, values: grouping[key]})));
  }

  onNewLabel(key: string, value: string) {
    if ((value || '').trim()) {
      this.labels.push({
        key: key,
        value: value
      });
    }

    if (value) {
      value = '';
    }
    // regroup causes the "type" field to lose focus, and you have to click on fields every time
    this.regroup();
    this.ngOnChanges();
    this.onChange(this.labels);
  }

  /*onNewLabel(key: string, value: string) {
    this.labels.push({
      key: key,
      value: value
    });
    this.regroup();
    this.ngOnChanges();
    this.onChange(this.labels);
  }*/

  onChipClick(key: string, value: string): void {
    const index = this.labels.findIndex((element) => {
      if (element.key === key && element.value === value) {
        return true;
      } else {
        return false;
      }
    });
    this.indexOfClickedLabel = index;
    this.showAddLabelCard = true;
    this.canUpdateLabel = true;
    this.labelForm.controls['newKeyInput'].setValue(key);
    this.labelForm.controls['newValueInput'].setValue(value);
  }

  onUpdateLabel(key: string, value: string) {
    if ((value || '').trim()) {
      this.labels.push({
        key: key,
        value: value
      });
    }
    if (value) {
      value = '';
    }
    // regroup causes the "type" field to lose focus, and you have to click on fields every time
    this.labels.splice(this.indexOfClickedLabel, 1);
    this.canUpdateLabel = false;
    this.regroup();
    this.ngOnChanges();
    this.onChange(this.labels);
  }


  newLabelCard(value: boolean) {
    this.showAddLabelCard = value;
    this.canUpdateLabel = false;
    this.labelForm.controls['newKeyInput'].setValue('');
    this.labelForm.controls['newValueInput'].setValue('');
  }


  removeLabel(key: string, value: string): void {

    const index = this.labels.findIndex((element) => {
      if (element.key === key && element.value === value) {
        return true;
      } else {
        return false;
      }
    });

    this.labels.splice(index, 1);
    this.regroup();
    this.onChange(this.labels);
  }

}


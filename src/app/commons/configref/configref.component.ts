import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges
} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ConfigObject, ConfigRef, Kind} from '../models/';
import {ListRequest} from '../../../api/';
import {Subject, Subscription} from 'rxjs';
import {map, toArray} from 'rxjs/operators';

import {BackendService} from '../../configurations/shared/backend.service';

@Component({
  selector: 'app-configref',
  templateUrl: './configref.component.html',
  styleUrls: ['./configref.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: ConfigRefComponent, multi: true},
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigRefComponent implements AfterViewInit, OnChanges, OnDestroy, ControlValueAccessor {


  @Input()
  kind: Kind = Kind.UNDEFINED;

  @Input()
  multiple = true;

  // ControlValueAccessor callbacks
  onChange: (configRef: ConfigRef | ConfigRef[]) => void;
  onTouched: (configRef: ConfigRef | ConfigRef[]) => void;

  form: FormGroup;

  options: Subject<ConfigObject[]> = new Subject();
  options$ = this.options.asObservable();

  private valueSubscription: Subscription;

  constructor(private fb: FormBuilder, private configService: BackendService,
              private cdr: ChangeDetectorRef) {
    this.createForm();
  }

  get placeholder(): string {
    switch (this.kind) {
      case Kind.UNDEFINED:
      case Kind.CRAWLENTITY:
      case Kind.SEED:
      case Kind.CRAWLHOSTGROUPCONFIG:
      case Kind.ROLEMAPPING:
        return this.kind.toString();
      case Kind.CRAWLJOB:
        return 'Velg crawljob';
      case Kind.CRAWLCONFIG:
        return 'Velg crawlconfig';
      case Kind.CRAWLSCHEDULECONFIG:
        return 'Velg schedule';
      case Kind.BROWSERCONFIG:
        return 'Velg browserconfig';
      case Kind.POLITENESSCONFIG:
        return 'Velg politenessconfig';
      case Kind.BROWSERSCRIPT:
        return 'Velg browserscript';
      case Kind.COLLECTION:
        return 'Velg collection';
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.kind) {
      if (this.kind) {
        this.loadOptions(this.kind);
      }
    }
  }

  ngAfterViewInit() {
    this.valueSubscription = this.form.valueChanges.subscribe(value => {
      if (value.id instanceof Array) {
        this.onChange(value.id.map(id => new ConfigRef({id, kind: this.kind})));
      } else {
        this.onChange(new ConfigRef({id: value.id, kind: this.kind}));
      }
    });
  }

  ngOnDestroy() {
    if (this.valueSubscription) {
      this.valueSubscription.unsubscribe();
    }
  }

  // implement ControlValueAccessor
  writeValue(configRef: ConfigRef | ConfigRef[]): void {
    if (configRef === null) {
      this.form.reset();
    } else {
      this.updateForm(configRef);
    }
  }

  // implement ControlValueAccessor
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // implement ControlValueAccessor
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // implement ControlValueAccessor
  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.form.disable() : this.form.enable();
  }

  private createForm(): void {
    this.form = this.fb.group({
      id: ''
    });
  }

  private updateForm(configRef: ConfigRef | ConfigRef[]): void {
    // setting the emitEvent option to false  prevents the valueChange subscription above to fire
    this.form.patchValue({
      id: configRef instanceof Array ? configRef.map(ref => ref.id) : configRef.id
    }, {emitEvent: false});
    this.form.markAsPristine();
    this.form.markAsUntouched();
    this.cdr.detectChanges();
  }

  private loadOptions(kind: Kind) {
    const listRequest = new ListRequest();
    listRequest.setKind(kind.valueOf());
    this.configService.list(listRequest).pipe(
      map(configObject => ConfigObject.fromProto(configObject)),
      toArray(),
    ).subscribe(configObjects => this.options.next(configObjects));
  }
}

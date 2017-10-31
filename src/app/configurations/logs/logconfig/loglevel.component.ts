import {Component, OnChanges} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LogService} from '../log.service';
import {LogLevel} from '../../../commons/models/config.model';
import {SnackBarService} from '../../../snack-bar-service/snack-bar.service';


@Component({
  selector: 'app-loglevel',
  templateUrl: './loglevel.component.html',
  styleUrls: ['./loglevel.component.css']
})
export class LoglevelComponent implements OnChanges {

  form: FormGroup;

  get levels() {
    return this.logService.getLevels();
  }

  get log_level(): FormArray {
    return this.form.get('log_level') as FormArray;
  };

  get log_levelArray() {
    return <FormArray>this.form.get('log_level');
  }

  logLevels: LogLevel[] = [];

  constructor(private logService: LogService,
              private fb: FormBuilder,
              private snackBarService: SnackBarService) {

    this.form = this.fb.group({
      log_level: this.fb.array([]),

    });
    this.getLogLevels();
  }

  ngOnChanges() {
    this.updateData(this.logLevels)
  }

  updateData(loglevels) {
    const logconfigFG: FormGroup[] = this.logLevels.map(config => (this.fb.group(config)));
    const logconfigFormArray = this.fb.array(logconfigFG);
    this.form.setControl('log_level', logconfigFormArray);
    this.form.markAsPristine();
  }

  getLogLevels() {
    this.logService.getLogConfig()
      .map(response => response.log_level)
      .subscribe(logLevels => {
        logLevels.forEach((logLevel) => {
          this.logLevels.push(logLevel);
        });
        this.ngOnChanges();
      });
  }

  initLogconfig() {
    return this.fb.group({
      logger: ['', [Validators.required, Validators.minLength(1)]],
      level: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  saveLogConfig(logconfig) {
    this.logService.saveLogConfig(logconfig).subscribe();
    this.form.markAsPristine();
    this.snackBarService.openSnackBar('Lagret');
  }

  addLogconfig() {
    this.log_levelArray.push(this.initLogconfig());
  }

  removeLogconfig(i: number) {
    this.log_levelArray.removeAt(i);
    this.form.markAsDirty();
  }

  revert() {
    this.ngOnChanges();
    this.snackBarService.openSnackBar('Tilbakestilt');
  }

}

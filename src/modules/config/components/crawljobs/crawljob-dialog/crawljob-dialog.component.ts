import {Component, Inject, OnInit} from '@angular/core';
import {CrawlJobDetailsComponent} from '..';
import {FormBuilder} from '@angular/forms';
import {AuthService} from '../../../../core/services/auth';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ConfigDialogData} from '../../../func';
import {BrowserScriptType, ConfigObject} from '../../../../../shared/models/config';

@Component({
  selector: 'app-crawljob-dialog',
  templateUrl: './crawljob-dialog.component.html',
  styleUrls: ['./crawljob-dialog.component.css']
})
export class CrawlJobDialogComponent extends CrawlJobDetailsComponent implements OnInit {

  constructor(protected fb: FormBuilder,
              protected authService: AuthService,
              @Inject(MAT_DIALOG_DATA) public data: ConfigDialogData,
              public dialogRef: MatDialogRef<CrawlJobDialogComponent>) {
    super(fb, authService);
    this.createForm();
    this.configObject = this.data.configObject;
    this.crawlConfigs = this.data.options.crawlConfigs;
    this.crawlScheduleConfigs = this.data.options.crawlScheduleConfigs;
    this.scopeScripts = this.data.options.scopeScripts;
  }

  ngOnInit(): void {
    this.updateForm();
  }

  onDialogClose(): ConfigObject {
    return this.prepareSave();
  }
}

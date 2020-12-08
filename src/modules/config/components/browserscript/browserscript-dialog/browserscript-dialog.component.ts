import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {BrowserScriptDetailsComponent} from '..';
import {FormBuilder} from '@angular/forms';
import {AuthService} from '../../../../core/services/auth';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ConfigDialogData} from '../../../func';
import {ConfigObject} from '../../../../../shared/models/config';

@Component({
  selector: 'app-browserscript-dialog',
  templateUrl: './browserscript-dialog.component.html',
  styleUrls: ['./browserscript-dialog.component.css']
})
//export class BrowserScriptDialogComponent extends BrowserScriptDetailsComponent implements OnInit, AfterViewInit {
  export class BrowserScriptDialogComponent extends BrowserScriptDetailsComponent implements OnInit {
  constructor(protected fb: FormBuilder,
              protected authService: AuthService,
              @Inject(MAT_DIALOG_DATA) public data: ConfigDialogData,
              public dialogRef: MatDialogRef<BrowserScriptDialogComponent>) {
    super(fb, authService);
    this.createForm();
    this.configObject = this.data.configObject;
    this.browserScriptTypes = this.data.options.browserScriptTypes;
  }

  ngOnInit(): void {
    this.updateForm();
  }

  // ngAfterViewInit(): void{
  //  this.updateForm();
 // }

  onDialogClose(): ConfigObject {
    return this.prepareSave();
  }

}

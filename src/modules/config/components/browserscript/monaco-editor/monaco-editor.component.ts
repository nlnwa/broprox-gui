import {AfterViewInit, ChangeDetectionStrategy, Component, forwardRef, Input, ViewChild} from '@angular/core';
import {ConfigObject} from '../../../../../shared/models/config';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {EditorComponent} from 'ngx-monaco-editor';

@Component({
  selector: 'app-monaco-editor',
  templateUrl: './monaco-editor.component.html',
  styleUrls: ['./monaco-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MonacoEditorComponent),
      multi: true
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MonacoEditorComponent implements ControlValueAccessor, AfterViewInit {

  @ViewChild(EditorComponent) editorComponent: EditorComponent;

  @Input()
  configObject: ConfigObject;

  editorOptions = {theme: 'vs', language: 'javascript'};
  editorThemes = ['vs', 'vs-dark', 'hc-black'];
  editorLanguages = ['javascript', 'typescript'];

  value: string;

  // ControlValueAccessor callbacks
  onChange: (script: string) => void;
  onTouched: (script: string) => void;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.editorComponent.registerOnChange(this.onChange);
    this.editorComponent.registerOnTouched(this.onTouched);
  }

  writeValue(script: string): void {
    this.value = script;

    if (this.editorComponent !== undefined) {
      this.editorComponent.writeValue(script);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    if (this.editorComponent) {
      this.editorComponent.registerOnChange(fn);
    }
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
    if (this.editorComponent) {
      this.editorComponent.registerOnTouched(fn);
    }
  }

  onChangeTheme(theme: string) {
    this.editorOptions = {...this.editorOptions, theme};
  }

  onChangeLanguage(language: string) {
    this.editorOptions = {...this.editorOptions, language};
  }
}

import {NgxMonacoEditorConfig} from 'ngx-monaco-editor';

export const MonacoConfig: NgxMonacoEditorConfig = {
  baseUrl: 'assets', // configure base path for monaco editor
  defaultOptions: {scrollBeyondLastLine: false}, // pass default options to be used
  onMonacoLoad: monacoOnLoad
};

export function monacoOnLoad() {
}

import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Annotation} from '../../../../../shared/models/config';

@Component({
  selector: 'app-script-annotation',
  templateUrl: './script-annotation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScriptAnnotationComponent {

  @Input()
  annotations: Annotation[];

  constructor() {
  }
}

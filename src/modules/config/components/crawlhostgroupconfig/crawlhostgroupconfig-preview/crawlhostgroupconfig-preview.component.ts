import {Component, Input, OnInit} from '@angular/core';
import {ConfigObject} from '../../../../../shared/models/config';

@Component({
  selector: 'app-crawlhostgroupconfig-preview',
  templateUrl: './crawlhostgroupconfig-preview.component.html',
  styleUrls: ['./crawlhostgroupconfig-preview.component.css']
})
export class CrawlhostgroupconfigPreviewComponent {
  @Input()
  configObject: ConfigObject

  constructor() {
  }

}

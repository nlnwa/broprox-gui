import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {RunStatus} from '../../../../shared/models/controller';
import {CrawlerStatus} from '../../../../shared/models/controller/controller.model';


@Component({
  selector: 'app-crawlerstatus',
  templateUrl: './crawlerstatus.component.html',
  styleUrls: ['./crawlerstatus.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrawlerStatusComponent {
  readonly RunStatus = RunStatus;

  @Input()
  crawlerStatus: CrawlerStatus;

  @Output()
  pauseCrawl: EventEmitter<boolean> = new EventEmitter<boolean>();

  onPauseCrawler(shouldPause: boolean) {
    this.pauseCrawl.emit(shouldPause);
  }
}

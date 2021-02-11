import {ChangeDetectionStrategy, Component, forwardRef, Input} from '@angular/core';
import {BaseListComponent} from '../../../commons/components';
import {CrawlLog} from '../../../../shared/models/report';
import {ListDataSource} from '../../../../shared/models';
import {BASE_LIST} from '../../../../shared/directives';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-crawl-log-list',
  templateUrl: './crawl-log-list.component.html',
  styleUrls: ['./crawl-log-list.component.scss',
    '../../../commons/components/base-list/base-list.scss',
    '../../../commons/components/base-list/base-list-odd-preview.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ListDataSource,
    {
      provide: BASE_LIST,
      useExisting: forwardRef(() => CrawlLogListComponent)
    }
  ],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', opacity: 0})),
      state('expanded', style({height: '*', opacity: 1})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CrawlLogListComponent extends BaseListComponent<CrawlLog> {

  @Input()
  multiSelect = false;

  @Input()
  sortActive = 'timestamp';

  displayedColumns: string[] =
    ['requestedUri', 'timestamp', 'statusCode', 'discoveryPath', 'contentType', 'extra', 'action'];

  constructor() {
    super();
  }
}

import {ChangeDetectionStrategy, Component, forwardRef, Input} from '@angular/core';
import {BaseListComponent} from '../../../commons/components/base-list/base-list';
import {ListDataSource, PageLog} from '../../../../shared/models';
import {BASE_LIST} from '../../../../shared/directives';

@Component({
  selector: 'app-pagelog-list',
  templateUrl: './page-log-list.component.html',
  styleUrls: [
    '../../../commons/components/base-list/base-list.scss',
    '../../../commons/components/base-list/base-list-odd.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ListDataSource,
    {
      provide: BASE_LIST,
      useExisting: forwardRef(() => PageLogListComponent)
    }
  ]
})
export class PageLogListComponent extends BaseListComponent<PageLog> {

  @Input()
  multiSelect = false;

  displayedColumns: string[] = ['uri', 'nrOfResources', 'nrOfOutlinks', 'extra', 'action'];

  constructor() {
    super();
  }
}

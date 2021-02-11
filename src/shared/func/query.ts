import {Kind} from '../models/config';
import {SortDirection} from '@angular/material/sort';

export interface Page {
  pageSize: number;
  pageIndex: number;
}

export interface Sort {
  active: string;
  direction: SortDirection;
}

export interface Watch {
  watch: boolean;
}

export interface Detail extends Watch {
  id: string;
}

export interface State {
  state: number;
}

export interface ConfigQuery extends Sort, Page {
  kind: Kind;
  idList: string[];
  entityId: string;
  scheduleId: string;
  crawlConfigId: string;
  collectionId: string;
  browserConfigId: string;
  politenessId: string;
  disabled: boolean;
  crawlJobIdList: string[];
  scriptIdList: string[];
  term: string;
}

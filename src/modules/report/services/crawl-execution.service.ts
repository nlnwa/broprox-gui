import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {CrawlExecutionsListRequest, FieldMask} from '../../../api';
import {ConfigObject, ConfigRef, CrawlExecutionState, CrawlExecutionStatus, Kind} from '../../../shared/models';
import {ReportApiService} from '../../core/services';
import {ConfigService} from '../../commons/services';
import {tap} from 'rxjs/operators';
import {DetailQuery, Page, Sort, toTimestampProto, WatchQuery} from '../../../shared/func';
import {LoadingService} from '../../../shared/services';
import {Getter, Searcher} from '../../../shared/directives';

export interface CrawlExecutionStatusQuery extends Page, Sort, WatchQuery {
  jobId: string;
  seedId: string;
  stateList: CrawlExecutionState[];
  hasError: boolean;
  startTimeTo: string;
  startTimeFrom: string;
}

@Injectable()
export class CrawlExecutionService extends LoadingService
  implements Searcher<CrawlExecutionStatusQuery, CrawlExecutionStatus>, Getter<CrawlExecutionStatus> {
  private readonly cache: Map<string, ConfigObject>;

  constructor(private reportApiService: ReportApiService,
              private configService: ConfigService) {
    super();
    this.cache = new Map();
  }

  get(query: DetailQuery & WatchQuery): Observable<CrawlExecutionStatus> {
    return this.load(this.reportApiService.listCrawlExecutions(this.getRequest(query)));
  }

  getSeed(id: string): Observable<ConfigObject> {
    const configRef = new ConfigRef({id, kind: Kind.SEED});
    return this.cache.has(id) ? of(this.cache.get(id)) : this.configService.get(configRef).pipe(
      tap(configObject => this.cache.set(id, configObject)),
    );
  }

  search(query: CrawlExecutionStatusQuery): Observable<CrawlExecutionStatus> {
    return this.load(this.reportApiService.listCrawlExecutions(this.getListRequest(query)));
  }

  private getRequest(query: DetailQuery & WatchQuery): CrawlExecutionsListRequest {
    if (!query.id) {
      return null;
    }
    const listRequest = new CrawlExecutionsListRequest();
    listRequest.addId(query.id);
    listRequest.setWatch(query.watch);
    return listRequest;
  }

  private getListRequest(query: CrawlExecutionStatusQuery): CrawlExecutionsListRequest {
    const listRequest = new CrawlExecutionsListRequest();
    const queryTemplate = new CrawlExecutionStatus();
    const fieldMask = new FieldMask();

    listRequest.setOffset(query.pageIndex * query.pageSize);
    listRequest.setPageSize(query.pageSize);

    if (query.jobId) {
      queryTemplate.jobId = query.jobId;
      fieldMask.addPaths('jobId');
    }

    if (query.seedId) {
      queryTemplate.seedId = query.seedId;
      fieldMask.addPaths('seedId');
    }

    if (fieldMask.getPathsList().length > 0) {
      listRequest.setQueryTemplate(CrawlExecutionStatus.toProto(queryTemplate));
      listRequest.setQueryMask(fieldMask);
    }

    if (query.hasError) {
      listRequest.setHasError(query.hasError);
    }

    if (query.startTimeTo) {
      listRequest.setStartTimeTo(toTimestampProto(query.startTimeTo));
    }

    if (query.startTimeFrom) {
      listRequest.setStartTimeFrom(toTimestampProto(query.startTimeFrom));
    }

    if (query.stateList.length) {
      listRequest.setStateList(query.stateList.map(state => state.valueOf()));
    }

    if (query.watch) {
      listRequest.setWatch(query.watch);
    }

    if (query.direction) {
      listRequest.setOrderByPath(query.active);
      listRequest.setOrderDescending(query.direction === 'desc');
    }

    return listRequest;
  }
}

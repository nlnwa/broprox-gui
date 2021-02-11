import {Injectable} from '@angular/core';
import {EMPTY, from, Observable, Observer, of} from 'rxjs';
import {catchError, defaultIfEmpty, first, map} from 'rxjs/operators';

import {AuthService} from '../auth';
import {AppConfigService} from '../app.config.service';
import {ErrorService} from '../error.service';
import {
  CrawlExecutionsListRequest,
  CrawlExecutionStatusProto,
  CrawlLogListRequest,
  CrawlLogProto,
  FieldMask,
  JobExecutionsListRequest,
  JobExecutionStatusProto,
  PageLogListRequest,
  PageLogProto,
  ReportPromiseClient
} from '../../../../api';
import {CrawlExecutionStatus, CrawlLog, JobExecutionStatus, PageLog} from '../../../../shared/models';


@Injectable({
  providedIn: 'root'
})
export class ReportApiService {

  private reportClient: ReportPromiseClient;

  constructor(private authService: AuthService,
              appConfigService: AppConfigService,
              private errorService: ErrorService) {
    this.reportClient = new ReportPromiseClient(appConfigService.grpcWebUrl, null, null);
  }

  listJobExecutions(listRequest: JobExecutionsListRequest): Observable<JobExecutionStatus> {
    const metadata = this.authService.metadata;
    return new Observable((observer: Observer<JobExecutionStatusProto>) => {
      const stream = this.reportClient.listJobExecutions(listRequest, metadata)
        .on('data', data => observer.next(data))
        .on('error', error => observer.error(error))
        .on('end', () => observer.complete());
      return () => stream.cancel();
    }).pipe(
      map(JobExecutionStatus.fromProto),
      catchError(error => {
        this.errorService.dispatch(error);
        return EMPTY;
      })
    );
  }

  listCrawlExecutions(listRequest: CrawlExecutionsListRequest): Observable<CrawlExecutionStatus> {
    const metadata = this.authService.metadata;

    return new Observable((observer: Observer<CrawlExecutionStatusProto>) => {
      const stream = this.reportClient.listExecutions(listRequest, metadata)
        .on('data', data => observer.next(data))
        .on('error', error => observer.error(error))
        .on('end', () => observer.complete());
      return () => stream.cancel();
    }).pipe(
      map(CrawlExecutionStatus.fromProto),
      catchError(error => {
        this.errorService.dispatch(error);
        return EMPTY;
      })
    );
  }

  countPageLogs(listRequest: PageLogListRequest): Observable<number> {
    const metadata = this.authService.metadata;

    return from(this.reportClient.countPageLogs(listRequest, metadata))
      .pipe(
        map(listCountResponse => listCountResponse.getCount()),
        first(),
        catchError(error => {
          this.errorService.dispatch(error);
          return EMPTY;
        })
      );
  }

  listPageLogs(listRequest: PageLogListRequest): Observable<PageLog> {
    const metadata = this.authService.metadata;

    return new Observable((observer: Observer<PageLogProto>) => {
      const stream = this.reportClient.listPageLogs(listRequest, metadata)
        .on('data', data => observer.next(data))
        .on('error', error => observer.error(error))
        .on('end', () => observer.complete());
      return () => stream.cancel();
    }).pipe(
      map(PageLog.fromProto),
      catchError(error => {
        this.errorService.dispatch(error);
        return EMPTY;
      })
    );
  }


  listCrawlLogs(listRequest: CrawlLogListRequest): Observable<CrawlLog> {
    const metadata = this.authService.metadata;

    return new Observable((observer: Observer<CrawlLogProto>) => {
      const stream = this.reportClient.listCrawlLogs(listRequest, metadata)
        .on('data', data => observer.next(data))
        .on('error', error => observer.error(error))
        .on('end', () => observer.complete());
      return () => stream.cancel();
    }).pipe(
      map(CrawlLog.fromProto),
      catchError(error => {
        this.errorService.dispatch(error);
        return EMPTY;
      })
    );
  }

  getLastJobStatus(jobId: string): Observable<JobExecutionStatus> {
    const request = new JobExecutionsListRequest();

    const template = new JobExecutionStatus();
    const mask = new FieldMask();

    mask.addPaths('jobId');
    template.jobId = jobId;
    request.setQueryMask(mask);
    request.setQueryTemplate(JobExecutionStatus.toProto(template));

    request.setOrderByPath('startTime');
    request.setOrderDescending(true);
    request.setPageSize(1);
    return this.listJobExecutions(request).pipe(defaultIfEmpty(null));
  }

  getLastSeedStatus(seedId: string, pageSize?: number): Observable<CrawlExecutionStatus> {
    const request = new CrawlExecutionsListRequest();

    const template = new CrawlExecutionStatus();
    const mask = new FieldMask();

    mask.addPaths('seedId');
    template.seedId = seedId;
    request.setQueryMask(mask);
    request.setQueryTemplate(CrawlExecutionStatus.toProto(template));
    request.setOrderByPath('startTime');
    request.setOrderDescending(true);
    if (pageSize) {
      request.setPageSize(pageSize);
    } else {
      request.setPageSize(1);
    }
    return this.listCrawlExecutions(request).pipe(defaultIfEmpty(null));
  }

  getJobStatus(jobId: string): Observable<JobExecutionStatus> {
    const request = new JobExecutionsListRequest();
    const template = new JobExecutionStatus();
    const mask = new FieldMask();

    mask.addPaths('jobId');
    template.jobId = jobId;
    request.setQueryMask(mask);
    request.setQueryTemplate(JobExecutionStatus.toProto(template));
    return this.listJobExecutions(request);
  }

  getSeedStatus(seedId: string): Observable<CrawlExecutionStatus> {
    const request = new CrawlExecutionsListRequest();
    const template = new CrawlExecutionStatus();
    const mask = new FieldMask();

    mask.addPaths('seedId');
    template.seedId = seedId;
    request.setQueryMask(mask);
    request.setQueryTemplate(CrawlExecutionStatus.toProto(template));
    return this.listCrawlExecutions(request);
  }
}

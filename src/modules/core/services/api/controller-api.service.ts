import {Injectable} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {Empty} from 'google-protobuf/google/protobuf/empty_pb';

import {ControllerPromiseClient} from '../../../../api';
import {AuthService} from '../auth';
import {AppConfigService} from '../app.config.service';
import {RunStatus} from '../../../../shared/models/controller';
import {Role} from '../../../../shared/models/config';
import {ExecutionId, RunCrawlReply, RunCrawlRequest} from '../../../../shared/models/controller/controller.model';
import {ApplicationErrorHandler} from '../error.handler';
import {CrawlExecutionStatus, JobExecutionStatus} from '../../../../shared/models/report';
import {CountResponse} from '../../../../shared/models/report/countresponse.model';


@Injectable({
  providedIn: 'root'
})
export class ControllerApiService {

  private controllerPromiseClient: ControllerPromiseClient;

  constructor(private authService: AuthService,
              private appConfig: AppConfigService,
              private errorHandler: ApplicationErrorHandler) {
    this.controllerPromiseClient = new ControllerPromiseClient(appConfig.grpcWebUrl, null, null);
  }

  getOpenIdConnectIssuer(): Promise<string> {
    return this.controllerPromiseClient.getOpenIdConnectIssuer(new Empty())
      .then(response => response.getOpenIdConnectIssuer());
  }

  getRolesForActiveUser(): Promise<Role[]> {
    return this.controllerPromiseClient.getRolesForActiveUser(new Empty(), this.authService.metadata)
      .then(roleList => roleList.getRoleList());
  }

  getRunStatus(): Observable<RunStatus> {
    return from(this.controllerPromiseClient.status(new Empty(), this.authService.metadata))
      .pipe(map(status => status.getRunstatus()));
  }

  pauseCrawler(): void {
    this.controllerPromiseClient.pauseCrawler(new Empty(), this.authService.metadata);
  }

  unpauseCrawler(): void {
    this.controllerPromiseClient.unPauseCrawler(new Empty(), this.authService.metadata);
  }

  runCrawl(request: RunCrawlRequest): Observable<RunCrawlReply> {
    return from(this.controllerPromiseClient.runCrawl(RunCrawlRequest.toProto(request), this.authService.metadata))
      .pipe(
        map(runCrawlReply => RunCrawlReply.fromProto(runCrawlReply)),
        catchError(error => {
          this.errorHandler.handleError(error);
          return of(null);
        })
      );
  }

  abortJobExecution(request: ExecutionId): Observable<JobExecutionStatus> {
    return from(this.controllerPromiseClient.abortJobExecution(ExecutionId.toProto(request), this.authService.metadata))
      .pipe(
        map(jobExecutionStaus => JobExecutionStatus.fromProto(jobExecutionStaus)),
        catchError(error => {
          this.errorHandler.handleError(error);
          return of(null);
        })
      );
  }

  abortCrawlExecution(request: ExecutionId): Observable<CrawlExecutionStatus> {
    return from(this.controllerPromiseClient.abortCrawlExecution(ExecutionId.toProto(request), this.authService.metadata))
      .pipe(
        map(crawlExecutionStatus => CrawlExecutionStatus.fromProto(crawlExecutionStatus)),
        catchError(error => {
          this.errorHandler.handleError(error);
          return of(null);
        })
      );
  }

  queueCountForCrawlExecution(request: ExecutionId): Observable<CountResponse> {
    return from(this.controllerPromiseClient.queueCountForCrawlExecution(ExecutionId.toProto(request), this.authService.metadata))
      .pipe(
        map(countResponse => CountResponse.fromProto(countResponse)),
        catchError(error => {
          this.errorHandler.handleError(error);
          return of(null);
        })
      );
  }
}

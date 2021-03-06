import {Component, OnInit} from '@angular/core';
import {merge, Observable, Subject, throwError, timer} from 'rxjs';
import {RunStatus} from '../../../../shared/models/controller';
import {catchError, mergeMap} from 'rxjs/operators';
import {ControllerApiService, ErrorService} from '../../../core/services';
import {CrawlerStatusDialogComponent} from '..';
import {MatDialog} from '@angular/material/dialog';
import {JobExecutionStatus} from '../../../../shared/models/report';
import {Health, HealthApiService} from '../../../core/services/api/health-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  updateRunStatus: Subject<void> = new Subject();
  updateHealthStatus: Subject<void> = new Subject();
  runStatus$: Observable<RunStatus>;
  runningCrawls$: Observable<JobExecutionStatus>;
  healthStatus: Health;
  healthStatus$: Observable<Health>;

  constructor(private errorService: ErrorService,
              private controllerApiService: ControllerApiService,
              private dialog: MatDialog,
              private healthApiService: HealthApiService) {
  }

  ngOnInit(): void {
    this.runStatus$ = merge(this.updateRunStatus, timer(0, 30000)).pipe(
      mergeMap(() => this.controllerApiService.getRunStatus()),
      catchError(error => {
        this.errorService.dispatch(error);
        return throwError(error);
      })
    );
    this.healthStatus$ = merge(this.updateHealthStatus, timer(0, 30000)).pipe(
      mergeMap(() => this.healthApiService.get()),
      catchError(error => {
        this.errorService.dispatch(error);
        return throwError(error);
      })
    );

    // this.showHealth();

  }

  onChangeRunStatus(shouldPause: boolean) {
    this.dialog.open(CrawlerStatusDialogComponent, {
      disableClose: true,
      autoFocus: true,
      data: {shouldPause}
    }).afterClosed().subscribe(changeStatus => {
      if (changeStatus) {
        if (shouldPause) {
          this.controllerApiService.pauseCrawler();
        } else {
          this.controllerApiService.unpauseCrawler();
        }
        this.updateRunStatus.next();
      }
    });
  }

  showHealth() {
    this.healthApiService.get()
      .subscribe((data: Health) => this.healthStatus = { ...data});
  }

}

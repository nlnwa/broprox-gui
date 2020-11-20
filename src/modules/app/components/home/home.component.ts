import {Component, OnInit} from '@angular/core';
import {merge, Observable, Subject, throwError, timer} from 'rxjs';
import {catchError, mergeMap} from 'rxjs/operators';
import {ControllerApiService, ErrorService} from '../../../core/services';
import {CrawlerStatusDialogComponent} from '..';
import {MatDialog} from '@angular/material/dialog';
import {JobExecutionStatus} from '../../../../shared/models/report';
import { CrawlerStatus } from 'src/shared/models/controller/controller.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  updateRunStatus: Subject<void> = new Subject();
  crawlerStatus$: Observable<CrawlerStatus>;
  runningCrawls$: Observable<JobExecutionStatus>;

  constructor(private errorService: ErrorService,
              private controllerApiService: ControllerApiService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.crawlerStatus$ = merge(this.updateRunStatus, timer(0, 30000)).pipe(
      mergeMap(() => this.controllerApiService.getCrawlerStatus()),
      catchError(error => {
        this.errorService.dispatch(error);
        return throwError(error);
      })
    );
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

}

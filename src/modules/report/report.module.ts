import {NgModule} from '@angular/core';

import {CommonsModule} from '../commons';
import {ConfigService} from '../commons/services';
import {ReportRoutingModule} from './routing';
import {
  CrawlExecutionComponent,
  CrawlLogComponent,
  JobExecutionComponent,
  PageLogComponent,
  ReportComponent,
  ReportNavigationListComponent,
} from './containers';
import {CrawlExecutionService, CrawlLogService, JobExecutionService, OptionsResolver, PageLogService} from './services';
import {
  CrawlExecutionDetailComponent,
  CrawlExecutionStatusComponent,
  CrawlExecutionStatusListComponent,
  CrawlExecutionStatusQueryComponent,
  CrawlLogListComponent,
  CrawlLogStatusComponent,
  JobExecutionStatusComponent,
  JobExecutionStatusListComponent,
  JobExecutionStatusQueryComponent,
  PageLogListComponent,
  PageLogStatusComponent,
  ResourceComponent,
} from './components';
import {JobNamePipe, SeedNamePipe} from './pipe';
import {
  QueryCrawlExecutionStatusDirective,
  QueryCrawlLogDirective,
  QueryJobExecutionStatusDirective,
  QueryPageLogDirective
} from './directives';
import {CrawlLogQueryComponent} from './components/crawl-log-query/crawl-log-query.component';
import {CrawlLogDetailComponent} from './containers/crawl-log-detail/crawl-log-detail.component';
import {PageLogQueryComponent} from './components/page-log-query/page-log-query.component';
import {JobExecutionDetailComponent} from './containers/job-execution-detail/job-execution-detail.component';
import {SedPipe} from './pipe/sed.pipe';
import {PageLogDetailComponent} from './containers/page-log-detail/page-log-detail.component';
import {AbortCrawlDialogComponent} from './components/abort-crawl-dialog/abort-crawl-dialog.component';
import {JobExecutionPreviewComponent} from './components/job-execution-preview/job-execution-preview.component';
import {ChartsModule} from 'ng2-charts';
import {CrawlExecutionPreviewComponent} from './components/crawl-execution-preview/crawl-execution-preview.component';
import {CrawlLogPreviewComponent} from './components/crawl-log-preview/crawl-log-preview.component';
import {AbilityModule} from '@casl/angular';
import {ExecutionQueueCountPipe} from './pipe/execution-queue-count.pipe';


@NgModule({
  declarations: [
    ReportComponent,
    ReportNavigationListComponent,
    JobExecutionComponent,
    JobExecutionStatusComponent,
    JobExecutionStatusListComponent,
    CrawlExecutionStatusComponent,
    CrawlExecutionStatusListComponent,
    CrawlExecutionComponent,
    CrawlExecutionDetailComponent,
    PageLogListComponent,
    PageLogComponent,
    PageLogStatusComponent,
    ResourceComponent,
    CrawlLogComponent,
    CrawlLogListComponent,
    CrawlLogStatusComponent,
    JobExecutionStatusQueryComponent,
    CrawlExecutionStatusQueryComponent,
    QueryCrawlExecutionStatusDirective,
    QueryCrawlLogDirective,
    CrawlLogQueryComponent,
    CrawlLogDetailComponent,
    QueryJobExecutionStatusDirective,
    JobNamePipe,
    SeedNamePipe,
    SedPipe,
    ExecutionQueueCountPipe,
    PageLogQueryComponent,
    QueryPageLogDirective,
    JobExecutionDetailComponent,
    PageLogDetailComponent,
    AbortCrawlDialogComponent,
    JobExecutionPreviewComponent,
    CrawlExecutionPreviewComponent,
    CrawlLogPreviewComponent,
  ],
  imports: [
    CommonsModule,
    ReportRoutingModule,
    ChartsModule,
    AbilityModule,
  ],
  exports: [
    JobNamePipe,
    SeedNamePipe
  ],
  providers: [
    JobExecutionService,
    CrawlExecutionService,
    OptionsResolver,
    ConfigService,
    PageLogService,
    CrawlLogService,
  ]
})
export class ReportModule {
}

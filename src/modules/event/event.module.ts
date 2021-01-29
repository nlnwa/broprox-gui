import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventComponent} from './containers/event/event.component';
import {EventRoutingModule} from './routing/event.routing.module';
import {EventListComponent} from './components/event-list/event-list.component';
import {CommonsModule} from '../commons';
import {EventQueryComponent} from './components/event-query/event-query.component';
import {QueryEventDirective} from './directives/query-event.directive';
import {EventPreviewComponent} from './components/event-preview/event-preview.component';
import {EventChangeComponent} from './components/event-change/event-change.component';
import {EventActivityComponent} from './components/event-activity/event-activity.component';
import {EventDetailsComponent} from './containers/event-details/event-details.component';
import {EventDialogComponent} from './components/event-dialog/event-dialog.component';


@NgModule({
  declarations: [
    EventComponent,
    EventListComponent,
    EventQueryComponent,
    QueryEventDirective,
    EventPreviewComponent,
    EventChangeComponent,
    EventActivityComponent,
    EventDetailsComponent,
    EventDialogComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    CommonsModule
  ],
  providers: []
})
export class EventModule {
}

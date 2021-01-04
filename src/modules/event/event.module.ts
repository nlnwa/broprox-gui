import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './containers/event/event.component';
import {EventRoutingModule} from './routing/event.routing.module';
import { EventListComponent } from './components/event-list/event-list.component';
import {CommonsModule} from '../commons';



@NgModule({
  declarations: [EventComponent, EventListComponent],
  imports: [
    CommonModule,
    EventRoutingModule,
    CommonsModule
  ],
  providers: [
  ]
})
export class EventModule { }

import {RouterModule, Routes} from '@angular/router';
import {EventComponent} from '../containers/event/event.component';
import {NgModule} from '@angular/core';
import {EventDetailsComponent} from '../containers/event-details/event-details.component';

const routes: Routes = [
  {
    path: '',
    component: EventComponent
  },
  {
    path: ':id',
    component: EventDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EventRoutingModule {
}

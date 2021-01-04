import {RouterModule, Routes} from '@angular/router';
import {EventComponent} from '../containers/event/event.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: EventComponent,
    resolve: {},
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EventRoutingModule {
}

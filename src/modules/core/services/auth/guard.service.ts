import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';

import {AuthService} from './auth.service';
import {Kind} from '../../../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  readonly Kind = Kind;

  constructor(public authService: AuthService) {
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    if (!this.authService.isLoggedIn) {
      this.authService.login(state.url);
    }

    const ability = this.authService.getAbility();
    const path = route.url.map(segment => segment.path);
    switch (path[0]) {
      case 'event':
        return of(ability.can('read', 'event'));
      case 'report':
        return of(ability.can('read', 'report'));
      case 'jobexecution' :
        return of(ability.can('read', 'jobexecution'));
      case 'crawlexecution':
        return of(ability.can('read', 'crawlexecution'));
      case 'pagelog':
        return of(ability.can('read', 'pagelog'));
      case 'crawllog':
        return of(ability.can('read', 'crawllog'));
      case 'logconfig':
        return of(ability.can('read', 'logconfig'));
      case 'config':
        return of(ability.can('read', 'configs'));
      case 'browserconfig':
        return of(ability.can('read', Kind[Kind.BROWSERCONFIG]));
      case 'browserscript':
        return of(ability.can('read', Kind[Kind.BROWSERSCRIPT]));
      case 'schedule':
        return of(ability.can('read', Kind[Kind.CRAWLSCHEDULECONFIG]));
      case 'collection':
        return of(ability.can('read', Kind[Kind.COLLECTION]));
      case 'crawlconfig':
        return of(ability.can('read', Kind[Kind.CRAWLCONFIG]));
      case 'crawljobs':
        return of(ability.can('read', Kind[Kind.CRAWLJOB]));
      case 'entity':
        return of(ability.can('read', Kind[Kind.CRAWLENTITY]));
      case 'seed':
        return of(ability.can('read', Kind[Kind.SEED]));
      case 'politenessconfig':
        return of(ability.can('read', Kind[Kind.POLITENESSCONFIG]));
      case 'crawlhostgroupconfig':
        return of(ability.can('read', Kind[Kind.CRAWLHOSTGROUPCONFIG]));
      case 'rolemapping':
        return of(ability.can('read', Kind[Kind.ROLEMAPPING]));
      default:
        return of(false);
    }
  }
}

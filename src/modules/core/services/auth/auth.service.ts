import {Injectable} from '@angular/core';
import {Metadata} from 'grpc-web';
import {OAuthService} from 'angular-oauth2-oidc';
import {Kind, Role} from '../../../../shared/models';
import {Ability, AbilityBuilder} from '@casl/ability';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly Kind = Kind;

  roles: Role[];

  constructor(private oauthService: OAuthService, private ability: Ability) {
    this.roles = [Role.ANY];
  }

  get groups(): string {
    const claims = this.oauthService.getIdentityClaims();
    // @ts-ignore
    return claims ? claims.groups : '';
  }

  get name(): string {
    const claims = this.oauthService.getIdentityClaims();
    // @ts-ignore
    return claims ? claims.name : '';
  }

  get email(): string {
    const claims = this.oauthService.getIdentityClaims();
    // @ts-ignore
    return claims ? claims.email : '';
  }

  get isLoggedIn(): boolean {
    return this.roles.some(role => role !== Role.ANY);
  }

  get requestedUri(): string {
    return decodeURIComponent(this.oauthService.state);
  }

  getAbility(): Ability {
    return this.ability;
  }

  canCreate(subject: Kind | string): boolean {
    if (typeof subject === 'string') {
      return this.ability.can('create', subject);
    } else {
      return this.ability.can('create', Kind[subject]);
    }
  }

  canUpdate(subject: Kind | string): boolean {
    if (typeof subject === 'string') {
      return this.ability.can('update', subject);
    } else {
      return this.ability.can('update', Kind[subject]);
    }
  }

  canDelete(subject: Kind | string): boolean {
    if (typeof subject === 'string') {
      return this.ability.can('delete', subject);
    } else {
      return this.ability.can('delete', Kind[subject]);
    }
  }

  canRead(subject: Kind | string): boolean {
    if (typeof subject === 'string') {
      return this.ability.can('read', subject);
    } else {
      return this.ability.can('read', Kind[subject]);
    }
  }

  canRunCrawl(kind: Kind): boolean {
    return this.ability.can('runCrawl', Kind[kind]);
  }

  canAbortCrawl(subject: string) {
    console.log('can abort: ', subject);
    console.log('canAbortCrawl; ', this.ability.can('abort', subject));
    return this.ability.can('abort', subject);
  }

  /**
   * @returns authorization header for API calls
   */
  get metadata(): Metadata {
    const idToken = this.oauthService.getIdToken();
    if (idToken) {
      return {authorization: 'Bearer ' + idToken};
    } else {
      return null;
    }
  }

  isAuthorized(roles: Role[]): boolean {
    for (const role of this.roles) {
      if (roles.includes(role)) {
        return true;
      }
    }
    return false;
  }

  isAdmin(): boolean {
    return this.roles.includes(Role.ADMIN);
  }

  isCurator(): boolean {
    return this.roles.includes(Role.CURATOR);
  }

  isReadonly(): boolean {
    return this.roles.includes(Role.READONLY);
  }

  isConsultant(): boolean {
    return this.roles.includes(Role.CONSULTANT);
  }

  isOperator(): boolean {
    return this.roles.includes(Role.OPERATOR);
  }

  isAnyUser(): boolean {
    return this.roles.includes(Role.ANY_USER);
  }

  login(redirectUrl?: string) {
    this.oauthService.initLoginFlow(redirectUrl);
  }

  logout() {
    this.oauthService.logOut();
    this.roles = [Role.ANY];
    this.updateAbility();
  }

  updateAbility() {
    const {can, rules} = new AbilityBuilder<Ability>();

    const operatorConfigs = [Kind[Kind.CRAWLENTITY], Kind[Kind.SEED], Kind[Kind.CRAWLJOB], Kind[Kind.CRAWLCONFIG],
      Kind[Kind.CRAWLSCHEDULECONFIG], Kind[Kind.BROWSERCONFIG], Kind[Kind.POLITENESSCONFIG], Kind[Kind.BROWSERSCRIPT],
      Kind[Kind.CRAWLHOSTGROUPCONFIG], Kind[Kind.COLLECTION]];
    const curatorConfigs = [Kind[Kind.CRAWLENTITY], Kind[Kind.SEED], Kind[Kind.COLLECTION], Kind[Kind.CRAWLJOB], Kind[Kind.CRAWLCONFIG]];

    const reports = ['report', 'jobexecution', 'crawlexecution', 'pagelog', 'crawllog'];

    if (this.isAdmin()) {
      can('manage', 'all');
    }

    if (this.isOperator()) {
      can('read', reports);
      can(['read', 'update'], 'annotation');
      can('read', 'configs');
      can('read', 'status');
      can(['create', 'read', 'update', 'delete', 'updateAll'], operatorConfigs);
      can('runCrawl', [Kind[Kind.SEED], Kind[Kind.CRAWLJOB]]);
      can('abort', ['jobexecution']);
      can(['read', 'update'], 'logconfig');
    }

    if (this.isCurator()) {
      can(['create', 'read', 'update', 'delete', 'updateAll'], curatorConfigs);
      can(['read', 'update'], 'annotation');
      can('read', 'configs');
      can('read', reports);
    }

    if (this.isConsultant()) {
      can(['create', 'read', 'update', 'delete'], [Kind[Kind.CRAWLENTITY], Kind[Kind.SEED]]);
      can('read', 'configs');
      can('read', reports);
    } else {
      can('read', 'Home');
    }
    this.ability.update(rules);
  }
}

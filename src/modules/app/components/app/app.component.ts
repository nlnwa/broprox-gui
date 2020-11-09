import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterEvent} from '@angular/router';

import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {AppInitializerService, ControllerApiService, ErrorService, SnackBarService} from '../../../core/services/';
import {AuthService, GuardService} from '../../../core/services/auth';
import {MatDialog} from '@angular/material/dialog';
import {AboutDialogComponent} from '../about-dialog/about-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

  isModuleLoading$: Observable<boolean>;
  private moduleLoadSemaphore = 0;

  constructor(private appInitializer: AppInitializerService,
              private authService: AuthService,
              private controllerApiService: ControllerApiService,
              private router: Router,
              private route: ActivatedRoute,
              private guardService: GuardService,
              private snackBarService: SnackBarService,
              private dialog: MatDialog,
              private errorService: ErrorService) {
    this.isModuleLoading$ = this.router.events.pipe(
      filter(event => event instanceof RouteConfigLoadStart || event instanceof RouteConfigLoadEnd),
      map((event: RouterEvent) => {
        if (event instanceof RouteConfigLoadStart) {
          this.moduleLoadSemaphore++;
        } else if (event instanceof RouteConfigLoadEnd) {
          this.moduleLoadSemaphore--;
        }
        return this.moduleLoadSemaphore > 0;
      }),
    );
  }

  ngOnInit(): void {
    if (this.isLoggedIn && this.authService.requestedUri) {
      try {
        const url: URL = new URL(this.authService.requestedUri, 'http://localhost');
        const queryParams = {};
        // @ts-ignore
        for (const [key, value] of url.searchParams) {
          queryParams[key] = value;
        }
        const fragment = url.hash.substring(1) || null;
        const commands = url.pathname.split('/');
        this.router.navigate(commands, {queryParams, fragment, replaceUrl: true})
          .catch(e => this.errorService.dispatch(e));
      } catch (e) {
        this.errorService.dispatch(e);
      }
    }

  }

  get error(): Error {
    return this.appInitializer.error;
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get name(): string {
    return this.authService.name;
  }

  onLogin() {
    this.authService.login(this.route.snapshot.url.join('/'));
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/'], {relativeTo: this.route.root})
      .then(() => this.snackBarService.openSnackBar($localize`:@snackBarMessage.loggedOut:You are now logged out`));
  }

  onAbout() {
    this.dialog.open(AboutDialogComponent);
  }
}

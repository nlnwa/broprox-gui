import {ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, NavigationStart, Router, RouterEvent} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

import {combineLatest, merge, Observable, of, Subject} from 'rxjs';
import {distinctUntilChanged, filter, map, switchMap, takeUntil, tap} from 'rxjs/operators';

import {
  BrowserScriptType,
  ConfigObject,
  ConfigRef,
  Kind,
  RobotsPolicy,
  Role,
  RotationPolicy,
  Seed,
  SubCollectionType
} from '../../../../shared/models';
import {AuthService, ControllerApiService, ErrorService, SnackBarService} from '../../../core';
import {DeleteDialogComponent, Parcel} from '../../components';
import {KindService, OptionsService} from '../../services';
import {RunCrawlDialogComponent} from '../../components/run-crawl-dialog/run-crawl-dialog.component';
import {RunningCrawlDialogComponent} from '../../components/running-crawl-dialog/running-crawl-dialog.component';
import {ConfigService} from '../../../commons/services';
import {ConfigQuery} from '../../../../shared/func';
import {ConfigDialogData, dialogByKind} from '../../func';

export interface ConfigOptions {
  rotationPolicies?: RotationPolicy[];
  subCollectionTypes?: SubCollectionType[];
  crawlConfigs?: ConfigObject[];
  crawlScheduleConfigs?: ConfigObject[];
  browserConfigs?: ConfigObject[];
  collections?: ConfigObject[];
  politenessConfigs?: ConfigObject[];
  browserScripts?: ConfigObject[];
  scopeScripts?: ConfigObject[];
  browserScriptTypes?: BrowserScriptType[];
  robotsPolicies?: RobotsPolicy[];
  crawlJobs?: ConfigObject[];
  roles?: Role[];
}

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigurationComponent implements OnDestroy {
  readonly Kind = Kind;

  private ngUnsubscribe = new Subject();

  private configObject: Subject<ConfigObject>;
  configObject$: Observable<ConfigObject>;

  query$: Observable<ConfigQuery>;

  private reload: Subject<void>;

  entity$: Observable<ConfigObject>;

  fetchConfigObject = true;

  showCreateButton$: Observable<boolean>;

  kind: Kind;
  kind$: Observable<Kind>;

  options: ConfigOptions;
  options$: Observable<ConfigOptions>;

  constructor(private authService: AuthService,
              private dataService: ConfigService,
              private snackBarService: SnackBarService,
              private errorService: ErrorService,
              private router: Router,
              private dialog: MatDialog,
              private route: ActivatedRoute,
              private kindService: KindService,
              private optionsService: OptionsService,
              private controllerApiService: ControllerApiService) {
    this.configObject = new Subject();

    this.options$ = this.optionsService.options$.pipe(
      tap(options => {
        this.options = options;
      }),
    );

    this.kind$ = this.kindService.kind$.pipe(
      tap(kind => this.kind = kind)
    );

    const id$: Observable<string> = route.paramMap.pipe(
      map(paramMap => paramMap.get('id')),
      distinctUntilChanged()
    );


    // configObject stream based on kind and id
    const configRef$: Observable<ConfigRef> = combineLatest([
      this.kind$,
      id$.pipe(
        // toggle id stream on/off based on passId token
        // (e.g. when saving a configObject we don't want to
        // refetch configObject when we set query parameter id -
        // we already got it in the response from the call to save)
        filter(() => {
          if (this.fetchConfigObject) {
            return true;
          } else {
            this.fetchConfigObject = !this.fetchConfigObject;
            return false;
          }
        })),
    ]).pipe(
      map(([kind, id]) => new ConfigRef({kind, id})),
    );

    const configObject$: Observable<ConfigObject> = configRef$.pipe(
      switchMap(configRef =>
        configRef && configRef.id ? this.dataService.get(configRef) : of(null))
    );

    this.configObject$ = merge(this.configObject.asObservable(), configObject$);
  }

  get loading$(): Observable<boolean> {
    return this.dataService.loading$;
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onCreateSeedFromEntity(entity: ConfigObject) {
    const entityRef = ConfigObject.toConfigRef(entity);
    const configObject = new ConfigObject({kind: Kind.SEED, seed: new Seed({entityRef})});

    this.onCreateConfigWithDialog(configObject);
  }

  onCreateConfigWithDialog(configObject: ConfigObject) {
    if (configObject) {

      const data: ConfigDialogData = {configObject, options: this.options};
      const componentType = dialogByKind(configObject.kind);
      const dialogRef = this.dialog.open(componentType, {data});

      if (configObject.kind === Kind.SEED) {
        const move = dialogRef.componentInstance.move.subscribe((parcel: Parcel) => {
          this.onMoveSeed(parcel);
          move.unsubscribe();
        });
      }

      this.router.events.pipe(
        filter((event: RouterEvent) => event instanceof NavigationStart),
        tap(() => this.dialog.closeAll())
      ).subscribe();

      dialogRef.afterClosed().pipe(
        filter(_ => !!_)
      ).subscribe((config: ConfigObject) => {
        if (config.id) {
          this.onUpdateConfig(config);
        } else {
          this.onSaveConfig(config);
        }
      });
    }
  }

  onClone(configObject: ConfigObject) {
    this.onCreateConfigWithDialog(ConfigObject.clone(configObject));
  }

  onSaveConfig(configObject: ConfigObject) {
    this.dataService.save(configObject)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(newConfig => {
        this.configObject.next(newConfig);
        this.fetchConfigObject = false;
        this.router.navigate([], {
          queryParamsHandling: 'merge',
          queryParams: {id: newConfig.id},
          relativeTo: this.route,
        })
          .catch(error => this.errorService.dispatch(error));
        this.snackBarService.openSnackBar($localize`:@snackBarMessage.saved:Saved`);
      });
  }

  onUpdateConfig(configObject: ConfigObject) {
    this.dataService.update(configObject)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(newConfig => {
        this.configObject.next(newConfig);
        this.snackBarService.openSnackBar($localize`:@snackBarMessage.updated:Updated`);
      });
  }


  onDeleteConfig(configObject: ConfigObject) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      disableClose: true,
      autoFocus: true,
      data: {configObject},
    });

    dialogRef.afterClosed()
      .pipe(
        filter(result => !!result),
        switchMap(() => this.dataService.delete(configObject)),
        filter(deleted => !!deleted)
      )
      .subscribe(() => {
        this.router.navigate(['../'], {
          relativeTo: this.route,
        }).catch(error => this.errorService.dispatch(error));
        this.snackBarService.openSnackBar($localize`:@snackBarMessage.deleted:Deleted`);
      });
  }

  onSaveMultipleSeeds(configObjects: ConfigObject[]) {
    this.dataService.saveMultiple(configObjects)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(saved => {
        this.snackBarService.openSnackBar(saved + $localize`:@snackBarMessage.multipleSaved: configurations saved`);
        this.configObject.next(null);
        this.reload.next();
      });
  }

  onMoveSeed(parcel: Parcel) {
    (Array.isArray(parcel.seed)
      ? this.dataService.moveMultiple(parcel.seed, parcel.entityRef)
      : this.dataService.move(parcel.seed, parcel.entityRef))
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(moved => {
        this.snackBarService.openSnackBar(moved + $localize`:@snackBarMessage.multipleMoved: configurations moved`);
      });
  }

  onRunCrawl(configObject: ConfigObject) {
    const crawlJobs = this.options.crawlJobs;
    const dialogRef = this.dialog.open(RunCrawlDialogComponent, {
      disableClose: true,
      autoFocus: true,
      data: {configObject, jobRefId: null, crawlJobs}
    });
    dialogRef.afterClosed()
      .subscribe(runCrawlRequest => {
        if (runCrawlRequest) {
          this.controllerApiService.runCrawl(runCrawlRequest)
            .pipe(filter(_ => !!_))
            .subscribe(runCrawlReply => {
              const dialogReference = this.dialog.open(RunningCrawlDialogComponent, {
                disableClose: false,
                autoFocus: true,
                data: {runCrawlRequest, runCrawlReply, configObject}
              });
            });
        }
      });
  }
}





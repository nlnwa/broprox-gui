import {DataSource, SelectionModel} from '@angular/cdk/collections';
import {
  ContentChildren,
  Directive,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {MatSort, MatSortHeader, Sort, SortDirection} from '@angular/material/sort';
import {first, map, shareReplay} from 'rxjs/operators';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {ActionDirective, ExtraDirective, FilterDirective, ShortcutDirective} from '../../directives';
import {ListItem} from '../../../../shared/models';


@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class BaseListComponent<T extends ListItem> implements OnChanges {

  length$: BehaviorSubject<number>;

  @Input()
  set length(length: number) {
    this.length$.next(length);
  }

  @Input()
  pageSize = 25;

  @Input()
  pageIndex = 0;

  @Input()
  pageOptions = [5, 10, 25, 50, 100];

  @Input()
  sortDirection: SortDirection = '';

  @Input()
  sortActive = 'name';

  @Input()
  displayedColumns: string[] = ['select', 'name', 'description', 'extra', 'action'];

  @Input()
  multiSelect = true;

  // tslint:disable-next-line:variable-name
  private _dataSource: DataSource<T>;

  @Input()
  set dataSource(dataSource: DataSource<T>) {
    this._dataSource = dataSource;
    this.isAllInPageSelected$ = combineLatest([
      this.selection.changed.asObservable(),
      dataSource.connect(null),
    ]).pipe(
      map(([_, rows]) =>
        rows.length === this.selection.selected.length && rows.length > 0),
      shareReplay(1)
    );
  }

  get dataSource(): DataSource<T> {
    return this._dataSource;
  }

  @Output()
  rowClick: EventEmitter<T>;

  @Output()
  selectedChange: EventEmitter<T[]>;

  @Output()
  selectAll: EventEmitter<void>;

  @Output()
  sort: EventEmitter<Sort>;

  @Output()
  page: EventEmitter<PageEvent>;

  @ViewChild(MatSort, {static: true}) matSort: MatSort;

  @ContentChildren(ActionDirective, {read: TemplateRef, descendants: true}) actionButtonTemplates;
  @ContentChildren(ExtraDirective, {read: TemplateRef, descendants: true}) extraTemplates;
  @ContentChildren(FilterDirective, {read: TemplateRef, descendants: true}) filterButtonTemplates;
  @ContentChildren(ShortcutDirective, {read: TemplateRef, descendants: true}) shortcutButtonTemplates;

  // selection of checked rows
  selection: SelectionModel<T>;
  allSelected: boolean;
  isAllInPageSelected$: Observable<boolean>;
  selectedRow: T;

  protected constructor() {
    this.sort = new EventEmitter<Sort>();
    this.selectedChange = new EventEmitter<T[]>();
    this.selectAll = new EventEmitter<void>();
    this.page = new EventEmitter<PageEvent>();
    this.rowClick = new EventEmitter<T>();
    this.selection = new SelectionModel<T>(true, []);
    this.allSelected = false;
    this.length$ = new BehaviorSubject<number>(0);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.sortDirection && changes.sortActive) {
      // ugly hack see https://github.com/angular/components/issues/10242 and https://github.com/angular/components/issues/10524
      const sortHeader = (this.matSort.sortables.get(this.sortActive) as MatSortHeader);
      if (sortHeader) {
        sortHeader._setAnimationTransitionState({toState: 'active'});
      }
    }
  }

  reset() {
    this.selection.clear();
    this.selectedRow = null;
    this.allSelected = false;
  }

  onSortChange(sort: Sort) {
    this.reset();
    this.sort.emit(sort);
  }

  onRowClick(item: T) {
    this.allSelected = false;
    this.selectedRow = this.selectedRow?.id === item.id ? null : item;
    this.rowClick.emit(this.selectedRow);
  }

  onMasterCheckboxToggle(checked: boolean) {
    this.selectedRow = null;
    this.allSelected = false;
    if (checked) {
      this.dataSource.connect(null)
        .pipe(first())
        .subscribe(rows => {
          this.selection.select(...rows);
          this.selectedChange.emit(this.selection.selected);
        });
    } else {
      this.selection.clear();
      this.selectedChange.emit(this.selection.selected);
    }
  }

  onCheckboxToggle(item: T) {
    this.selectedRow = null;
    this.allSelected = false;
    this.selection.toggle(item);
    this.selectedChange.emit(this.selection.selected);
  }

  onSelectAll() {
    this.allSelected = true;
    this.selectAll.emit();
  }

  onDeselectAll() {
    this.allSelected = false;
    this.onMasterCheckboxToggle(false);
  }

  onPage(pageEvent: PageEvent) {
    this.reset();
    this.page.emit(pageEvent);
  }

  isChecked(item: T): boolean {
    return this.selection.selected.find(selected => selected.id === item.id) !== undefined;
  }

  isSelected(item: T): boolean {
    return this.selectedRow ? this.selectedRow.id === item.id : false;
  }

  isDisabled(_: T): boolean {
    return false;
  }
}

import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ConfigObject, Label} from '../../../../shared/models';
import {BufferService} from '../../services';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class BufferComponent implements OnInit {
  label$: Observable<Label[]>;

  @Output() list: EventEmitter<ConfigObject[]>;

  constructor(private bufferService: BufferService) {
    this.list = new EventEmitter<ConfigObject[]>();
  }

  ngOnInit(): void {
    this.label$ = this.bufferService.changed.asObservable().pipe(
      tap(console.warn),
      map(_ => this.bufferService.selected
        .map(_ => _.meta.labelList)
        .reduce((acc, curr) => acc.concat(curr), [])),
      tap(console.warn));
  }

  onApply(): void {
    this.list.emit(this.bufferService.selected);
  }
}

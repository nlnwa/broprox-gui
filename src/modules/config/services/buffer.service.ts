import {Injectable} from '@angular/core';
import {ConfigObject} from '../../../shared/models/config';
import {SelectionModel} from '@angular/cdk/collections';

@Injectable()
export class BufferService extends SelectionModel<ConfigObject> {
  constructor() {
    super(true);
  }

  select(...values) {
    super.select(...values);
  }

  isSelected(value: ConfigObject): boolean {
    return this.selected.find(_ => _.id === value.id) !== undefined;
  }
}

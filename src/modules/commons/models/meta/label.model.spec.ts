import {async} from '@angular/core/testing';
import {Label} from './label.model';

fdescribe('Label', () => {
  beforeEach(async(() => {

  }));

  it('should create the model', async(() => {
    const label = new Label();

    expect(label).toBeTruthy();
  }));

});
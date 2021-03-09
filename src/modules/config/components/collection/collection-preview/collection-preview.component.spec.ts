import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CollectionPreviewComponent} from './collection-preview.component';
import {CommonsModule} from '../../../../commons';
import {ConfigObject, Kind} from '../../../../../shared/models/config';

describe('CollectionPreviewComponent', () => {
  let component: CollectionPreviewComponent;
  let fixture: ComponentFixture<CollectionPreviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CommonsModule],
      declarations: [ CollectionPreviewComponent ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionPreviewComponent);
    component = fixture.componentInstance;
    // FIXME: Unødvendig init?
    component.configObject = new ConfigObject({kind: Kind.COLLECTION});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


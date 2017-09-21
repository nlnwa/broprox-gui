import {Component, Input, OnChanges} from '@angular/core';
import {Entity} from '../entity';
import {EntityService} from '../entity.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MdSnackBar} from '@angular/material';
import {DateTime, Label} from '../../commons/';
import {ActivatedRoute, Router} from '@angular/router';
import {Seeds} from '../../seeds/seed';
import {SeedService} from '../../seeds/seeds.service';


@Component({
  selector: 'app-entity-details',
  templateUrl: './entity-details.component.html',
  styleUrls: ['./entity-details.component.css']
})
export class EntityDetailsComponent implements OnChanges {

  @Input()
  entity: Entity;
  entityForm: FormGroup;
  seeds = Seeds;
  getseedlist = [];

  public isCollapsedContent = true;
  public isCollapsedSeeds = true;


  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor(private entityService: EntityService,
              private seedService: SeedService,
              private route: ActivatedRoute,
              private mdSnackBar: MdSnackBar,
              private fb: FormBuilder,
              private router: Router,
              private convertTimestamp: DateTime) {
    this.createForm();
    this.getParams();
  }

  createForm() {
    this.entityForm = this.fb.group({
      id: {value: '', disabled: true},
      seedcount: '',
      meta: this.fb.group({
        name: ['', [Validators.required, Validators.minLength(1)]],
        description: '',
        created: this.fb.group({seconds: {value: '', disabled: true}}),
        created_by: {value: '', disabled: true},
        last_modified: this.fb.group({seconds: {value: '', disabled: true}}),
        last_modified_by: {value: '', disabled: true},
      }),
      seedlist: this.fb.array([]),
      label: this.fb.array([], Validators.minLength(1)),
    });
  }

  getParams() {
    this.route.params.subscribe(params => {
      if (params.entity == null) {
      } else {
        this.entityService.getEntity(params.entity).subscribe(entity => {
          this.entity = entity[0];
          this.ngOnChanges();
        })
      }
    });
  }

  ngOnChanges() {
    this.getSeedsOfEntity(this.entity.id);
    this.updateData(this.entity);
    setTimeout(() => {
      this.updateData(this.entity);
    }, 500);
  }

  getSeedsOfEntity(entity_id) {
    if (entity_id) {
      this.seedService.getSeedsOfEntity(entity_id).map(seeds => seeds).forEach((seed) => {
        this.entityForm.controls['seedcount'].setValue(seed.count);
        seed.value.forEach((key) => {
          this.getseedlist.push({
            name: key.meta.name,
            id: key.id,
            label: key.meta.label,
            description: key.meta.description
          })
        });
      });
    }
  }

  updateData(entity: Entity) {
    this.entityForm.controls['id'].setValue(entity.id);
    this.entityForm.controls['meta'].patchValue({
      name: entity.meta.name,
      description: entity.meta.description,
      created: {
        seconds: this.convertTimestamp.convertFullTimestamp(entity.meta.created.seconds),
      },
      created_by: entity.meta.created_by,
      last_modified: {
        seconds: this.convertTimestamp.convertFullTimestamp(entity.meta.last_modified.seconds),
      },
      last_modified_by: entity.meta.last_modified_by,
    });
    this.setSeedlist(this.getseedlist);
    this.setLabel(this.entity.meta.label);


  }

  createEntity(entity) {
    this.entity = this.prepareSaveEntity();
    this.entityService.createEntity(this.entity)
      .map((newEntity: Entity) => {
        this.createHandler(newEntity);
      });
    this.mdSnackBar.open('Lagret');
  };


  updateEntity(entity: Entity): void {
    this.entity = this.prepareSaveEntity();
    this.entityService.updateEntity(this.entity)
      .map((updatedEntity: Entity) => {
        this.updateHandler(updatedEntity);
      });
    this.mdSnackBar.open('Lagret');
  }

  deleteEntity(): void {
    this.entityService.deleteEntity(this.entity.id)
      .map((deletedEntity) => {
        this.deleteHandler(deletedEntity);
        if (deletedEntity === 'not_allowed') {
          this.mdSnackBar.open('Feil: Ikke slettet');
        } else {
          this.mdSnackBar.open('Slettet');
        }
      });
  }


  setSeedlist(seedlist) {
    this.getseedlist = [];
    const seedlistFG = seedlist.map(sl => (this.fb.group(sl)));
    const seedlistFormArray = this.fb.array(seedlistFG);
    this.entityForm.setControl('seedlist', seedlistFormArray);
  }

  get seedlist(): FormArray {
    return this.entityForm.get('seedlist') as FormArray;
  };


  setLabel(label) {
    const labelFGs = label.map(l => (this.fb.group(l)));
    const labelFormArray = this.fb.array(labelFGs);
    this.entityForm.setControl('label', labelFormArray);
  }

  get label(): FormArray {
    return this.entityForm.get('label') as FormArray;
  };

  initLabel() {
    return this.fb.group({
      key: ['', [Validators.required, Validators.minLength(1)]],
      value: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  addLabel() {
    const control = <FormArray>this.entityForm.controls['label'];
    control.push(this.initLabel());
  }

  removeLabel(i: number) {
    const control = <FormArray>this.entityForm.controls['label'];
    control.removeAt(i);
  }

  revert() {
    this.ngOnChanges();
    this.mdSnackBar.open('Tilbakestilt');
  }

  prepareSaveEntity(): Entity {

    const formModel = this.entityForm.value;
    // deep copy of form model lairs
    const labelsDeepCopy: Label[] = formModel.label.map(
      (label: Label) => Object.assign({}, label)
    );

    // return new `Hero` object containing a combination of original hero value(s)
    // and deep copies of changed form model values
    const saveEntity: Entity = {
      id: this.entity.id,
      meta: {
        name: formModel.meta.name as string,
        description: formModel.meta.description as string,
        // created: '',
        // created_by: '',
        // last_modified: null,
        // last_modified_by: '',
        label: labelsDeepCopy
      }
    };
    return saveEntity;
  }

  goToSeed(seed_id) {
    this.router.navigate(['/seeds/', seed_id])
  }
}

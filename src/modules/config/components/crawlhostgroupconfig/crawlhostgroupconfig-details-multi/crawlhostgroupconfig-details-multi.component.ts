import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AbstractControl, FormBuilder} from '@angular/forms';
import {AuthService} from '../../../../core/services/auth';
import {ConfigObject, Kind} from '../../../../../shared/models';
import {CrawlHostGroupConfigDetailsComponent} from '../crawlhostgroupconfig-details/crawlhostgroupconfig-details.component';

@Component({
  selector: 'app-crawlhostgroupconfig-details-multi',
  templateUrl: './crawlhostgroupconfig-details-multi.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrawlHostGroupConfigDetailsMultiComponent extends CrawlHostGroupConfigDetailsComponent {

  shouldAddLabel = undefined;
  allSelected = false;

  constructor(protected fb: FormBuilder,
              protected authService: AuthService) {
    super(fb, authService);
  }

  get labelList(): AbstractControl {
    return this.form.get('labelList');
  }

  get canUpdate(): boolean {
    return this.form.valid && this.shouldAddLabel !== undefined;
  }

  get canRevert(): boolean {
    return this.form.dirty || this.shouldAddLabel !== undefined;
  }

  onToggleShouldAddLabels(shouldAdd: boolean) {
    this.shouldAddLabel = shouldAdd;
    if (shouldAdd !== undefined) {
      this.labelList.enable();
    }
  }

  protected createForm() {
    this.form = this.fb.group({
      labelList: {value: []}
    });
  }

  protected updateForm() {
    this.form.setValue({
      labelList: this.configObject.meta.labelList
    });
    this.form.markAsPristine();
    this.form.markAsUntouched();
    this.labelList.disable();
    if (!this.canEdit) {
      this.form.disable();
    }
  }

  protected prepareSave(): any {
    const formModel = this.form.value;
    const pathList: string[] = [];
    const updateTemplate = new ConfigObject({
      kind: Kind.CRAWLHOSTGROUPCONFIG,
    });

    if (this.labelList.value.length && this.shouldAddLabel !== undefined) {
      updateTemplate.meta.labelList = formModel.labelList;
      if (this.shouldAddLabel) {
        pathList.push('meta.label+');
      } else {
        pathList.push('meta.label-');
      }
    }

    return {updateTemplate, pathList};
  }
}


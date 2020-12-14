import {Pipe, PipeTransform} from '@angular/core';
import {ConfigService} from '../../commons/services';
import {Annotation} from '../../../shared/models/config';
import {Observable} from 'rxjs';


@Pipe({
  name: 'getScriptAnnotations'
})
export class ScriptAnnotationsPipe implements PipeTransform {
  constructor(private configService: ConfigService) {
  }

  transform(jobId: string, seedId?: string): Observable<Annotation[]> {
    return this.configService.getScriptAnnotations(jobId, seedId);
  }
}

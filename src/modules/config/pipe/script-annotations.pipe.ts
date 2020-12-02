import {Pipe, PipeTransform} from '@angular/core';
import {ConfigService} from '../../commons/services';
import {Annotation} from '../../../shared/models/config';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';


@Pipe({
  name: 'getScriptAnnotations'
})
export class ScriptAnnotationsPipe implements PipeTransform {
  constructor(private configService: ConfigService) {
  }

  transform(jobId: string, seedId?: string): Observable<Annotation[]> {
    console.log('script pipe with: ', jobId, seedId);

    return this.configService.getScriptAnnotations(jobId, seedId);
  }
}

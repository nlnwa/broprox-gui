import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {CrudService} from '../commons/crud.service';
import {Role, RoleMapping} from '../commons/models/config.model';
import {Injectable} from '@angular/core';

@Injectable()
export class RoleMappingService extends CrudService<RoleMapping> {

 static readonly URL: string = `${environment.apiGateway}/rolemappings`;
 constructor(protected http: HttpClient) {
    super(http, RoleMappingService.URL);
  }

  getRoles(): Observable<string[]> {
   return Observable.of(Object.keys(Role));
  }

}

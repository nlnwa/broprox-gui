import {Injectable} from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';
import {AppConfigService} from '../../core';
import {ConfigPromiseClient} from '../../../api';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private configPromiseClient: ConfigPromiseClient;

  constructor(private ouauthService: OAuthService,
              private appConfig: AppConfigService) {
    this.configPromiseClient = new ConfigPromiseClient(appConfig.grpcWebUrl, null, null);
  }

  getEvent(){}
}

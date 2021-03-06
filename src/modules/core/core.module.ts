import {APP_INITIALIZER, ErrorHandler, LOCALE_ID, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {registerLocaleData} from '@angular/common';

import localeNbExtra from '@angular/common/locales/extra/nb';
import localeNb from '@angular/common/locales/nb';

import {OAuthModule, OAuthService, ValidationHandler} from 'angular-oauth2-oidc';
import {JwksValidationHandler} from 'angular-oauth2-oidc-jwks';
import {CommonsModule} from '../commons/commons.module';

import {
  AppConfigService,
  AppInitializerService,
  ApplicationErrorHandler,
  AuthService,
  ControllerApiService,
  TokenInterceptor,
} from './services';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';

registerLocaleData(localeNb, 'nb', localeNbExtra);

@NgModule({
  imports: [
    CommonsModule,
    OAuthModule.forRoot(),
  ],
  providers: [
    OAuthService,
    {provide: ValidationHandler, useClass: JwksValidationHandler},
    {
      provide: APP_INITIALIZER,
      useFactory: (appInitializerService: AppInitializerService) => () => appInitializerService.init(),
      deps: [AppInitializerService, AppConfigService, OAuthService, ControllerApiService, AuthService],
      multi: true
    },
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: ErrorHandler, useClass: ApplicationErrorHandler},
    {provide: LOCALE_ID, useValue: 'nb'},
    {provide: MAT_DATE_LOCALE, useValue: 'nb-NO'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class CoreModule {
}

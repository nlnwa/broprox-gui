import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {count, mergeMap} from 'rxjs/operators';

import {FieldMask, GetScriptAnnotationsRequest, ListRequest, UpdateRequest} from '../../../api';
import {
  Annotation,
  BrowserConfig,
  ConfigObject,
  ConfigRef,
  CrawlConfig,
  CrawlJob,
  Kind,
  Label,
  RoleMapping,
  Seed
} from '../../../shared/models';
import {LoadingService} from '../../../shared/services';
import {ConfigApiService} from '../../core/services';
import {ConfigQuery, escapeRegex} from '../../../shared/func';
import {Getter, Searcher} from '../../../shared/directives';


@Injectable()
export class ConfigService
  extends LoadingService
  implements Searcher<ConfigQuery, ConfigObject>, Getter<ConfigObject> {

  // The listRequest last used to fetch data
  private effectiveListRequest: ListRequest;

  // private cache: Map<string, string>;

  constructor(private configApiService: ConfigApiService) {
    super();
  }

  get(configRef: ConfigRef): Observable<ConfigObject> {
    return this.load(this.configApiService.get(configRef));
  }

  search(query: ConfigQuery): Observable<ConfigObject> {
    const listRequest = this.getListRequest(query);
    this.effectiveListRequest = listRequest;

    return this.load(this.configApiService.list(listRequest));
  }

  count(query: ConfigQuery): Observable<number> {
    const listRequest = this.getListRequest(query);
    return this.configApiService.count(listRequest);
  }

  save(configObject: ConfigObject): Observable<ConfigObject> {
    return this.load(this.configApiService.save(configObject));
  }

  saveMultiple(configObjects: ConfigObject[]): Observable<number> {
    return this.load(from(configObjects).pipe(
      mergeMap(configObject => this.configApiService.save(configObject)),
      count()));
  }

  update(configObject: ConfigObject): Observable<ConfigObject> {
    return this.load(this.configApiService.save(configObject));
  }

  updateWithTemplate(updateTemplate: ConfigObject, paths: string[], ids: string[]): Observable<number> {
    let listRequest: ListRequest;

    if (ids.length > 0) {
      listRequest = new ListRequest();
      listRequest.setKind(updateTemplate.kind.valueOf());
      listRequest.setIdList(ids);
    } else {
      // use previous stored list request as basis
      // but set page size and offset to defaults because we want to update ALL requested objects
      listRequest = this.effectiveListRequest;
      listRequest.setPageSize(0);
      listRequest.setOffset(0);
    }

    const fieldMask = new FieldMask();
    fieldMask.setPathsList(paths);

    const updateRequest = new UpdateRequest();
    updateRequest.setListRequest(listRequest);
    updateRequest.setUpdateTemplate(ConfigObject.toProto(updateTemplate));
    updateRequest.setUpdateMask(fieldMask);

    return this.load(this.configApiService.update(updateRequest));
  }

  delete(configObject: ConfigObject): Observable<boolean> {
    return this.load(this.configApiService.delete(configObject));
  }

  deleteMultiple(configObjects: ConfigObject[]): Observable<number> {
    return this.load(from(configObjects).pipe(
      mergeMap((configObject) => this.configApiService.delete(configObject)),
      count(_ => _)
    ));
  }

  move(configObject: ConfigObject, entityRef: ConfigRef): Observable<number> {
    return this.load(this._move(configObject, entityRef));
  }

  moveMultiple(configObjects: ConfigObject[], entityRef: ConfigRef): Observable<number> {
    return this.load(from(configObjects).pipe(
      mergeMap(configObject => this._move(configObject, entityRef)),
      count(updated => !!updated)));
  }

  private _move(configObject: ConfigObject, entityRef: ConfigRef): Observable<number> {
    const refLabel = new Label({key: 'entityRef', value: configObject.seed.entityRef.id});
    const updateTemplate = new ConfigObject({kind: Kind.SEED});
    updateTemplate.meta.labelList = [refLabel];
    updateTemplate.seed.entityRef = entityRef;
    const pathList = ['seed.entityRef', 'meta.label+'];

    return this.updateWithTemplate(updateTemplate, pathList, [configObject.id]);
  }

  private getListRequest(query: ConfigQuery): ListRequest {
    const listRequest = new ListRequest();
    listRequest.setKind(query.kind.valueOf());

    listRequest.setOffset(query.pageIndex * query.pageSize);
    listRequest.setPageSize(query.pageSize);

    const queryTemplate = new ConfigObject();
    const fieldMask = new FieldMask();

    switch (query.kind) {
      case Kind.CRAWLJOB:
        queryTemplate.crawlJob = new CrawlJob();

        if (query.scheduleId) {
          fieldMask.addPaths('crawlJob.scheduleRef');
          queryTemplate.crawlJob.scheduleRef = new ConfigRef({id: query.scheduleId, kind: Kind.CRAWLSCHEDULECONFIG});
        }
        if (query.crawlConfigId) {
          fieldMask.addPaths('crawlJob.crawlConfigRef');
          queryTemplate.crawlJob.crawlConfigRef = new ConfigRef({id: query.crawlConfigId, kind: Kind.CRAWLCONFIG});
        }
        if (query.disabled) {
          fieldMask.addPaths('crawlJob.disabled');
          queryTemplate.crawlJob.disabled = query.disabled;
        }
        break;
      case Kind.CRAWLCONFIG:
        queryTemplate.crawlConfig = new CrawlConfig();

        if (query.collectionId) {
          fieldMask.addPaths('crawlConfig.collectionRef');
          queryTemplate.crawlConfig.collectionRef = new ConfigRef({id: query.collectionId, kind: Kind.COLLECTION});
        }
        if (query.browserConfigId) {
          fieldMask.addPaths('crawlConfig.browserConfigRef');
          queryTemplate.crawlConfig.browserConfigRef = new ConfigRef({
            id: query.browserConfigId,
            kind: Kind.BROWSERCONFIG
          });
        }
        if (query.politenessId) {
          fieldMask.addPaths('crawlConfig.politenessRef');
          queryTemplate.crawlConfig.politenessRef = new ConfigRef({
            id: query.politenessId,
            kind: Kind.POLITENESSCONFIG
          });
        }
        break;
      case Kind.BROWSERCONFIG:
        queryTemplate.browserConfig = new BrowserConfig();

        if (query.scriptIdList.length) {
          fieldMask.addPaths('browserConfig.scriptRef');
          queryTemplate.browserConfig.scriptRefList = query.scriptIdList.map(id => new ConfigRef({
            id,
            kind: Kind.BROWSERSCRIPT
          }));
        }
        break;
      case Kind.SEED:
        queryTemplate.seed = new Seed();

        if (query.entityId) {
          fieldMask.addPaths('seed.entityRef');
          queryTemplate.seed.entityRef = new ConfigRef({id: query.entityId, kind: Kind.CRAWLENTITY});
        }
        if (query.crawlJobIdList.length) {
          fieldMask.addPaths('seed.jobRef');
          queryTemplate.seed.jobRefList = query.crawlJobIdList.map(id => new ConfigRef({id, kind: Kind.CRAWLJOB}));
        }
        if (query.disabled) {
          fieldMask.addPaths('seed.disabled');
          queryTemplate.seed.disabled = query.disabled;
        }
        break;
      case Kind.ROLEMAPPING:
        if (query.term !== null) {
          queryTemplate.roleMapping = new RoleMapping();
          const name = query.term;

          // Search keywords
          // default (no keywords): roleMapping email
          // "group:" roleMapping group
          // "email:" roleMapping email
          if (name.startsWith('group:')) {
            queryTemplate.roleMapping.group = name.substring(name.indexOf(':') + 1);
            fieldMask.addPaths('roleMapping.group');
          } else {
            let email = name;
            if (name.startsWith('email:')) {
              email = name.substring(name.indexOf(':') + 1);
            }
            queryTemplate.roleMapping.email = email;
            fieldMask.addPaths('roleMapping.email');
          }
        }
        break;
    }

    if (fieldMask.getPathsList().length > 0) {
      listRequest.setQueryTemplate(ConfigObject.toProto(queryTemplate));
      listRequest.setQueryMask(fieldMask);
    }

    if (query.direction && query.active) {
      listRequest.setOrderByPath('meta.' + query.active);
      listRequest.setOrderDescending(query.direction === 'desc');
    }

    if (query.term !== null && query.kind !== Kind.ROLEMAPPING) {
      const parts = query.term.split('label:');

      const label = (parts[1] || '').trim();
      const name = parts[0].trim();

      if (label) {
        listRequest.setLabelSelectorList([label]);
      }

      if (name) {
        if (name.startsWith('regex:')) {
          const regex = name.substring(name.indexOf(':') + 1);
          listRequest.setNameRegex(regex);
        } else if (name.startsWith('"') && name.endsWith('"')) {
          const exact = '^' + escapeRegex(name.substring(1, name.length - 1)) + '$';
          listRequest.setNameRegex(exact);
        } else if (query.kind === Kind.SEED) {
          if (name.startsWith('.')) {
            const subDomainSearch = '^(?:https?://)?.*' + escapeRegex(name) + '/?';
            listRequest.setNameRegex(subDomainSearch);
          } else {
            const commonSearch = '^(?:https?://)?(?:w{3}\.)?' + escapeRegex(name) + '/?';
            listRequest.setNameRegex(commonSearch);
          }
        } else {
          listRequest.setNameRegex(escapeRegex(name));
        }
      }
    }
    return listRequest;
  }

  getScriptAnnotations(jobId: string, seedId?: string): Observable<Annotation[]> {
    const request = new GetScriptAnnotationsRequest();
    if (jobId) {
      request.setJob(ConfigRef.toProto(new ConfigRef({kind: Kind.CRAWLJOB, id: jobId})));
      if (seedId) {
        request.setSeed(ConfigRef.toProto(new ConfigRef({kind: Kind.SEED, id: seedId})));
      }
      return this.configApiService.getScriptAnnotations(request);
    }
  }
}

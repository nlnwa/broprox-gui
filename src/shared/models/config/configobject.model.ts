import {ConfigObjectProto} from '../../../api';
import {intersectLabel} from '../../func/group-update/labels/common-labels';
import {Collection} from './collection.model';
import {CrawlEntity} from './crawlentity.model';
import {Seed} from './seed.model';
import {CrawlJob} from './crawljob.model';
import {CrawlConfig} from './crawlconfig.model';
import {CrawlScheduleConfig} from './crawlscheduleconfig.model';
import {BrowserConfig} from './browserconfig.model';
import {PolitenessConfig} from './politenessconfig.model';
import {BrowserScript} from './browserscript.model';
import {CrawlHostGroupConfig} from './crawlhostgroupconfig.model';
import {RoleMapping} from './rolemapping.model';
import {Kind} from './kind.model';
import {Meta} from './meta.model';
import {ConfigRef} from './configref.model';


export class ConfigObject {
  id: string;
  apiVersion: string;
  kind: Kind;
  meta: Meta;
  crawlEntity?: CrawlEntity;
  seed?: Seed;
  crawlJob?: CrawlJob;
  crawlConfig?: CrawlConfig;
  crawlScheduleConfig?: CrawlScheduleConfig;
  browserConfig?: BrowserConfig;
  politenessConfig?: PolitenessConfig;
  browserScript?: BrowserScript;
  crawlHostGroupConfig?: CrawlHostGroupConfig;
  roleMapping?: RoleMapping;
  collection?: Collection;

  constructor(configObject: Partial<ConfigObject> = {}) {
    this.id = configObject.id || '';
    this.apiVersion = configObject.apiVersion || 'v1';
    this.kind = configObject.kind || Kind.UNDEFINED;
    this.meta = new Meta(configObject.meta);

    switch (configObject.kind) {
      case Kind.UNDEFINED:
        break;
      case Kind.CRAWLENTITY:
        this.crawlEntity = new CrawlEntity();
        break;
      case Kind.SEED:
        this.seed = new Seed(configObject.seed);
        break;
      case Kind.CRAWLJOB:
        this.crawlJob = new CrawlJob(configObject.crawlJob);
        break;
      case Kind.CRAWLCONFIG:
        this.crawlConfig = new CrawlConfig(configObject.crawlConfig);
        break;
      case Kind.CRAWLSCHEDULECONFIG:
        this.crawlScheduleConfig = new CrawlScheduleConfig(configObject.crawlScheduleConfig);
        break;
      case Kind.BROWSERCONFIG:
        this.browserConfig = new BrowserConfig(configObject.browserConfig);
        break;
      case Kind.POLITENESSCONFIG:
        this.politenessConfig = new PolitenessConfig(configObject.politenessConfig);
        break;
      case Kind.BROWSERSCRIPT:
        this.browserScript = new BrowserScript(configObject.browserScript);
        break;
      case Kind.CRAWLHOSTGROUPCONFIG:
        this.crawlHostGroupConfig = new CrawlHostGroupConfig(configObject.crawlHostGroupConfig);
        break;
      case Kind.ROLEMAPPING:
        this.roleMapping = new RoleMapping(configObject.roleMapping);
        break;
      case Kind.COLLECTION:
        this.collection = new Collection(configObject.collection);
        break;
    }
  }

  static fromProto(proto: ConfigObjectProto): ConfigObject {
    const config = new ConfigObject({
      id: proto.getId(),
      apiVersion: proto.getApiversion(),
      kind: proto.getKind().valueOf(),
      meta: Meta.fromProto(proto.getMeta()),
    });
    if (proto.getCrawlEntity()) {
      config.crawlEntity = CrawlEntity.fromProto(proto.getCrawlEntity());

    } else if (proto.getSeed()) {
      config.seed = Seed.fromProto(proto.getSeed());

    } else if (proto.getCrawlJob()) {
      config.crawlJob = CrawlJob.fromProto(proto.getCrawlJob());

    } else if (proto.getCrawlConfig()) {
      config.crawlConfig = CrawlConfig.fromProto(proto.getCrawlConfig());

    } else if (proto.getCrawlScheduleConfig()) {
      config.crawlScheduleConfig = CrawlScheduleConfig.fromProto(proto.getCrawlScheduleConfig());

    } else if (proto.getBrowserConfig()) {
      config.browserConfig = BrowserConfig.fromProto(proto.getBrowserConfig());

    } else if (proto.getPolitenessConfig()) {
      config.politenessConfig = PolitenessConfig.fromProto(proto.getPolitenessConfig());

    } else if (proto.getBrowserScript()) {
      config.browserScript = BrowserScript.fromProto(proto.getBrowserScript());

    } else if (proto.getCrawlHostGroupConfig()) {
      config.crawlHostGroupConfig = CrawlHostGroupConfig.fromProto(proto.getCrawlHostGroupConfig());

    } else if (proto.getRoleMapping()) {
      config.roleMapping = RoleMapping.fromProto(proto.getRoleMapping());
    } else if (proto.getCollection()) {
      config.collection = Collection.fromProto(proto.getCollection());
    }
    return config;
  }

  static toProto(configObject: ConfigObject): ConfigObjectProto {
    const proto = new ConfigObjectProto();
    proto.setApiversion('v1');
    proto.setId(configObject.id);
    proto.setMeta(Meta.toProto(configObject.meta));
    proto.setKind(configObject.kind.valueOf());

    if (configObject.crawlEntity) {
      proto.setCrawlEntity(CrawlEntity.toProto(configObject.crawlEntity));
    } else if (configObject.seed) {
      proto.setSeed(Seed.toProto(configObject.seed));
    } else if (configObject.crawlJob) {
      proto.setCrawlJob(CrawlJob.toProto(configObject.crawlJob));
    } else if (configObject.crawlConfig) {
      proto.setCrawlConfig(CrawlConfig.toProto(configObject.crawlConfig));
    } else if (configObject.crawlScheduleConfig) {
      proto.setCrawlScheduleConfig(CrawlScheduleConfig.toProto(configObject.crawlScheduleConfig));
    } else if (configObject.browserConfig) {
      proto.setBrowserConfig(BrowserConfig.toProto(configObject.browserConfig));
    } else if (configObject.politenessConfig) {
      proto.setPolitenessConfig(PolitenessConfig.toProto(configObject.politenessConfig));
    } else if (configObject.browserScript) {
      proto.setBrowserScript(BrowserScript.toProto(configObject.browserScript));
    } else if (configObject.crawlHostGroupConfig) {
      proto.setCrawlHostGroupConfig(CrawlHostGroupConfig.toProto(configObject.crawlHostGroupConfig));
    } else if (configObject.roleMapping) {
      proto.setRoleMapping(RoleMapping.toProto(configObject.roleMapping));
    } else if (configObject.collection) {
      proto.setCollection(Collection.toProto(configObject.collection));
    }
    return proto;
  }

  static toConfigRef(configObject: ConfigObject): ConfigRef {
    return new ConfigRef({id: configObject.id, kind: configObject.kind});
  }

  static clone(configObject: ConfigObject): ConfigObject {
    const clone = new ConfigObject(configObject);
    clone.id = '';
    Object.assign(clone.meta, {created: '', createdBy: '', lastModified: '', lastModifiedBy: '', name: ''});
    return clone;
  }

  static mergeConfigs(configs: ConfigObject[]): ConfigObject {
    if (configs.length < 1) {
      return null;
    } else if (configs.length === 1) {
      return configs[0];
    }
    const configObject = new ConfigObject({kind: configs[0].kind});

    configObject.meta = new Meta();
    configObject.meta.labelList = configs.map(config => config.meta.labelList).reduce(intersectLabel);

    switch (configObject.kind) {
      case Kind.CRAWLENTITY:
        configObject.crawlEntity = CrawlEntity.mergeConfigs(configs);
        return configObject;
      case Kind.SEED:
        configObject.seed = Seed.merge(configs.map(config => config.seed));
        return configObject;
      case Kind.CRAWLJOB:
        configObject.crawlJob = CrawlJob.mergeConfigs(configs);
        return configObject;
      case Kind.CRAWLCONFIG:
        configObject.crawlConfig = CrawlConfig.mergeConfigs(configs);
        return configObject;
      case Kind.CRAWLSCHEDULECONFIG:
        configObject.crawlScheduleConfig = CrawlScheduleConfig.mergeConfigs(configs);
        return configObject;
      case Kind.BROWSERCONFIG:
        configObject.browserConfig = BrowserConfig.mergeConfigs(configs);
        return configObject;
      case Kind.POLITENESSCONFIG:
        configObject.politenessConfig = PolitenessConfig.mergeConfigs(configs);
        return configObject;
      case Kind.BROWSERSCRIPT:
        configObject.browserScript = BrowserScript.mergeConfigs(configs);
        return configObject;
      case Kind.CRAWLHOSTGROUPCONFIG:
        configObject.crawlHostGroupConfig = CrawlHostGroupConfig.mergeConfigs(configs);
        return configObject;
      case Kind.ROLEMAPPING:
        configObject.roleMapping = RoleMapping.mergeConfigs(configs);
        return configObject;
      case Kind.COLLECTION:
      case Kind.UNDEFINED:
      default:
        return null;
    }
  }
}

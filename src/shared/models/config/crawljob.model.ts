import {CrawlJobProto, CrawlLimitsConfigProto} from '../../../api';
import {ConfigRef} from './configref.model';
import {ConfigObject} from './configobject.model';
import {Kind} from './kind.model';

export class CrawlLimitsConfig {
  maxDurationS?: number; // int64
  maxBytes?: number; // int64

  constructor({
                maxDurationS = 0,
                maxBytes = 0,
              }: Partial<CrawlLimitsConfig> = {}) {
    this.maxDurationS = maxDurationS;
    this.maxBytes = maxBytes;
  }

  static fromProto(proto: CrawlLimitsConfigProto): CrawlLimitsConfig {
    return new CrawlLimitsConfig({
      maxDurationS: proto.getMaxDurationS(),
      maxBytes: proto.getMaxBytes()
    });
  }

  static toProto(crawlLimitsConfig): CrawlLimitsConfigProto {
    const proto = new CrawlLimitsConfigProto();
    proto.setMaxDurationS(crawlLimitsConfig.maxDurationS || 0);
    proto.setMaxBytes(crawlLimitsConfig.maxBytes || 0);
    return proto;
  }
}

export class CrawlJob {
  scheduleRef?: ConfigRef;
  crawlConfigRef?: ConfigRef;
  scopeScriptRef?: ConfigRef;
  limits: CrawlLimitsConfig;
  disabled: boolean;

  constructor({
                scheduleRef,
                crawlConfigRef,
                scopeScriptRef,
                limits,
                disabled = false
              }: Partial<CrawlJob> = {}) {
    this.scheduleRef = new ConfigRef(scheduleRef || {kind: Kind.CRAWLSCHEDULECONFIG});
    this.crawlConfigRef = new ConfigRef(crawlConfigRef || {kind: Kind.CRAWLCONFIG});
    this.scopeScriptRef = new ConfigRef(scopeScriptRef || {kind: Kind.BROWSERSCRIPT});
    this.limits = new CrawlLimitsConfig(limits);
    this.disabled = disabled;
  }

  static fromProto(proto: CrawlJobProto): CrawlJob {
    return new CrawlJob({
      scheduleRef: proto.getScheduleRef() ? ConfigRef.fromProto(proto.getScheduleRef()) : undefined,
      crawlConfigRef: proto.getCrawlConfigRef() ? ConfigRef.fromProto(proto.getCrawlConfigRef()) : undefined,
      scopeScriptRef: proto.getScopeScriptRef() ? ConfigRef.fromProto(proto.getScopeScriptRef()) : undefined,
      limits: CrawlLimitsConfig.fromProto(proto.getLimits()),
      disabled: proto.getDisabled(),
    });
  }

  static toProto(crawlJob: CrawlJob): CrawlJobProto {
    const proto = new CrawlJobProto();
    proto.setScheduleRef(ConfigRef.toProto(crawlJob.scheduleRef));
    proto.setScopeScriptRef(ConfigRef.toProto(crawlJob.scopeScriptRef));
    proto.setCrawlConfigRef(ConfigRef.toProto(crawlJob.crawlConfigRef));
    proto.setLimits(CrawlLimitsConfig.toProto(crawlJob.limits));
    proto.setDisabled(crawlJob.disabled);
    return proto;
  }

  static mergeConfigs(configObjects: ConfigObject[]): CrawlJob {
    const crawlJob = new CrawlJob({});
    const compareObj: CrawlJob = configObjects[0].crawlJob;

    const equalDisabledStatus = configObjects.every((cfg: ConfigObject) => cfg.crawlJob.disabled === compareObj.disabled);

    const equalMaxDuration = configObjects.every(
      (cfg: ConfigObject) => cfg.crawlJob.limits.maxDurationS === compareObj.limits.maxDurationS);

    const equalMaxBytes = configObjects.every((cfg: ConfigObject) => cfg.crawlJob.limits.maxBytes === compareObj.limits.maxBytes);

    const equalSchedule = configObjects.every((cfg: ConfigObject) => cfg.crawlJob.scheduleRef.id === compareObj.scheduleRef.id);

    const equalScopeScript = configObjects.every((cfg: ConfigObject) => cfg.crawlJob.scopeScriptRef.id === compareObj.scopeScriptRef.id);

    const equalCrawlConfig = configObjects.every(
      cfg => cfg.crawlJob.crawlConfigRef.id === compareObj.crawlConfigRef.id);

    if (equalDisabledStatus) {
      crawlJob.disabled = compareObj.disabled;
    } else {
      crawlJob.disabled = undefined;
    }

    if (equalMaxDuration) {
      crawlJob.limits.maxDurationS = compareObj.limits.maxDurationS;
    }

    if (equalMaxBytes) {
      crawlJob.limits.maxBytes = compareObj.limits.maxBytes;
    } else {
      crawlJob.limits.maxBytes = NaN;
    }

    crawlJob.scheduleRef = equalSchedule ? compareObj.scheduleRef : crawlJob.scheduleRef = new ConfigRef({kind: Kind.CRAWLSCHEDULECONFIG});

    crawlJob.crawlConfigRef = equalCrawlConfig ? compareObj.crawlConfigRef : new ConfigRef({kind: Kind.CRAWLCONFIG});

    crawlJob.scopeScriptRef = equalScopeScript ? compareObj.scopeScriptRef : new ConfigRef({kind: Kind.BROWSERSCRIPT});

    return crawlJob;
  }
}

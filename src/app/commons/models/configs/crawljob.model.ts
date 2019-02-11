import {CrawlJobProto, CrawlLimitsConfigProto} from '../../../../api';
import {ConfigRef} from '../configref.model';
import {ConfigObject} from '../configobject.model';
import {Kind} from '../kind.model';

export class CrawlJob {
  scheduleRef?: ConfigRef;
  limits: CrawlLimitsConfig;
  crawlConfigRef?: ConfigRef;
  disabled: boolean;

  constructor({
                scheduleRef = new ConfigRef({kind: Kind.CRAWLSCHEDULECONFIG}),
                limits = new CrawlLimitsConfig(),
                crawlConfigRef = new ConfigRef({kind: Kind.CRAWLCONFIG}),
                disabled = false
              } = {}) {
    this.scheduleRef = scheduleRef;
    this.limits = limits;
    this.crawlConfigRef = crawlConfigRef;
    this.disabled = disabled;
  }

  static fromProto(proto: CrawlJobProto): CrawlJob {
    const scheduleRef = proto.getScheduleRef()
      ? ConfigRef.fromProto(proto.getScheduleRef())
      : new ConfigRef({kind: Kind.CRAWLSCHEDULECONFIG});
    const crawlConfigRef = proto.getCrawlConfigRef()
      ? ConfigRef.fromProto(proto.getCrawlConfigRef())
      : new ConfigRef({kind: Kind.CRAWLCONFIG});
    return new CrawlJob({
      scheduleRef,
      limits: CrawlLimitsConfig.fromProto(proto.getLimits()),
      crawlConfigRef,
      disabled: proto.getDisabled(),
    });
  }

  static mergeConfigs(configObjects: ConfigObject[]): CrawlJob {
    const crawlJob = new CrawlJob();
    const compareObj: CrawlJob = configObjects[0].crawlJob;


    const equalDisabledStatus = isDisabledEqual(configObjects);

    const equalDepth = configObjects.every(function (cfg: ConfigObject) {
      return cfg.crawlJob.limits.depth === compareObj.limits.depth;
    });

    const equalMaxDuration = configObjects.every(function (cfg: ConfigObject) {
      return cfg.crawlJob.limits.maxDurationS === compareObj.limits.maxDurationS;
    });

    const equalMaxBytes = configObjects.every(function (cfg: ConfigObject) {
      return cfg.crawlJob.limits.maxBytes === compareObj.limits.maxBytes;
    });

     const equalSchedule = configObjects.every(function (cfg: ConfigObject) {
       return objectEqual(cfg.crawlJob.scheduleRef, compareObj.scheduleRef);
     });


    const equalCrawlConfig = configObjects.every(function (cfg: ConfigObject) {
      return objectEqual(cfg.crawlJob.crawlConfigRef, compareObj.crawlConfigRef);
    });

    if (equalDisabledStatus) {
      crawlJob.disabled = compareObj.disabled;
    }

    if (equalDepth) {
      crawlJob.limits.depth = compareObj.limits.depth;
    }

    if (equalMaxDuration) {
      crawlJob.limits.maxDurationS = compareObj.limits.maxDurationS;
    }

    if (equalMaxBytes) {
      crawlJob.limits.maxBytes = compareObj.limits.maxBytes;
    }

    if (equalSchedule) {
      crawlJob.scheduleRef = compareObj.scheduleRef;
    } else {
      crawlJob.scheduleRef = null;
    }

    if (equalCrawlConfig) {
      crawlJob.crawlConfigRef = compareObj.crawlConfigRef;
    } else {
      crawlJob.crawlConfigRef = null;
    }

    return crawlJob;
  }



  toProto(): CrawlJobProto {
    const proto = new CrawlJobProto();
    proto.setScheduleRef(this.scheduleRef.toProto());
    proto.setLimits(this.limits.toProto());
    proto.setCrawlConfigRef(this.crawlConfigRef.toProto());
    proto.setDisabled(this.disabled);
    return proto;
  }

  createUpdateRequest(configUpdate: ConfigObject, formControl: any, mergedConfig?: ConfigObject) {
    const crawlJob = new CrawlJob();
    const pathList = [];

    if (mergedConfig) {

      if (formControl.disabled.dirty) {
        if (configUpdate.crawlJob.disabled !== undefined) {
          crawlJob.disabled = configUpdate.crawlJob.disabled;
          pathList.push('crawlJob.disabled');
        }
      }
      if (formControl.limits.controls.depth.dirty) {
        if (configUpdate.crawlJob.limits.depth !== mergedConfig.crawlJob.limits.depth) {
          crawlJob.limits.depth = configUpdate.crawlJob.limits.depth;
          pathList.push('crawlJob.limits.depth');
        }
      }
      if (formControl.limits.controls.maxBytes.dirty) {
        if (configUpdate.crawlJob.limits.maxBytes !== mergedConfig.crawlJob.limits.maxBytes) {
          crawlJob.limits.maxBytes = configUpdate.crawlJob.limits.maxBytes;
          pathList.push('crawlJob.limits.maxBytes');
        }
      }
      if (formControl.limits.controls.maxDurationS.dirty) {
        if (configUpdate.crawlJob.limits.maxDurationS !== mergedConfig.crawlJob.limits.maxDurationS) {
          crawlJob.limits.maxDurationS = configUpdate.crawlJob.limits.maxDurationS;
          pathList.push('crawlJob.limits.maxDurationS');
        }
      }
      if (formControl.scheduleRef.dirty) {
        if (configUpdate.crawlJob.scheduleRef !== mergedConfig.crawlJob.scheduleRef) {
          crawlJob.scheduleRef = configUpdate.crawlJob.scheduleRef;
          pathList.push('crawlJob.scheduleRef');
        }
      }

      if (formControl.crawlConfigRef.dirty) {
        if (configUpdate.crawlJob.crawlConfigRef !== mergedConfig.crawlJob.crawlConfigRef) {
          crawlJob.crawlConfigRef = configUpdate.crawlJob.crawlConfigRef;
          pathList.push('crawlJob.crawlConfigRef');
        }
      }
    } else {
      if (formControl.disabled.dirty) {
        if (configUpdate.crawlJob.disabled !== undefined) {
          crawlJob.disabled = configUpdate.crawlJob.disabled;
          pathList.push('crawlJob.disabled');
        }
      }
      if (formControl.limits.controls.depth.dirty) {
        crawlJob.limits.depth = configUpdate.crawlJob.limits.depth;
        pathList.push('crawlJob.limits.depth');
      }
      if (formControl.limits.controls.maxBytes.dirty) {
        crawlJob.limits.maxBytes = configUpdate.crawlJob.limits.maxBytes;
        pathList.push('crawlJob.limits.maxBytes');
      }
      if (formControl.limits.controls.maxDurationS.dirty) {
        crawlJob.limits.maxDurationS = configUpdate.crawlJob.limits.maxDurationS;
        pathList.push('crawlJob.limits.maxDurationS');
      }
      if (formControl.scheduleRef.dirty) {
        crawlJob.scheduleRef = configUpdate.crawlJob.scheduleRef;
        pathList.push('crawlJob.scheduleRef');
      }

      if (formControl.crawlConfigRef.dirty) {
        crawlJob.crawlConfigRef = configUpdate.crawlJob.crawlConfigRef;
        pathList.push('crawlJob.crawlConfigRef');
      }
    }
    return {updateTemplate: crawlJob, pathList: pathList};
  }
}

export class CrawlLimitsConfig {
  depth?: number;
  maxDurationS?: number; // int64
  maxBytes?: number; // int64

  constructor({
                depth = 0,
                maxDurationS = 0,
                maxBytes = 0,
              } = {}) {
    this.depth = depth;
    this.maxDurationS = maxDurationS;
    this.maxBytes = maxBytes;
  }

  static fromProto(proto: CrawlLimitsConfigProto): CrawlLimitsConfig {
    return new CrawlLimitsConfig({
      depth: proto.getDepth(),
      maxDurationS: proto.getMaxDurationS(),
      maxBytes: proto.getMaxBytes()
    });
  }

  toProto(): CrawlLimitsConfigProto {
    const proto = new CrawlLimitsConfigProto();
    proto.setDepth(this.depth || 0);
    proto.setMaxDurationS(this.maxDurationS || 0);
    proto.setMaxBytes(this.maxBytes || 0);
    return proto;
  }
}

// Helper function to see if multiple configs has the same value for disabled field
function isDisabledEqual(configs: ConfigObject[]) {
  const compareObj = configs[0].crawlJob;
  const equalDisabledStatus = configs.every(function (cfg: ConfigObject) {
    return cfg.crawlJob.disabled === compareObj.disabled;
  });
  return equalDisabledStatus;
}

function objectEqual(config, compareConfig): boolean {
  const cfgProps = Object.getOwnPropertyNames(config);
  const compareObjProps = Object.getOwnPropertyNames(compareConfig);

  if (cfgProps.length !== compareObjProps.length) {
    return false;
  }

  for (const prop  of cfgProps) {
    const propName = prop;
    if (cfgProps[propName] !== compareObjProps[propName]) {
      return false;
    }
  }
  return true;
}


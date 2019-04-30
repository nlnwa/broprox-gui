import {BrowserConfigProto} from '../../../../api';
import {intersectString} from '../../func';
import {ConfigRef} from '../configref.model';
import {ConfigObject} from '../configobject.model';


export class BrowserConfig {
  userAgent: string;
  windowWidth: number;
  windowHeight: number;
  pageLoadTimeoutMs: number; // int64
  scriptSelectorList: string[];
  scriptRefList: ConfigRef[];
  // headers?: Map<string, string>;
  // script_parameters?: Map<string, string>; not implemented
  maxInactivityTimeMs: number; // int64

  constructor(browserConfig?: Partial<BrowserConfig>) {
    if (browserConfig) {
      this.userAgent = browserConfig.userAgent || '';
      this.windowWidth = browserConfig.windowWidth || 0;
      this.windowHeight = browserConfig.windowHeight || 0;
      this.pageLoadTimeoutMs = browserConfig.pageLoadTimeoutMs || 0;
      this.scriptSelectorList = browserConfig.scriptSelectorList ? [...browserConfig.scriptSelectorList] : [];
      this.scriptRefList = browserConfig.scriptRefList ? browserConfig.scriptRefList.map(scriptRef => new ConfigRef(scriptRef)) : [];
      this.maxInactivityTimeMs = browserConfig.maxInactivityTimeMs || 0;
    }
  }

  static fromProto(proto: BrowserConfigProto): BrowserConfig {
    return new BrowserConfig({
      userAgent: proto.getUserAgent(),
      windowWidth: proto.getWindowWidth(),
      windowHeight: proto.getWindowHeight(),
      pageLoadTimeoutMs: proto.getPageLoadTimeoutMs(),
      scriptSelectorList: proto.getScriptSelectorList(),
      scriptRefList: proto.getScriptRefList().map(ref => ConfigRef.fromProto(ref)),
      // script_parameters?: Map<string, string>; not implemented
      // headers
      maxInactivityTimeMs: proto.getMaxInactivityTimeMs()
    });
  }

  static mergeConfigs(configObjects: ConfigObject[]): BrowserConfig {
    const browserConfig = new BrowserConfig();
    const compareObj: ConfigObject = configObjects[0];
    const commonScripts = this.commonScript(configObjects);

    const equalUserAgent = configObjects.every(function (cfg) {
      return cfg.browserConfig.userAgent === compareObj.browserConfig.userAgent;
    });

    const equalWindowWidth = configObjects.every(function (cfg) {
      return cfg.browserConfig.windowWidth === compareObj.browserConfig.windowWidth;
    });

    const equalWindowHeight = configObjects.every(function (cfg) {
      return cfg.browserConfig.windowHeight === compareObj.browserConfig.windowHeight;
    });

    const equalPageLoadTimeout = configObjects.every(function (cfg) {
      return cfg.browserConfig.pageLoadTimeoutMs === compareObj.browserConfig.pageLoadTimeoutMs;
    });

    const equalSleepAfterPageload = configObjects.every(function (cfg) {
      return cfg.browserConfig.maxInactivityTimeMs === compareObj.browserConfig.maxInactivityTimeMs;
    });

    if (equalUserAgent) {
      browserConfig.userAgent = compareObj.browserConfig.userAgent;
    } else {
      browserConfig.userAgent = null;
    }

    if (equalWindowWidth) {
      browserConfig.windowWidth = compareObj.browserConfig.windowWidth;
    } else {
      browserConfig.windowWidth = NaN;
    }

    if (equalWindowHeight) {
      browserConfig.windowHeight = compareObj.browserConfig.windowHeight;
    } else {
      browserConfig.windowHeight = NaN;
    }

    if (equalPageLoadTimeout) {
      browserConfig.pageLoadTimeoutMs = compareObj.browserConfig.pageLoadTimeoutMs;
    } else {
      browserConfig.pageLoadTimeoutMs = NaN;
    }

    if (equalSleepAfterPageload) {
      browserConfig.maxInactivityTimeMs = compareObj.browserConfig.maxInactivityTimeMs;
    } else {
      browserConfig.maxInactivityTimeMs = NaN;
    }

    for (const browserScript of commonScripts) {
      const gotScript = configObjects.every(function (cfg) {
        for (const script of cfg.browserConfig.scriptRefList) {
          if (script.id === browserScript.id) {
            return true;
          }
        }
        return false;
      });
      if (gotScript) {
        browserConfig.scriptRefList.push(browserScript);
      }
    }

    browserConfig.scriptSelectorList = configObjects
      .map(c => c.browserConfig.scriptSelectorList)
      .reduce(intersectString);

    return browserConfig;
  }

  static commonScript(configObjects: ConfigObject[]) {
    const scripts = [];
    for (const config of configObjects) {
      for (const script of config.browserConfig.scriptRefList) {
        if (script !== undefined) {
            scripts.push(script);
        }
      }
    }
     const unique = scripts.filter(function({id}) {
       return !this.has(id) && this.add(id);
     }, new Set);

    return unique;
  }

  static toProto(browserConfig: BrowserConfig): BrowserConfigProto {
    const proto = new BrowserConfigProto();
    proto.setUserAgent(browserConfig.userAgent);
    proto.setWindowWidth(browserConfig.windowWidth || 0);
    proto.setWindowHeight(browserConfig.windowHeight || 0);
    proto.setPageLoadTimeoutMs(browserConfig.pageLoadTimeoutMs || 0);
    proto.setMaxInactivityTimeMs(browserConfig.maxInactivityTimeMs || 0);
    proto.setScriptRefList(browserConfig.scriptRefList.map(ConfigRef.toProto));
    proto.setScriptSelectorList(browserConfig.scriptSelectorList);

    return proto;
  }
}

import {BrowserScriptProto} from '../../../api';
import {ConfigObject} from './configobject.model';
import {isNumeric} from '../../func';

export enum BrowserScriptType {
  UNDEFINED= 0,
  EXTRACT_OUTLINKS = 1,
  REPLACEMENT = 2,
  ON_LOAD = 3,
  ON_NEW_DOCUMENT = 4,
  SCOPE_CHECK= 5,
}

export const browserScriptTypes = Object.keys(BrowserScriptType).filter(p => !isNumeric(p)).map(key => BrowserScriptType[key]);

export class BrowserScript {
  script?: string;
  urlRegexpList?: string[];
  browserScriptType?: BrowserScriptType;

  constructor({
                script = '',
                urlRegexpList = [],
                browserScriptType = BrowserScriptType.UNDEFINED,
              }: Partial<BrowserScript> = {}) {
    this.script = script;
    this.urlRegexpList = urlRegexpList ? [...urlRegexpList] : [];
    this.browserScriptType = browserScriptType;
  }

  static fromProto(proto: BrowserScriptProto): BrowserScript {
    return new BrowserScript({
      script: proto.getScript(),
      urlRegexpList: proto.getUrlRegexpList(),
      browserScriptType: proto.getBrowserScriptType()
    });
  }

  static mergeConfigs(configObjects: ConfigObject[]): BrowserScript {
    const browserScript = new BrowserScript();
    const compareObj: BrowserScript = configObjects[0].browserScript;

    const equalBrowserScriptType = configObjects.every(
      (cfg: ConfigObject) => cfg.browserScript.browserScriptType === compareObj.browserScriptType)
    const equalScript = configObjects.every((cfg: ConfigObject) => cfg.browserScript.script === compareObj.script);

    if (equalScript) {
      browserScript.script = compareObj.script;
    } else {
      browserScript.script = '';
    }

    if (equalBrowserScriptType) {
      browserScript.browserScriptType = compareObj.browserScriptType;
    } else {
      browserScript.browserScriptType = null;
    }

    return browserScript;
  }

  static toProto(browserScript: BrowserScript): BrowserScriptProto {
    const proto = new BrowserScriptProto();
    proto.setScript(browserScript.script);
    proto.setUrlRegexpList(browserScript.urlRegexpList);
    proto.setBrowserScriptType(browserScript.browserScriptType);

    return proto as any as BrowserScriptProto;
  }
}



import {
  BrowserScriptType,
  ConfigObject,
  RobotsPolicy, Role,
  RotationPolicy,
  SubCollectionType
} from '../../../shared/models/config';

export interface ConfigOptions {
  rotationPolicies?: RotationPolicy[];
  subCollectionTypes?: SubCollectionType[];
  crawlConfigs?: ConfigObject[];
  crawlScheduleConfigs?: ConfigObject[];
  browserConfigs?: ConfigObject[];
  collections?: ConfigObject[];
  politenessConfigs?: ConfigObject[];
  browserScripts?: ConfigObject[];
  scopeScripts?: ConfigObject[];
  browserScriptTypes?: BrowserScriptType[];
  robotsPolicies?: RobotsPolicy[];
  crawlJobs?: ConfigObject[];
  roles?: Role[];
}

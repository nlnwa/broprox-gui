import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class ConfigObject extends jspb.Message {
  getId(): string;
  setId(value: string): ConfigObject;

  getApiversion(): string;
  setApiversion(value: string): ConfigObject;

  getKind(): Kind;
  setKind(value: Kind): ConfigObject;

  getMeta(): Meta | undefined;
  setMeta(value?: Meta): ConfigObject;
  hasMeta(): boolean;
  clearMeta(): ConfigObject;

  getCrawlEntity(): CrawlEntity | undefined;
  setCrawlEntity(value?: CrawlEntity): ConfigObject;
  hasCrawlEntity(): boolean;
  clearCrawlEntity(): ConfigObject;

  getSeed(): Seed | undefined;
  setSeed(value?: Seed): ConfigObject;
  hasSeed(): boolean;
  clearSeed(): ConfigObject;

  getCrawlJob(): CrawlJob | undefined;
  setCrawlJob(value?: CrawlJob): ConfigObject;
  hasCrawlJob(): boolean;
  clearCrawlJob(): ConfigObject;

  getCrawlConfig(): CrawlConfig | undefined;
  setCrawlConfig(value?: CrawlConfig): ConfigObject;
  hasCrawlConfig(): boolean;
  clearCrawlConfig(): ConfigObject;

  getCrawlScheduleConfig(): CrawlScheduleConfig | undefined;
  setCrawlScheduleConfig(value?: CrawlScheduleConfig): ConfigObject;
  hasCrawlScheduleConfig(): boolean;
  clearCrawlScheduleConfig(): ConfigObject;

  getBrowserConfig(): BrowserConfig | undefined;
  setBrowserConfig(value?: BrowserConfig): ConfigObject;
  hasBrowserConfig(): boolean;
  clearBrowserConfig(): ConfigObject;

  getPolitenessConfig(): PolitenessConfig | undefined;
  setPolitenessConfig(value?: PolitenessConfig): ConfigObject;
  hasPolitenessConfig(): boolean;
  clearPolitenessConfig(): ConfigObject;

  getBrowserScript(): BrowserScript | undefined;
  setBrowserScript(value?: BrowserScript): ConfigObject;
  hasBrowserScript(): boolean;
  clearBrowserScript(): ConfigObject;

  getCrawlHostGroupConfig(): CrawlHostGroupConfig | undefined;
  setCrawlHostGroupConfig(value?: CrawlHostGroupConfig): ConfigObject;
  hasCrawlHostGroupConfig(): boolean;
  clearCrawlHostGroupConfig(): ConfigObject;

  getRoleMapping(): RoleMapping | undefined;
  setRoleMapping(value?: RoleMapping): ConfigObject;
  hasRoleMapping(): boolean;
  clearRoleMapping(): ConfigObject;

  getCollection(): Collection | undefined;
  setCollection(value?: Collection): ConfigObject;
  hasCollection(): boolean;
  clearCollection(): ConfigObject;

  getSpecCase(): ConfigObject.SpecCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigObject.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigObject): ConfigObject.AsObject;
  static serializeBinaryToWriter(message: ConfigObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigObject;
  static deserializeBinaryFromReader(message: ConfigObject, reader: jspb.BinaryReader): ConfigObject;
}

export namespace ConfigObject {
  export type AsObject = {
    id: string,
    apiversion: string,
    kind: Kind,
    meta?: Meta.AsObject,
    crawlEntity?: CrawlEntity.AsObject,
    seed?: Seed.AsObject,
    crawlJob?: CrawlJob.AsObject,
    crawlConfig?: CrawlConfig.AsObject,
    crawlScheduleConfig?: CrawlScheduleConfig.AsObject,
    browserConfig?: BrowserConfig.AsObject,
    politenessConfig?: PolitenessConfig.AsObject,
    browserScript?: BrowserScript.AsObject,
    crawlHostGroupConfig?: CrawlHostGroupConfig.AsObject,
    roleMapping?: RoleMapping.AsObject,
    collection?: Collection.AsObject,
  }

  export enum SpecCase { 
    SPEC_NOT_SET = 0,
    CRAWL_ENTITY = 5,
    SEED = 6,
    CRAWL_JOB = 7,
    CRAWL_CONFIG = 8,
    CRAWL_SCHEDULE_CONFIG = 9,
    BROWSER_CONFIG = 10,
    POLITENESS_CONFIG = 11,
    BROWSER_SCRIPT = 12,
    CRAWL_HOST_GROUP_CONFIG = 13,
    ROLE_MAPPING = 14,
    COLLECTION = 15,
  }
}

export class Meta extends jspb.Message {
  getName(): string;
  setName(value: string): Meta;

  getDescription(): string;
  setDescription(value: string): Meta;

  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): Meta;
  hasCreated(): boolean;
  clearCreated(): Meta;

  getCreatedBy(): string;
  setCreatedBy(value: string): Meta;

  getLastModified(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastModified(value?: google_protobuf_timestamp_pb.Timestamp): Meta;
  hasLastModified(): boolean;
  clearLastModified(): Meta;

  getLastModifiedBy(): string;
  setLastModifiedBy(value: string): Meta;

  getLabelList(): Array<Label>;
  setLabelList(value: Array<Label>): Meta;
  clearLabelList(): Meta;
  addLabel(value?: Label, index?: number): Label;

  getAnnotationList(): Array<Annotation>;
  setAnnotationList(value: Array<Annotation>): Meta;
  clearAnnotationList(): Meta;
  addAnnotation(value?: Annotation, index?: number): Annotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Meta.AsObject;
  static toObject(includeInstance: boolean, msg: Meta): Meta.AsObject;
  static serializeBinaryToWriter(message: Meta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Meta;
  static deserializeBinaryFromReader(message: Meta, reader: jspb.BinaryReader): Meta;
}

export namespace Meta {
  export type AsObject = {
    name: string,
    description: string,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdBy: string,
    lastModified?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastModifiedBy: string,
    labelList: Array<Label.AsObject>,
    annotationList: Array<Annotation.AsObject>,
  }
}

export class Label extends jspb.Message {
  getKey(): string;
  setKey(value: string): Label;

  getValue(): string;
  setValue(value: string): Label;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Label.AsObject;
  static toObject(includeInstance: boolean, msg: Label): Label.AsObject;
  static serializeBinaryToWriter(message: Label, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Label;
  static deserializeBinaryFromReader(message: Label, reader: jspb.BinaryReader): Label;
}

export namespace Label {
  export type AsObject = {
    key: string,
    value: string,
  }
}

export class Annotation extends jspb.Message {
  getKey(): string;
  setKey(value: string): Annotation;

  getValue(): string;
  setValue(value: string): Annotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Annotation.AsObject;
  static toObject(includeInstance: boolean, msg: Annotation): Annotation.AsObject;
  static serializeBinaryToWriter(message: Annotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Annotation;
  static deserializeBinaryFromReader(message: Annotation, reader: jspb.BinaryReader): Annotation;
}

export namespace Annotation {
  export type AsObject = {
    key: string,
    value: string,
  }
}

export class ConfigRef extends jspb.Message {
  getKind(): Kind;
  setKind(value: Kind): ConfigRef;

  getId(): string;
  setId(value: string): ConfigRef;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigRef.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigRef): ConfigRef.AsObject;
  static serializeBinaryToWriter(message: ConfigRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigRef;
  static deserializeBinaryFromReader(message: ConfigRef, reader: jspb.BinaryReader): ConfigRef;
}

export namespace ConfigRef {
  export type AsObject = {
    kind: Kind,
    id: string,
  }
}

export class CrawlEntity extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CrawlEntity.AsObject;
  static toObject(includeInstance: boolean, msg: CrawlEntity): CrawlEntity.AsObject;
  static serializeBinaryToWriter(message: CrawlEntity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CrawlEntity;
  static deserializeBinaryFromReader(message: CrawlEntity, reader: jspb.BinaryReader): CrawlEntity;
}

export namespace CrawlEntity {
  export type AsObject = {
  }
}

export class Seed extends jspb.Message {
  getEntityRef(): ConfigRef | undefined;
  setEntityRef(value?: ConfigRef): Seed;
  hasEntityRef(): boolean;
  clearEntityRef(): Seed;

  getJobRefList(): Array<ConfigRef>;
  setJobRefList(value: Array<ConfigRef>): Seed;
  clearJobRefList(): Seed;
  addJobRef(value?: ConfigRef, index?: number): ConfigRef;

  getDisabled(): boolean;
  setDisabled(value: boolean): Seed;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Seed.AsObject;
  static toObject(includeInstance: boolean, msg: Seed): Seed.AsObject;
  static serializeBinaryToWriter(message: Seed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Seed;
  static deserializeBinaryFromReader(message: Seed, reader: jspb.BinaryReader): Seed;
}

export namespace Seed {
  export type AsObject = {
    entityRef?: ConfigRef.AsObject,
    jobRefList: Array<ConfigRef.AsObject>,
    disabled: boolean,
  }
}

export class CrawlJob extends jspb.Message {
  getScheduleRef(): ConfigRef | undefined;
  setScheduleRef(value?: ConfigRef): CrawlJob;
  hasScheduleRef(): boolean;
  clearScheduleRef(): CrawlJob;

  getLimits(): CrawlLimitsConfig | undefined;
  setLimits(value?: CrawlLimitsConfig): CrawlJob;
  hasLimits(): boolean;
  clearLimits(): CrawlJob;

  getCrawlConfigRef(): ConfigRef | undefined;
  setCrawlConfigRef(value?: ConfigRef): CrawlJob;
  hasCrawlConfigRef(): boolean;
  clearCrawlConfigRef(): CrawlJob;

  getScopeScriptRef(): ConfigRef | undefined;
  setScopeScriptRef(value?: ConfigRef): CrawlJob;
  hasScopeScriptRef(): boolean;
  clearScopeScriptRef(): CrawlJob;

  getDisabled(): boolean;
  setDisabled(value: boolean): CrawlJob;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CrawlJob.AsObject;
  static toObject(includeInstance: boolean, msg: CrawlJob): CrawlJob.AsObject;
  static serializeBinaryToWriter(message: CrawlJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CrawlJob;
  static deserializeBinaryFromReader(message: CrawlJob, reader: jspb.BinaryReader): CrawlJob;
}

export namespace CrawlJob {
  export type AsObject = {
    scheduleRef?: ConfigRef.AsObject,
    limits?: CrawlLimitsConfig.AsObject,
    crawlConfigRef?: ConfigRef.AsObject,
    scopeScriptRef?: ConfigRef.AsObject,
    disabled: boolean,
  }
}

export class CrawlConfig extends jspb.Message {
  getCollectionRef(): ConfigRef | undefined;
  setCollectionRef(value?: ConfigRef): CrawlConfig;
  hasCollectionRef(): boolean;
  clearCollectionRef(): CrawlConfig;

  getBrowserConfigRef(): ConfigRef | undefined;
  setBrowserConfigRef(value?: ConfigRef): CrawlConfig;
  hasBrowserConfigRef(): boolean;
  clearBrowserConfigRef(): CrawlConfig;

  getPolitenessRef(): ConfigRef | undefined;
  setPolitenessRef(value?: ConfigRef): CrawlConfig;
  hasPolitenessRef(): boolean;
  clearPolitenessRef(): CrawlConfig;

  getExtra(): ExtraConfig | undefined;
  setExtra(value?: ExtraConfig): CrawlConfig;
  hasExtra(): boolean;
  clearExtra(): CrawlConfig;

  getMinimumDnsTtlS(): number;
  setMinimumDnsTtlS(value: number): CrawlConfig;

  getPriorityWeight(): number;
  setPriorityWeight(value: number): CrawlConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CrawlConfig.AsObject;
  static toObject(includeInstance: boolean, msg: CrawlConfig): CrawlConfig.AsObject;
  static serializeBinaryToWriter(message: CrawlConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CrawlConfig;
  static deserializeBinaryFromReader(message: CrawlConfig, reader: jspb.BinaryReader): CrawlConfig;
}

export namespace CrawlConfig {
  export type AsObject = {
    collectionRef?: ConfigRef.AsObject,
    browserConfigRef?: ConfigRef.AsObject,
    politenessRef?: ConfigRef.AsObject,
    extra?: ExtraConfig.AsObject,
    minimumDnsTtlS: number,
    priorityWeight: number,
  }
}

export class ExtraConfig extends jspb.Message {
  getCreateScreenshot(): boolean;
  setCreateScreenshot(value: boolean): ExtraConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtraConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ExtraConfig): ExtraConfig.AsObject;
  static serializeBinaryToWriter(message: ExtraConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtraConfig;
  static deserializeBinaryFromReader(message: ExtraConfig, reader: jspb.BinaryReader): ExtraConfig;
}

export namespace ExtraConfig {
  export type AsObject = {
    createScreenshot: boolean,
  }
}

export class CrawlScheduleConfig extends jspb.Message {
  getCronExpression(): string;
  setCronExpression(value: string): CrawlScheduleConfig;

  getValidFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setValidFrom(value?: google_protobuf_timestamp_pb.Timestamp): CrawlScheduleConfig;
  hasValidFrom(): boolean;
  clearValidFrom(): CrawlScheduleConfig;

  getValidTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setValidTo(value?: google_protobuf_timestamp_pb.Timestamp): CrawlScheduleConfig;
  hasValidTo(): boolean;
  clearValidTo(): CrawlScheduleConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CrawlScheduleConfig.AsObject;
  static toObject(includeInstance: boolean, msg: CrawlScheduleConfig): CrawlScheduleConfig.AsObject;
  static serializeBinaryToWriter(message: CrawlScheduleConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CrawlScheduleConfig;
  static deserializeBinaryFromReader(message: CrawlScheduleConfig, reader: jspb.BinaryReader): CrawlScheduleConfig;
}

export namespace CrawlScheduleConfig {
  export type AsObject = {
    cronExpression: string,
    validFrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    validTo?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CrawlLimitsConfig extends jspb.Message {
  getMaxDurationS(): number;
  setMaxDurationS(value: number): CrawlLimitsConfig;

  getMaxBytes(): number;
  setMaxBytes(value: number): CrawlLimitsConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CrawlLimitsConfig.AsObject;
  static toObject(includeInstance: boolean, msg: CrawlLimitsConfig): CrawlLimitsConfig.AsObject;
  static serializeBinaryToWriter(message: CrawlLimitsConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CrawlLimitsConfig;
  static deserializeBinaryFromReader(message: CrawlLimitsConfig, reader: jspb.BinaryReader): CrawlLimitsConfig;
}

export namespace CrawlLimitsConfig {
  export type AsObject = {
    maxDurationS: number,
    maxBytes: number,
  }
}

export class BrowserConfig extends jspb.Message {
  getUserAgent(): string;
  setUserAgent(value: string): BrowserConfig;

  getWindowWidth(): number;
  setWindowWidth(value: number): BrowserConfig;

  getWindowHeight(): number;
  setWindowHeight(value: number): BrowserConfig;

  getPageLoadTimeoutMs(): number;
  setPageLoadTimeoutMs(value: number): BrowserConfig;

  getScriptSelectorList(): Array<string>;
  setScriptSelectorList(value: Array<string>): BrowserConfig;
  clearScriptSelectorList(): BrowserConfig;
  addScriptSelector(value: string, index?: number): BrowserConfig;

  getScriptRefList(): Array<ConfigRef>;
  setScriptRefList(value: Array<ConfigRef>): BrowserConfig;
  clearScriptRefList(): BrowserConfig;
  addScriptRef(value?: ConfigRef, index?: number): ConfigRef;

  getHeadersMap(): jspb.Map<string, string>;
  clearHeadersMap(): BrowserConfig;

  getScriptParametersMap(): jspb.Map<string, string>;
  clearScriptParametersMap(): BrowserConfig;

  getMaxInactivityTimeMs(): number;
  setMaxInactivityTimeMs(value: number): BrowserConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BrowserConfig.AsObject;
  static toObject(includeInstance: boolean, msg: BrowserConfig): BrowserConfig.AsObject;
  static serializeBinaryToWriter(message: BrowserConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BrowserConfig;
  static deserializeBinaryFromReader(message: BrowserConfig, reader: jspb.BinaryReader): BrowserConfig;
}

export namespace BrowserConfig {
  export type AsObject = {
    userAgent: string,
    windowWidth: number,
    windowHeight: number,
    pageLoadTimeoutMs: number,
    scriptSelectorList: Array<string>,
    scriptRefList: Array<ConfigRef.AsObject>,
    headersMap: Array<[string, string]>,
    scriptParametersMap: Array<[string, string]>,
    maxInactivityTimeMs: number,
  }
}

export class PolitenessConfig extends jspb.Message {
  getRobotsPolicy(): PolitenessConfig.RobotsPolicy;
  setRobotsPolicy(value: PolitenessConfig.RobotsPolicy): PolitenessConfig;

  getMinimumRobotsValidityDurationS(): number;
  setMinimumRobotsValidityDurationS(value: number): PolitenessConfig;

  getCustomRobots(): string;
  setCustomRobots(value: string): PolitenessConfig;

  getMinTimeBetweenPageLoadMs(): number;
  setMinTimeBetweenPageLoadMs(value: number): PolitenessConfig;

  getMaxTimeBetweenPageLoadMs(): number;
  setMaxTimeBetweenPageLoadMs(value: number): PolitenessConfig;

  getDelayFactor(): number;
  setDelayFactor(value: number): PolitenessConfig;

  getMaxRetries(): number;
  setMaxRetries(value: number): PolitenessConfig;

  getRetryDelaySeconds(): number;
  setRetryDelaySeconds(value: number): PolitenessConfig;

  getCrawlHostGroupSelectorList(): Array<string>;
  setCrawlHostGroupSelectorList(value: Array<string>): PolitenessConfig;
  clearCrawlHostGroupSelectorList(): PolitenessConfig;
  addCrawlHostGroupSelector(value: string, index?: number): PolitenessConfig;

  getUseHostname(): boolean;
  setUseHostname(value: boolean): PolitenessConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolitenessConfig.AsObject;
  static toObject(includeInstance: boolean, msg: PolitenessConfig): PolitenessConfig.AsObject;
  static serializeBinaryToWriter(message: PolitenessConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolitenessConfig;
  static deserializeBinaryFromReader(message: PolitenessConfig, reader: jspb.BinaryReader): PolitenessConfig;
}

export namespace PolitenessConfig {
  export type AsObject = {
    robotsPolicy: PolitenessConfig.RobotsPolicy,
    minimumRobotsValidityDurationS: number,
    customRobots: string,
    minTimeBetweenPageLoadMs: number,
    maxTimeBetweenPageLoadMs: number,
    delayFactor: number,
    maxRetries: number,
    retryDelaySeconds: number,
    crawlHostGroupSelectorList: Array<string>,
    useHostname: boolean,
  }

  export enum RobotsPolicy { 
    OBEY_ROBOTS = 0,
    IGNORE_ROBOTS = 1,
    CUSTOM_ROBOTS = 2,
    OBEY_ROBOTS_CLASSIC = 3,
    CUSTOM_ROBOTS_CLASSIC = 4,
    CUSTOM_IF_MISSING = 5,
    CUSTOM_IF_MISSING_CLASSIC = 6,
  }
}

export class BrowserScript extends jspb.Message {
  getScript(): string;
  setScript(value: string): BrowserScript;

  getUrlRegexpList(): Array<string>;
  setUrlRegexpList(value: Array<string>): BrowserScript;
  clearUrlRegexpList(): BrowserScript;
  addUrlRegexp(value: string, index?: number): BrowserScript;

  getBrowserScriptType(): BrowserScript.BrowserScriptType;
  setBrowserScriptType(value: BrowserScript.BrowserScriptType): BrowserScript;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BrowserScript.AsObject;
  static toObject(includeInstance: boolean, msg: BrowserScript): BrowserScript.AsObject;
  static serializeBinaryToWriter(message: BrowserScript, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BrowserScript;
  static deserializeBinaryFromReader(message: BrowserScript, reader: jspb.BinaryReader): BrowserScript;
}

export namespace BrowserScript {
  export type AsObject = {
    script: string,
    urlRegexpList: Array<string>,
    browserScriptType: BrowserScript.BrowserScriptType,
  }

  export enum BrowserScriptType { 
    UNDEFINED = 0,
    EXTRACT_OUTLINKS = 1,
    REPLACEMENT = 2,
    ON_LOAD = 3,
    ON_NEW_DOCUMENT = 4,
    SCOPE_CHECK = 5,
  }
}

export class CrawlHostGroupConfig extends jspb.Message {
  getIpRangeList(): Array<CrawlHostGroupConfig.IpRange>;
  setIpRangeList(value: Array<CrawlHostGroupConfig.IpRange>): CrawlHostGroupConfig;
  clearIpRangeList(): CrawlHostGroupConfig;
  addIpRange(value?: CrawlHostGroupConfig.IpRange, index?: number): CrawlHostGroupConfig.IpRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CrawlHostGroupConfig.AsObject;
  static toObject(includeInstance: boolean, msg: CrawlHostGroupConfig): CrawlHostGroupConfig.AsObject;
  static serializeBinaryToWriter(message: CrawlHostGroupConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CrawlHostGroupConfig;
  static deserializeBinaryFromReader(message: CrawlHostGroupConfig, reader: jspb.BinaryReader): CrawlHostGroupConfig;
}

export namespace CrawlHostGroupConfig {
  export type AsObject = {
    ipRangeList: Array<CrawlHostGroupConfig.IpRange.AsObject>,
  }

  export class IpRange extends jspb.Message {
    getIpFrom(): string;
    setIpFrom(value: string): IpRange;

    getIpTo(): string;
    setIpTo(value: string): IpRange;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IpRange.AsObject;
    static toObject(includeInstance: boolean, msg: IpRange): IpRange.AsObject;
    static serializeBinaryToWriter(message: IpRange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IpRange;
    static deserializeBinaryFromReader(message: IpRange, reader: jspb.BinaryReader): IpRange;
  }

  export namespace IpRange {
    export type AsObject = {
      ipFrom: string,
      ipTo: string,
    }
  }

}

export class ApiKey extends jspb.Message {
  getToken(): string;
  setToken(value: string): ApiKey;

  getValiduntil(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setValiduntil(value?: google_protobuf_timestamp_pb.Timestamp): ApiKey;
  hasValiduntil(): boolean;
  clearValiduntil(): ApiKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiKey.AsObject;
  static toObject(includeInstance: boolean, msg: ApiKey): ApiKey.AsObject;
  static serializeBinaryToWriter(message: ApiKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiKey;
  static deserializeBinaryFromReader(message: ApiKey, reader: jspb.BinaryReader): ApiKey;
}

export namespace ApiKey {
  export type AsObject = {
    token: string,
    validuntil?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class RoleMapping extends jspb.Message {
  getApiKey(): ApiKey | undefined;
  setApiKey(value?: ApiKey): RoleMapping;
  hasApiKey(): boolean;
  clearApiKey(): RoleMapping;

  getEmail(): string;
  setEmail(value: string): RoleMapping;

  getGroup(): string;
  setGroup(value: string): RoleMapping;

  getRoleList(): Array<Role>;
  setRoleList(value: Array<Role>): RoleMapping;
  clearRoleList(): RoleMapping;
  addRole(value: Role, index?: number): RoleMapping;

  getEmailOrGroupCase(): RoleMapping.EmailOrGroupCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleMapping.AsObject;
  static toObject(includeInstance: boolean, msg: RoleMapping): RoleMapping.AsObject;
  static serializeBinaryToWriter(message: RoleMapping, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleMapping;
  static deserializeBinaryFromReader(message: RoleMapping, reader: jspb.BinaryReader): RoleMapping;
}

export namespace RoleMapping {
  export type AsObject = {
    apiKey?: ApiKey.AsObject,
    email: string,
    group: string,
    roleList: Array<Role>,
  }

  export enum EmailOrGroupCase { 
    EMAIL_OR_GROUP_NOT_SET = 0,
    API_KEY = 1,
    EMAIL = 2,
    GROUP = 3,
  }
}

export class Collection extends jspb.Message {
  getCollectionDedupPolicy(): Collection.RotationPolicy;
  setCollectionDedupPolicy(value: Collection.RotationPolicy): Collection;

  getFileRotationPolicy(): Collection.RotationPolicy;
  setFileRotationPolicy(value: Collection.RotationPolicy): Collection;

  getCompress(): boolean;
  setCompress(value: boolean): Collection;

  getFileSize(): number;
  setFileSize(value: number): Collection;

  getSubCollectionsList(): Array<Collection.SubCollection>;
  setSubCollectionsList(value: Array<Collection.SubCollection>): Collection;
  clearSubCollectionsList(): Collection;
  addSubCollections(value?: Collection.SubCollection, index?: number): Collection.SubCollection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Collection.AsObject;
  static toObject(includeInstance: boolean, msg: Collection): Collection.AsObject;
  static serializeBinaryToWriter(message: Collection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Collection;
  static deserializeBinaryFromReader(message: Collection, reader: jspb.BinaryReader): Collection;
}

export namespace Collection {
  export type AsObject = {
    collectionDedupPolicy: Collection.RotationPolicy,
    fileRotationPolicy: Collection.RotationPolicy,
    compress: boolean,
    fileSize: number,
    subCollectionsList: Array<Collection.SubCollection.AsObject>,
  }

  export class SubCollection extends jspb.Message {
    getType(): Collection.SubCollectionType;
    setType(value: Collection.SubCollectionType): SubCollection;

    getName(): string;
    setName(value: string): SubCollection;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubCollection.AsObject;
    static toObject(includeInstance: boolean, msg: SubCollection): SubCollection.AsObject;
    static serializeBinaryToWriter(message: SubCollection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubCollection;
    static deserializeBinaryFromReader(message: SubCollection, reader: jspb.BinaryReader): SubCollection;
  }

  export namespace SubCollection {
    export type AsObject = {
      type: Collection.SubCollectionType,
      name: string,
    }
  }


  export enum RotationPolicy { 
    NONE = 0,
    HOURLY = 1,
    DAILY = 2,
    MONTHLY = 3,
    YEARLY = 4,
  }

  export enum SubCollectionType { 
    UNDEFINED = 0,
    SCREENSHOT = 1,
    DNS = 2,
  }
}

export class LogLevels extends jspb.Message {
  getLogLevelList(): Array<LogLevels.LogLevel>;
  setLogLevelList(value: Array<LogLevels.LogLevel>): LogLevels;
  clearLogLevelList(): LogLevels;
  addLogLevel(value?: LogLevels.LogLevel, index?: number): LogLevels.LogLevel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogLevels.AsObject;
  static toObject(includeInstance: boolean, msg: LogLevels): LogLevels.AsObject;
  static serializeBinaryToWriter(message: LogLevels, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogLevels;
  static deserializeBinaryFromReader(message: LogLevels, reader: jspb.BinaryReader): LogLevels;
}

export namespace LogLevels {
  export type AsObject = {
    logLevelList: Array<LogLevels.LogLevel.AsObject>,
  }

  export class LogLevel extends jspb.Message {
    getLogger(): string;
    setLogger(value: string): LogLevel;

    getLevel(): LogLevels.Level;
    setLevel(value: LogLevels.Level): LogLevel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogLevel.AsObject;
    static toObject(includeInstance: boolean, msg: LogLevel): LogLevel.AsObject;
    static serializeBinaryToWriter(message: LogLevel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogLevel;
    static deserializeBinaryFromReader(message: LogLevel, reader: jspb.BinaryReader): LogLevel;
  }

  export namespace LogLevel {
    export type AsObject = {
      logger: string,
      level: LogLevels.Level,
    }
  }


  export enum Level { 
    UNDEFINED = 0,
    ALL = 1,
    TRACE = 2,
    DEBUG = 3,
    INFO = 4,
    WARN = 5,
    ERROR = 6,
    FATAL = 7,
    OFF = 8,
  }
}

export enum Kind { 
  UNDEFINED = 0,
  CRAWLENTITY = 5,
  SEED = 6,
  CRAWLJOB = 7,
  CRAWLCONFIG = 8,
  CRAWLSCHEDULECONFIG = 9,
  BROWSERCONFIG = 10,
  POLITENESSCONFIG = 11,
  BROWSERSCRIPT = 12,
  CRAWLHOSTGROUPCONFIG = 13,
  ROLEMAPPING = 14,
  COLLECTION = 15,
}
export enum Role { 
  ANY_USER = 0,
  ANY = 1,
  ADMIN = 2,
  CURATOR = 3,
  READONLY = 4,
  OPERATOR = 5,
  SYSTEM = 6,
  CONSULTANT = 7,
}

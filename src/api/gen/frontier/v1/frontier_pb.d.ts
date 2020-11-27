import * as jspb from 'google-protobuf'

import * as commons_v1_resources_pb from '../../commons/v1/resources_pb';
import * as config_v1_resources_pb from '../../config/v1/resources_pb';
import * as frontier_v1_resources_pb from '../../frontier/v1/resources_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class CrawlSeedRequest extends jspb.Message {
  getJobExecutionId(): string;
  setJobExecutionId(value: string): CrawlSeedRequest;

  getJob(): config_v1_resources_pb.ConfigObject | undefined;
  setJob(value?: config_v1_resources_pb.ConfigObject): CrawlSeedRequest;
  hasJob(): boolean;
  clearJob(): CrawlSeedRequest;

  getSeed(): config_v1_resources_pb.ConfigObject | undefined;
  setSeed(value?: config_v1_resources_pb.ConfigObject): CrawlSeedRequest;
  hasSeed(): boolean;
  clearSeed(): CrawlSeedRequest;

  getTimeout(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimeout(value?: google_protobuf_timestamp_pb.Timestamp): CrawlSeedRequest;
  hasTimeout(): boolean;
  clearTimeout(): CrawlSeedRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CrawlSeedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CrawlSeedRequest): CrawlSeedRequest.AsObject;
  static serializeBinaryToWriter(message: CrawlSeedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CrawlSeedRequest;
  static deserializeBinaryFromReader(message: CrawlSeedRequest, reader: jspb.BinaryReader): CrawlSeedRequest;
}

export namespace CrawlSeedRequest {
  export type AsObject = {
    jobExecutionId: string,
    job?: config_v1_resources_pb.ConfigObject.AsObject,
    seed?: config_v1_resources_pb.ConfigObject.AsObject,
    timeout?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CrawlExecutionId extends jspb.Message {
  getId(): string;
  setId(value: string): CrawlExecutionId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CrawlExecutionId.AsObject;
  static toObject(includeInstance: boolean, msg: CrawlExecutionId): CrawlExecutionId.AsObject;
  static serializeBinaryToWriter(message: CrawlExecutionId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CrawlExecutionId;
  static deserializeBinaryFromReader(message: CrawlExecutionId, reader: jspb.BinaryReader): CrawlExecutionId;
}

export namespace CrawlExecutionId {
  export type AsObject = {
    id: string,
  }
}

export class PageHarvest extends jspb.Message {
  getRequestnextpage(): boolean;
  setRequestnextpage(value: boolean): PageHarvest;

  getMetrics(): PageHarvest.Metrics | undefined;
  setMetrics(value?: PageHarvest.Metrics): PageHarvest;
  hasMetrics(): boolean;
  clearMetrics(): PageHarvest;

  getOutlink(): frontier_v1_resources_pb.QueuedUri | undefined;
  setOutlink(value?: frontier_v1_resources_pb.QueuedUri): PageHarvest;
  hasOutlink(): boolean;
  clearOutlink(): PageHarvest;

  getError(): commons_v1_resources_pb.Error | undefined;
  setError(value?: commons_v1_resources_pb.Error): PageHarvest;
  hasError(): boolean;
  clearError(): PageHarvest;

  getMsgCase(): PageHarvest.MsgCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PageHarvest.AsObject;
  static toObject(includeInstance: boolean, msg: PageHarvest): PageHarvest.AsObject;
  static serializeBinaryToWriter(message: PageHarvest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PageHarvest;
  static deserializeBinaryFromReader(message: PageHarvest, reader: jspb.BinaryReader): PageHarvest;
}

export namespace PageHarvest {
  export type AsObject = {
    requestnextpage: boolean,
    metrics?: PageHarvest.Metrics.AsObject,
    outlink?: frontier_v1_resources_pb.QueuedUri.AsObject,
    error?: commons_v1_resources_pb.Error.AsObject,
  }

  export class Metrics extends jspb.Message {
    getUriCount(): number;
    setUriCount(value: number): Metrics;

    getBytesDownloaded(): number;
    setBytesDownloaded(value: number): Metrics;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Metrics.AsObject;
    static toObject(includeInstance: boolean, msg: Metrics): Metrics.AsObject;
    static serializeBinaryToWriter(message: Metrics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Metrics;
    static deserializeBinaryFromReader(message: Metrics, reader: jspb.BinaryReader): Metrics;
  }

  export namespace Metrics {
    export type AsObject = {
      uriCount: number,
      bytesDownloaded: number,
    }
  }


  export enum MsgCase { 
    MSG_NOT_SET = 0,
    REQUESTNEXTPAGE = 1,
    METRICS = 2,
    OUTLINK = 3,
    ERROR = 4,
  }
}

export class PageHarvestSpec extends jspb.Message {
  getQueuedUri(): frontier_v1_resources_pb.QueuedUri | undefined;
  setQueuedUri(value?: frontier_v1_resources_pb.QueuedUri): PageHarvestSpec;
  hasQueuedUri(): boolean;
  clearQueuedUri(): PageHarvestSpec;

  getCrawlConfig(): config_v1_resources_pb.ConfigObject | undefined;
  setCrawlConfig(value?: config_v1_resources_pb.ConfigObject): PageHarvestSpec;
  hasCrawlConfig(): boolean;
  clearCrawlConfig(): PageHarvestSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PageHarvestSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PageHarvestSpec): PageHarvestSpec.AsObject;
  static serializeBinaryToWriter(message: PageHarvestSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PageHarvestSpec;
  static deserializeBinaryFromReader(message: PageHarvestSpec, reader: jspb.BinaryReader): PageHarvestSpec;
}

export namespace PageHarvestSpec {
  export type AsObject = {
    queuedUri?: frontier_v1_resources_pb.QueuedUri.AsObject,
    crawlConfig?: config_v1_resources_pb.ConfigObject.AsObject,
  }
}

export class CountResponse extends jspb.Message {
  getCount(): number;
  setCount(value: number): CountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountResponse): CountResponse.AsObject;
  static serializeBinaryToWriter(message: CountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountResponse;
  static deserializeBinaryFromReader(message: CountResponse, reader: jspb.BinaryReader): CountResponse;
}

export namespace CountResponse {
  export type AsObject = {
    count: number,
  }
}


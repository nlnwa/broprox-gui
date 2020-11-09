import * as jspb from 'google-protobuf'

import * as controller_v1_resources_pb from '../../controller/v1/resources_pb';
import * as frontier_v1_frontier_pb from '../../frontier/v1/frontier_pb';
import * as frontier_v1_resources_pb from '../../frontier/v1/resources_pb';
import * as config_v1_resources_pb from '../../config/v1/resources_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class RunCrawlRequest extends jspb.Message {
  getJobId(): string;
  setJobId(value: string): RunCrawlRequest;

  getSeedId(): string;
  setSeedId(value: string): RunCrawlRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunCrawlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunCrawlRequest): RunCrawlRequest.AsObject;
  static serializeBinaryToWriter(message: RunCrawlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunCrawlRequest;
  static deserializeBinaryFromReader(message: RunCrawlRequest, reader: jspb.BinaryReader): RunCrawlRequest;
}

export namespace RunCrawlRequest {
  export type AsObject = {
    jobId: string,
    seedId: string,
  }
}

export class RunCrawlReply extends jspb.Message {
  getJobExecutionId(): string;
  setJobExecutionId(value: string): RunCrawlReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunCrawlReply.AsObject;
  static toObject(includeInstance: boolean, msg: RunCrawlReply): RunCrawlReply.AsObject;
  static serializeBinaryToWriter(message: RunCrawlReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunCrawlReply;
  static deserializeBinaryFromReader(message: RunCrawlReply, reader: jspb.BinaryReader): RunCrawlReply;
}

export namespace RunCrawlReply {
  export type AsObject = {
    jobExecutionId: string,
  }
}

export class RoleList extends jspb.Message {
  getRoleList(): Array<config_v1_resources_pb.Role>;
  setRoleList(value: Array<config_v1_resources_pb.Role>): RoleList;
  clearRoleList(): RoleList;
  addRole(value: config_v1_resources_pb.Role, index?: number): RoleList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoleList.AsObject;
  static toObject(includeInstance: boolean, msg: RoleList): RoleList.AsObject;
  static serializeBinaryToWriter(message: RoleList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoleList;
  static deserializeBinaryFromReader(message: RoleList, reader: jspb.BinaryReader): RoleList;
}

export namespace RoleList {
  export type AsObject = {
    roleList: Array<config_v1_resources_pb.Role>,
  }
}

export class OpenIdConnectIssuerReply extends jspb.Message {
  getOpenIdConnectIssuer(): string;
  setOpenIdConnectIssuer(value: string): OpenIdConnectIssuerReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenIdConnectIssuerReply.AsObject;
  static toObject(includeInstance: boolean, msg: OpenIdConnectIssuerReply): OpenIdConnectIssuerReply.AsObject;
  static serializeBinaryToWriter(message: OpenIdConnectIssuerReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenIdConnectIssuerReply;
  static deserializeBinaryFromReader(message: OpenIdConnectIssuerReply, reader: jspb.BinaryReader): OpenIdConnectIssuerReply;
}

export namespace OpenIdConnectIssuerReply {
  export type AsObject = {
    openIdConnectIssuer: string,
  }
}

export class CrawlerStatus extends jspb.Message {
  getRunstatus(): RunStatus;
  setRunstatus(value: RunStatus): CrawlerStatus;

  getBusycrawlhostgroupcount(): number;
  setBusycrawlhostgroupcount(value: number): CrawlerStatus;

  getQueuesize(): number;
  setQueuesize(value: number): CrawlerStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CrawlerStatus.AsObject;
  static toObject(includeInstance: boolean, msg: CrawlerStatus): CrawlerStatus.AsObject;
  static serializeBinaryToWriter(message: CrawlerStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CrawlerStatus;
  static deserializeBinaryFromReader(message: CrawlerStatus, reader: jspb.BinaryReader): CrawlerStatus;
}

export namespace CrawlerStatus {
  export type AsObject = {
    runstatus: RunStatus,
    busycrawlhostgroupcount: number,
    queuesize: number,
  }
}

export enum RunStatus { 
  RUNNING = 0,
  PAUSED = 1,
  PAUSE_REQUESTED = 2,
}

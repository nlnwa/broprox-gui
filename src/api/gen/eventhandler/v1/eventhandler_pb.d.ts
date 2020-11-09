import * as jspb from 'google-protobuf'

import * as eventhandler_v1_resources_pb from '../../eventhandler/v1/resources_pb';
import * as commons_v1_resources_pb from '../../commons/v1/resources_pb';


export class ListRequest extends jspb.Message {
  getIdList(): Array<string>;
  setIdList(value: Array<string>): ListRequest;
  clearIdList(): ListRequest;
  addId(value: string, index?: number): ListRequest;

  getQueryTemplate(): eventhandler_v1_resources_pb.EventObject | undefined;
  setQueryTemplate(value?: eventhandler_v1_resources_pb.EventObject): ListRequest;
  hasQueryTemplate(): boolean;
  clearQueryTemplate(): ListRequest;

  getQueryMask(): commons_v1_resources_pb.FieldMask | undefined;
  setQueryMask(value?: commons_v1_resources_pb.FieldMask): ListRequest;
  hasQueryMask(): boolean;
  clearQueryMask(): ListRequest;

  getReturnedFieldsMask(): commons_v1_resources_pb.FieldMask | undefined;
  setReturnedFieldsMask(value?: commons_v1_resources_pb.FieldMask): ListRequest;
  hasReturnedFieldsMask(): boolean;
  clearReturnedFieldsMask(): ListRequest;

  getPageSize(): number;
  setPageSize(value: number): ListRequest;

  getOffset(): number;
  setOffset(value: number): ListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
  static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequest;
  static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
  export type AsObject = {
    idList: Array<string>,
    queryTemplate?: eventhandler_v1_resources_pb.EventObject.AsObject,
    queryMask?: commons_v1_resources_pb.FieldMask.AsObject,
    returnedFieldsMask?: commons_v1_resources_pb.FieldMask.AsObject,
    pageSize: number,
    offset: number,
  }
}

export class UpdateRequest extends jspb.Message {
  getListRequest(): ListRequest | undefined;
  setListRequest(value?: ListRequest): UpdateRequest;
  hasListRequest(): boolean;
  clearListRequest(): UpdateRequest;

  getUpdateMask(): commons_v1_resources_pb.FieldMask | undefined;
  setUpdateMask(value?: commons_v1_resources_pb.FieldMask): UpdateRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateRequest;

  getUpdateTemplate(): eventhandler_v1_resources_pb.EventObject | undefined;
  setUpdateTemplate(value?: eventhandler_v1_resources_pb.EventObject): UpdateRequest;
  hasUpdateTemplate(): boolean;
  clearUpdateTemplate(): UpdateRequest;

  getComment(): string;
  setComment(value: string): UpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRequest): UpdateRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRequest;
  static deserializeBinaryFromReader(message: UpdateRequest, reader: jspb.BinaryReader): UpdateRequest;
}

export namespace UpdateRequest {
  export type AsObject = {
    listRequest?: ListRequest.AsObject,
    updateMask?: commons_v1_resources_pb.FieldMask.AsObject,
    updateTemplate?: eventhandler_v1_resources_pb.EventObject.AsObject,
    comment: string,
  }
}

export class SaveRequest extends jspb.Message {
  getObject(): eventhandler_v1_resources_pb.EventObject | undefined;
  setObject(value?: eventhandler_v1_resources_pb.EventObject): SaveRequest;
  hasObject(): boolean;
  clearObject(): SaveRequest;

  getComment(): string;
  setComment(value: string): SaveRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SaveRequest): SaveRequest.AsObject;
  static serializeBinaryToWriter(message: SaveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveRequest;
  static deserializeBinaryFromReader(message: SaveRequest, reader: jspb.BinaryReader): SaveRequest;
}

export namespace SaveRequest {
  export type AsObject = {
    object?: eventhandler_v1_resources_pb.EventObject.AsObject,
    comment: string,
  }
}

export class UpdateResponse extends jspb.Message {
  getUpdated(): number;
  setUpdated(value: number): UpdateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateResponse): UpdateResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateResponse;
  static deserializeBinaryFromReader(message: UpdateResponse, reader: jspb.BinaryReader): UpdateResponse;
}

export namespace UpdateResponse {
  export type AsObject = {
    updated: number,
  }
}

export class ListCountResponse extends jspb.Message {
  getCount(): number;
  setCount(value: number): ListCountResponse;

  getApproximate(): boolean;
  setApproximate(value: boolean): ListCountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCountResponse): ListCountResponse.AsObject;
  static serializeBinaryToWriter(message: ListCountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCountResponse;
  static deserializeBinaryFromReader(message: ListCountResponse, reader: jspb.BinaryReader): ListCountResponse;
}

export namespace ListCountResponse {
  export type AsObject = {
    count: number,
    approximate: boolean,
  }
}

export class DeleteResponse extends jspb.Message {
  getDeleted(): boolean;
  setDeleted(value: boolean): DeleteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResponse;
  static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
  export type AsObject = {
    deleted: boolean,
  }
}

export class ListLabelRequest extends jspb.Message {
  getText(): string;
  setText(value: string): ListLabelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLabelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLabelRequest): ListLabelRequest.AsObject;
  static serializeBinaryToWriter(message: ListLabelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLabelRequest;
  static deserializeBinaryFromReader(message: ListLabelRequest, reader: jspb.BinaryReader): ListLabelRequest;
}

export namespace ListLabelRequest {
  export type AsObject = {
    text: string,
  }
}

export class ListLabelResponse extends jspb.Message {
  getLabelList(): Array<string>;
  setLabelList(value: Array<string>): ListLabelResponse;
  clearLabelList(): ListLabelResponse;
  addLabel(value: string, index?: number): ListLabelResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLabelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLabelResponse): ListLabelResponse.AsObject;
  static serializeBinaryToWriter(message: ListLabelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLabelResponse;
  static deserializeBinaryFromReader(message: ListLabelResponse, reader: jspb.BinaryReader): ListLabelResponse;
}

export namespace ListLabelResponse {
  export type AsObject = {
    labelList: Array<string>,
  }
}


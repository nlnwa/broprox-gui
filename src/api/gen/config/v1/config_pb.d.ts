import * as jspb from 'google-protobuf'

import * as config_v1_resources_pb from '../../config/v1/resources_pb';
import * as commons_v1_resources_pb from '../../commons/v1/resources_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class GetScriptAnnotationsRequest extends jspb.Message {
  getJob(): config_v1_resources_pb.ConfigRef | undefined;
  setJob(value?: config_v1_resources_pb.ConfigRef): GetScriptAnnotationsRequest;
  hasJob(): boolean;
  clearJob(): GetScriptAnnotationsRequest;

  getSeed(): config_v1_resources_pb.ConfigRef | undefined;
  setSeed(value?: config_v1_resources_pb.ConfigRef): GetScriptAnnotationsRequest;
  hasSeed(): boolean;
  clearSeed(): GetScriptAnnotationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScriptAnnotationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetScriptAnnotationsRequest): GetScriptAnnotationsRequest.AsObject;
  static serializeBinaryToWriter(message: GetScriptAnnotationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScriptAnnotationsRequest;
  static deserializeBinaryFromReader(message: GetScriptAnnotationsRequest, reader: jspb.BinaryReader): GetScriptAnnotationsRequest;
}

export namespace GetScriptAnnotationsRequest {
  export type AsObject = {
    job?: config_v1_resources_pb.ConfigRef.AsObject,
    seed?: config_v1_resources_pb.ConfigRef.AsObject,
  }
}

export class GetScriptAnnotationsResponse extends jspb.Message {
  getAnnotationList(): Array<config_v1_resources_pb.Annotation>;
  setAnnotationList(value: Array<config_v1_resources_pb.Annotation>): GetScriptAnnotationsResponse;
  clearAnnotationList(): GetScriptAnnotationsResponse;
  addAnnotation(value?: config_v1_resources_pb.Annotation, index?: number): config_v1_resources_pb.Annotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScriptAnnotationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetScriptAnnotationsResponse): GetScriptAnnotationsResponse.AsObject;
  static serializeBinaryToWriter(message: GetScriptAnnotationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScriptAnnotationsResponse;
  static deserializeBinaryFromReader(message: GetScriptAnnotationsResponse, reader: jspb.BinaryReader): GetScriptAnnotationsResponse;
}

export namespace GetScriptAnnotationsResponse {
  export type AsObject = {
    annotationList: Array<config_v1_resources_pb.Annotation.AsObject>,
  }
}

export class GetLabelKeysRequest extends jspb.Message {
  getKind(): config_v1_resources_pb.Kind;
  setKind(value: config_v1_resources_pb.Kind): GetLabelKeysRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLabelKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLabelKeysRequest): GetLabelKeysRequest.AsObject;
  static serializeBinaryToWriter(message: GetLabelKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLabelKeysRequest;
  static deserializeBinaryFromReader(message: GetLabelKeysRequest, reader: jspb.BinaryReader): GetLabelKeysRequest;
}

export namespace GetLabelKeysRequest {
  export type AsObject = {
    kind: config_v1_resources_pb.Kind,
  }
}

export class ListRequest extends jspb.Message {
  getKind(): config_v1_resources_pb.Kind;
  setKind(value: config_v1_resources_pb.Kind): ListRequest;

  getIdList(): Array<string>;
  setIdList(value: Array<string>): ListRequest;
  clearIdList(): ListRequest;
  addId(value: string, index?: number): ListRequest;

  getNameRegex(): string;
  setNameRegex(value: string): ListRequest;

  getLabelSelectorList(): Array<string>;
  setLabelSelectorList(value: Array<string>): ListRequest;
  clearLabelSelectorList(): ListRequest;
  addLabelSelector(value: string, index?: number): ListRequest;

  getQueryTemplate(): config_v1_resources_pb.ConfigObject | undefined;
  setQueryTemplate(value?: config_v1_resources_pb.ConfigObject): ListRequest;
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

  getOrderByPath(): string;
  setOrderByPath(value: string): ListRequest;

  getOrderDescending(): boolean;
  setOrderDescending(value: boolean): ListRequest;

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
    kind: config_v1_resources_pb.Kind,
    idList: Array<string>,
    nameRegex: string,
    labelSelectorList: Array<string>,
    queryTemplate?: config_v1_resources_pb.ConfigObject.AsObject,
    queryMask?: commons_v1_resources_pb.FieldMask.AsObject,
    returnedFieldsMask?: commons_v1_resources_pb.FieldMask.AsObject,
    orderByPath: string,
    orderDescending: boolean,
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

  getUpdateTemplate(): config_v1_resources_pb.ConfigObject | undefined;
  setUpdateTemplate(value?: config_v1_resources_pb.ConfigObject): UpdateRequest;
  hasUpdateTemplate(): boolean;
  clearUpdateTemplate(): UpdateRequest;

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
    updateTemplate?: config_v1_resources_pb.ConfigObject.AsObject,
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

export class LabelKeysResponse extends jspb.Message {
  getKeyList(): Array<string>;
  setKeyList(value: Array<string>): LabelKeysResponse;
  clearKeyList(): LabelKeysResponse;
  addKey(value: string, index?: number): LabelKeysResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelKeysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LabelKeysResponse): LabelKeysResponse.AsObject;
  static serializeBinaryToWriter(message: LabelKeysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelKeysResponse;
  static deserializeBinaryFromReader(message: LabelKeysResponse, reader: jspb.BinaryReader): LabelKeysResponse;
}

export namespace LabelKeysResponse {
  export type AsObject = {
    keyList: Array<string>,
  }
}


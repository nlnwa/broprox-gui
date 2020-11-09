import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class EventObject extends jspb.Message {
  getId(): string;
  setId(value: string): EventObject;

  getType(): string;
  setType(value: string): EventObject;

  getSource(): string;
  setSource(value: string): EventObject;

  getState(): EventObject.State;
  setState(value: EventObject.State): EventObject;

  getAssignee(): string;
  setAssignee(value: string): EventObject;

  getDataList(): Array<Data>;
  setDataList(value: Array<Data>): EventObject;
  clearDataList(): EventObject;
  addData(value?: Data, index?: number): Data;

  getSeverity(): EventObject.Severity;
  setSeverity(value: EventObject.Severity): EventObject;

  getLabelList(): Array<string>;
  setLabelList(value: Array<string>): EventObject;
  clearLabelList(): EventObject;
  addLabel(value: string, index?: number): EventObject;

  getActivityList(): Array<Activity>;
  setActivityList(value: Array<Activity>): EventObject;
  clearActivityList(): EventObject;
  addActivity(value?: Activity, index?: number): Activity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventObject.AsObject;
  static toObject(includeInstance: boolean, msg: EventObject): EventObject.AsObject;
  static serializeBinaryToWriter(message: EventObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventObject;
  static deserializeBinaryFromReader(message: EventObject, reader: jspb.BinaryReader): EventObject;
}

export namespace EventObject {
  export type AsObject = {
    id: string,
    type: string,
    source: string,
    state: EventObject.State,
    assignee: string,
    dataList: Array<Data.AsObject>,
    severity: EventObject.Severity,
    labelList: Array<string>,
    activityList: Array<Activity.AsObject>,
  }

  export enum State { 
    NEW = 0,
    OPEN = 1,
    CLOSED = 2,
  }

  export enum Severity { 
    INFO = 0,
    WARN = 1,
    ERROR = 2,
  }
}

export class EventRef extends jspb.Message {
  getId(): string;
  setId(value: string): EventRef;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventRef.AsObject;
  static toObject(includeInstance: boolean, msg: EventRef): EventRef.AsObject;
  static serializeBinaryToWriter(message: EventRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventRef;
  static deserializeBinaryFromReader(message: EventRef, reader: jspb.BinaryReader): EventRef;
}

export namespace EventRef {
  export type AsObject = {
    id: string,
  }
}

export class Activity extends jspb.Message {
  getModifiedBy(): string;
  setModifiedBy(value: string): Activity;

  getModifiedTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedTime(value?: google_protobuf_timestamp_pb.Timestamp): Activity;
  hasModifiedTime(): boolean;
  clearModifiedTime(): Activity;

  getDescriptionList(): Array<Activity.Change>;
  setDescriptionList(value: Array<Activity.Change>): Activity;
  clearDescriptionList(): Activity;
  addDescription(value?: Activity.Change, index?: number): Activity.Change;

  getComment(): string;
  setComment(value: string): Activity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Activity.AsObject;
  static toObject(includeInstance: boolean, msg: Activity): Activity.AsObject;
  static serializeBinaryToWriter(message: Activity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Activity;
  static deserializeBinaryFromReader(message: Activity, reader: jspb.BinaryReader): Activity;
}

export namespace Activity {
  export type AsObject = {
    modifiedBy: string,
    modifiedTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    descriptionList: Array<Activity.Change.AsObject>,
    comment: string,
  }

  export class Change extends jspb.Message {
    getType(): Activity.ChangeType;
    setType(value: Activity.ChangeType): Change;

    getField(): string;
    setField(value: string): Change;

    getOldVal(): string;
    setOldVal(value: string): Change;

    getNewVal(): string;
    setNewVal(value: string): Change;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Change.AsObject;
    static toObject(includeInstance: boolean, msg: Change): Change.AsObject;
    static serializeBinaryToWriter(message: Change, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Change;
    static deserializeBinaryFromReader(message: Change, reader: jspb.BinaryReader): Change;
  }

  export namespace Change {
    export type AsObject = {
      type: Activity.ChangeType,
      field: string,
      oldVal: string,
      newVal: string,
    }
  }


  export enum ChangeType { 
    CREATED = 0,
    VALUE_CHANGED = 1,
    ARRAY_ADD = 2,
    ARRAY_DEL = 3,
  }
}

export class Data extends jspb.Message {
  getKey(): string;
  setKey(value: string): Data;

  getValue(): string;
  setValue(value: string): Data;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Data.AsObject;
  static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
  static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Data;
  static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
}

export namespace Data {
  export type AsObject = {
    key: string,
    value: string,
  }
}


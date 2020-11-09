import * as jspb from 'google-protobuf'



export class ExecutionId extends jspb.Message {
  getId(): string;
  setId(value: string): ExecutionId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutionId.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutionId): ExecutionId.AsObject;
  static serializeBinaryToWriter(message: ExecutionId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutionId;
  static deserializeBinaryFromReader(message: ExecutionId, reader: jspb.BinaryReader): ExecutionId;
}

export namespace ExecutionId {
  export type AsObject = {
    id: string,
  }
}


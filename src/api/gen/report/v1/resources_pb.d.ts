import * as jspb from 'google-protobuf'

import * as frontier_v1_resources_pb from '../../frontier/v1/resources_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class StatusDetail extends jspb.Message {
  getId(): string;
  setId(value: string): StatusDetail;

  getState(): frontier_v1_resources_pb.CrawlExecutionStatus.State;
  setState(value: frontier_v1_resources_pb.CrawlExecutionStatus.State): StatusDetail;

  getJobid(): string;
  setJobid(value: string): StatusDetail;

  getSeed(): string;
  setSeed(value: string): StatusDetail;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): StatusDetail;
  hasStartTime(): boolean;
  clearStartTime(): StatusDetail;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): StatusDetail;
  hasEndTime(): boolean;
  clearEndTime(): StatusDetail;

  getDocumentsCrawled(): number;
  setDocumentsCrawled(value: number): StatusDetail;

  getBytesCrawled(): number;
  setBytesCrawled(value: number): StatusDetail;

  getUrisCrawled(): number;
  setUrisCrawled(value: number): StatusDetail;

  getDocumentsFailed(): number;
  setDocumentsFailed(value: number): StatusDetail;

  getDocumentsOutOfScope(): number;
  setDocumentsOutOfScope(value: number): StatusDetail;

  getDocumentsRetried(): number;
  setDocumentsRetried(value: number): StatusDetail;

  getDocumentsDenied(): number;
  setDocumentsDenied(value: number): StatusDetail;

  getQueueSize(): number;
  setQueueSize(value: number): StatusDetail;

  getCurrentUri(): string;
  setCurrentUri(value: string): StatusDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusDetail.AsObject;
  static toObject(includeInstance: boolean, msg: StatusDetail): StatusDetail.AsObject;
  static serializeBinaryToWriter(message: StatusDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusDetail;
  static deserializeBinaryFromReader(message: StatusDetail, reader: jspb.BinaryReader): StatusDetail;
}

export namespace StatusDetail {
  export type AsObject = {
    id: string,
    state: frontier_v1_resources_pb.CrawlExecutionStatus.State,
    jobid: string,
    seed: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    documentsCrawled: number,
    bytesCrawled: number,
    urisCrawled: number,
    documentsFailed: number,
    documentsOutOfScope: number,
    documentsRetried: number,
    documentsDenied: number,
    queueSize: number,
    currentUri: string,
  }
}


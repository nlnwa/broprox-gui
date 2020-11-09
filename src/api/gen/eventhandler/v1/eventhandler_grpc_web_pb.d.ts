import * as grpcWeb from 'grpc-web';

import * as eventhandler_v1_resources_pb from '../../eventhandler/v1/resources_pb';
import * as eventhandler_v1_eventhandler_pb from '../../eventhandler/v1/eventhandler_pb';


export class EventHandlerClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getEventObject(
    request: eventhandler_v1_resources_pb.EventRef,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: eventhandler_v1_resources_pb.EventObject) => void
  ): grpcWeb.ClientReadableStream<eventhandler_v1_resources_pb.EventObject>;

  listEventObjects(
    request: eventhandler_v1_eventhandler_pb.ListRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<eventhandler_v1_resources_pb.EventObject>;

  countEventObjects(
    request: eventhandler_v1_eventhandler_pb.ListRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: eventhandler_v1_eventhandler_pb.ListCountResponse) => void
  ): grpcWeb.ClientReadableStream<eventhandler_v1_eventhandler_pb.ListCountResponse>;

  saveEventObject(
    request: eventhandler_v1_eventhandler_pb.SaveRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: eventhandler_v1_resources_pb.EventObject) => void
  ): grpcWeb.ClientReadableStream<eventhandler_v1_resources_pb.EventObject>;

  updateEventObjects(
    request: eventhandler_v1_eventhandler_pb.UpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: eventhandler_v1_eventhandler_pb.UpdateResponse) => void
  ): grpcWeb.ClientReadableStream<eventhandler_v1_eventhandler_pb.UpdateResponse>;

  deleteEventObject(
    request: eventhandler_v1_resources_pb.EventObject,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: eventhandler_v1_eventhandler_pb.DeleteResponse) => void
  ): grpcWeb.ClientReadableStream<eventhandler_v1_eventhandler_pb.DeleteResponse>;

  listLabels(
    request: eventhandler_v1_eventhandler_pb.ListLabelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: eventhandler_v1_eventhandler_pb.ListLabelResponse) => void
  ): grpcWeb.ClientReadableStream<eventhandler_v1_eventhandler_pb.ListLabelResponse>;

}

export class EventHandlerPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getEventObject(
    request: eventhandler_v1_resources_pb.EventRef,
    metadata?: grpcWeb.Metadata
  ): Promise<eventhandler_v1_resources_pb.EventObject>;

  listEventObjects(
    request: eventhandler_v1_eventhandler_pb.ListRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<eventhandler_v1_resources_pb.EventObject>;

  countEventObjects(
    request: eventhandler_v1_eventhandler_pb.ListRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<eventhandler_v1_eventhandler_pb.ListCountResponse>;

  saveEventObject(
    request: eventhandler_v1_eventhandler_pb.SaveRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<eventhandler_v1_resources_pb.EventObject>;

  updateEventObjects(
    request: eventhandler_v1_eventhandler_pb.UpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<eventhandler_v1_eventhandler_pb.UpdateResponse>;

  deleteEventObject(
    request: eventhandler_v1_resources_pb.EventObject,
    metadata?: grpcWeb.Metadata
  ): Promise<eventhandler_v1_eventhandler_pb.DeleteResponse>;

  listLabels(
    request: eventhandler_v1_eventhandler_pb.ListLabelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<eventhandler_v1_eventhandler_pb.ListLabelResponse>;

}


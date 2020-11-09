import * as grpcWeb from 'grpc-web';

import * as config_v1_resources_pb from '../../config/v1/resources_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as config_v1_config_pb from '../../config/v1/config_pb';


export class ConfigClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getConfigObject(
    request: config_v1_resources_pb.ConfigRef,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: config_v1_resources_pb.ConfigObject) => void
  ): grpcWeb.ClientReadableStream<config_v1_resources_pb.ConfigObject>;

  listConfigObjects(
    request: config_v1_config_pb.ListRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<config_v1_resources_pb.ConfigObject>;

  countConfigObjects(
    request: config_v1_config_pb.ListRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: config_v1_config_pb.ListCountResponse) => void
  ): grpcWeb.ClientReadableStream<config_v1_config_pb.ListCountResponse>;

  saveConfigObject(
    request: config_v1_resources_pb.ConfigObject,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: config_v1_resources_pb.ConfigObject) => void
  ): grpcWeb.ClientReadableStream<config_v1_resources_pb.ConfigObject>;

  updateConfigObjects(
    request: config_v1_config_pb.UpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: config_v1_config_pb.UpdateResponse) => void
  ): grpcWeb.ClientReadableStream<config_v1_config_pb.UpdateResponse>;

  deleteConfigObject(
    request: config_v1_resources_pb.ConfigObject,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: config_v1_config_pb.DeleteResponse) => void
  ): grpcWeb.ClientReadableStream<config_v1_config_pb.DeleteResponse>;

  getLabelKeys(
    request: config_v1_config_pb.GetLabelKeysRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: config_v1_config_pb.LabelKeysResponse) => void
  ): grpcWeb.ClientReadableStream<config_v1_config_pb.LabelKeysResponse>;

  getLogConfig(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: config_v1_resources_pb.LogLevels) => void
  ): grpcWeb.ClientReadableStream<config_v1_resources_pb.LogLevels>;

  saveLogConfig(
    request: config_v1_resources_pb.LogLevels,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: config_v1_resources_pb.LogLevels) => void
  ): grpcWeb.ClientReadableStream<config_v1_resources_pb.LogLevels>;

}

export class ConfigPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getConfigObject(
    request: config_v1_resources_pb.ConfigRef,
    metadata?: grpcWeb.Metadata
  ): Promise<config_v1_resources_pb.ConfigObject>;

  listConfigObjects(
    request: config_v1_config_pb.ListRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<config_v1_resources_pb.ConfigObject>;

  countConfigObjects(
    request: config_v1_config_pb.ListRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<config_v1_config_pb.ListCountResponse>;

  saveConfigObject(
    request: config_v1_resources_pb.ConfigObject,
    metadata?: grpcWeb.Metadata
  ): Promise<config_v1_resources_pb.ConfigObject>;

  updateConfigObjects(
    request: config_v1_config_pb.UpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<config_v1_config_pb.UpdateResponse>;

  deleteConfigObject(
    request: config_v1_resources_pb.ConfigObject,
    metadata?: grpcWeb.Metadata
  ): Promise<config_v1_config_pb.DeleteResponse>;

  getLabelKeys(
    request: config_v1_config_pb.GetLabelKeysRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<config_v1_config_pb.LabelKeysResponse>;

  getLogConfig(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<config_v1_resources_pb.LogLevels>;

  saveLogConfig(
    request: config_v1_resources_pb.LogLevels,
    metadata?: grpcWeb.Metadata
  ): Promise<config_v1_resources_pb.LogLevels>;

}


import * as grpcWeb from 'grpc-web';

import * as frontier_v1_resources_pb from '../../frontier/v1/resources_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as frontier_v1_frontier_pb from '../../frontier/v1/frontier_pb';


export class FrontierClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  crawlSeed(
    request: frontier_v1_frontier_pb.CrawlSeedRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: frontier_v1_frontier_pb.CrawlExecutionId) => void
  ): grpcWeb.ClientReadableStream<frontier_v1_frontier_pb.CrawlExecutionId>;

  busyCrawlHostGroupCount(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: frontier_v1_frontier_pb.CountResponse) => void
  ): grpcWeb.ClientReadableStream<frontier_v1_frontier_pb.CountResponse>;

  queueCountTotal(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: frontier_v1_frontier_pb.CountResponse) => void
  ): grpcWeb.ClientReadableStream<frontier_v1_frontier_pb.CountResponse>;

  queueCountForCrawlExecution(
    request: frontier_v1_frontier_pb.CrawlExecutionId,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: frontier_v1_frontier_pb.CountResponse) => void
  ): grpcWeb.ClientReadableStream<frontier_v1_frontier_pb.CountResponse>;

  queueCountForCrawlHostGroup(
    request: frontier_v1_resources_pb.CrawlHostGroup,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: frontier_v1_frontier_pb.CountResponse) => void
  ): grpcWeb.ClientReadableStream<frontier_v1_frontier_pb.CountResponse>;

}

export class FrontierPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  crawlSeed(
    request: frontier_v1_frontier_pb.CrawlSeedRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<frontier_v1_frontier_pb.CrawlExecutionId>;

  busyCrawlHostGroupCount(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<frontier_v1_frontier_pb.CountResponse>;

  queueCountTotal(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<frontier_v1_frontier_pb.CountResponse>;

  queueCountForCrawlExecution(
    request: frontier_v1_frontier_pb.CrawlExecutionId,
    metadata?: grpcWeb.Metadata
  ): Promise<frontier_v1_frontier_pb.CountResponse>;

  queueCountForCrawlHostGroup(
    request: frontier_v1_resources_pb.CrawlHostGroup,
    metadata?: grpcWeb.Metadata
  ): Promise<frontier_v1_frontier_pb.CountResponse>;

}


import * as grpcWeb from 'grpc-web';

import * as controller_v1_resources_pb from '../../controller/v1/resources_pb';
import * as frontier_v1_resources_pb from '../../frontier/v1/resources_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as frontier_v1_frontier_pb from '../../frontier/v1/frontier_pb';
import * as controller_v1_controller_pb from '../../controller/v1/controller_pb';


export class ControllerClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getRolesForActiveUser(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: controller_v1_controller_pb.RoleList) => void
  ): grpcWeb.ClientReadableStream<controller_v1_controller_pb.RoleList>;

  runCrawl(
    request: controller_v1_controller_pb.RunCrawlRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: controller_v1_controller_pb.RunCrawlReply) => void
  ): grpcWeb.ClientReadableStream<controller_v1_controller_pb.RunCrawlReply>;

  abortCrawlExecution(
    request: controller_v1_resources_pb.ExecutionId,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: frontier_v1_resources_pb.CrawlExecutionStatus) => void
  ): grpcWeb.ClientReadableStream<frontier_v1_resources_pb.CrawlExecutionStatus>;

  abortJobExecution(
    request: controller_v1_resources_pb.ExecutionId,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: frontier_v1_resources_pb.JobExecutionStatus) => void
  ): grpcWeb.ClientReadableStream<frontier_v1_resources_pb.JobExecutionStatus>;

  getOpenIdConnectIssuer(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: controller_v1_controller_pb.OpenIdConnectIssuerReply) => void
  ): grpcWeb.ClientReadableStream<controller_v1_controller_pb.OpenIdConnectIssuerReply>;

  pauseCrawler(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  unPauseCrawler(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  status(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: controller_v1_controller_pb.CrawlerStatus) => void
  ): grpcWeb.ClientReadableStream<controller_v1_controller_pb.CrawlerStatus>;

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

export class ControllerPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getRolesForActiveUser(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<controller_v1_controller_pb.RoleList>;

  runCrawl(
    request: controller_v1_controller_pb.RunCrawlRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<controller_v1_controller_pb.RunCrawlReply>;

  abortCrawlExecution(
    request: controller_v1_resources_pb.ExecutionId,
    metadata?: grpcWeb.Metadata
  ): Promise<frontier_v1_resources_pb.CrawlExecutionStatus>;

  abortJobExecution(
    request: controller_v1_resources_pb.ExecutionId,
    metadata?: grpcWeb.Metadata
  ): Promise<frontier_v1_resources_pb.JobExecutionStatus>;

  getOpenIdConnectIssuer(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<controller_v1_controller_pb.OpenIdConnectIssuerReply>;

  pauseCrawler(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  unPauseCrawler(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  status(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<controller_v1_controller_pb.CrawlerStatus>;

  queueCountForCrawlExecution(
    request: frontier_v1_frontier_pb.CrawlExecutionId,
    metadata?: grpcWeb.Metadata
  ): Promise<frontier_v1_frontier_pb.CountResponse>;

  queueCountForCrawlHostGroup(
    request: frontier_v1_resources_pb.CrawlHostGroup,
    metadata?: grpcWeb.Metadata
  ): Promise<frontier_v1_frontier_pb.CountResponse>;

}


/**
 * @fileoverview gRPC-Web generated client stub for veidemann.api.controller.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var controller_v1_resources_pb = require('../../controller/v1/resources_pb.js')

var frontier_v1_frontier_pb = require('../../frontier/v1/frontier_pb.js')

var frontier_v1_resources_pb = require('../../frontier/v1/resources_pb.js')

var config_v1_resources_pb = require('../../config/v1/resources_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.veidemann = {};
proto.veidemann.api = {};
proto.veidemann.api.controller = {};
proto.veidemann.api.controller.v1 = require('./controller_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.veidemann.api.controller.v1.ControllerClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.veidemann.api.controller.v1.ControllerPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.veidemann.api.controller.v1.RoleList>}
 */
const methodDescriptor_Controller_GetRolesForActiveUser = new grpc.web.MethodDescriptor(
  '/veidemann.api.controller.v1.Controller/GetRolesForActiveUser',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.veidemann.api.controller.v1.RoleList,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.veidemann.api.controller.v1.RoleList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.veidemann.api.controller.v1.RoleList>}
 */
const methodInfo_Controller_GetRolesForActiveUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.veidemann.api.controller.v1.RoleList,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.veidemann.api.controller.v1.RoleList.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.veidemann.api.controller.v1.RoleList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.veidemann.api.controller.v1.RoleList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.veidemann.api.controller.v1.ControllerClient.prototype.getRolesForActiveUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/veidemann.api.controller.v1.Controller/GetRolesForActiveUser',
      request,
      metadata || {},
      methodDescriptor_Controller_GetRolesForActiveUser,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.veidemann.api.controller.v1.RoleList>}
 *     Promise that resolves to the response
 */
proto.veidemann.api.controller.v1.ControllerPromiseClient.prototype.getRolesForActiveUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/veidemann.api.controller.v1.Controller/GetRolesForActiveUser',
      request,
      metadata || {},
      methodDescriptor_Controller_GetRolesForActiveUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.veidemann.api.controller.v1.RunCrawlRequest,
 *   !proto.veidemann.api.controller.v1.RunCrawlReply>}
 */
const methodDescriptor_Controller_RunCrawl = new grpc.web.MethodDescriptor(
  '/veidemann.api.controller.v1.Controller/RunCrawl',
  grpc.web.MethodType.UNARY,
  proto.veidemann.api.controller.v1.RunCrawlRequest,
  proto.veidemann.api.controller.v1.RunCrawlReply,
  /**
   * @param {!proto.veidemann.api.controller.v1.RunCrawlRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.veidemann.api.controller.v1.RunCrawlReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.veidemann.api.controller.v1.RunCrawlRequest,
 *   !proto.veidemann.api.controller.v1.RunCrawlReply>}
 */
const methodInfo_Controller_RunCrawl = new grpc.web.AbstractClientBase.MethodInfo(
  proto.veidemann.api.controller.v1.RunCrawlReply,
  /**
   * @param {!proto.veidemann.api.controller.v1.RunCrawlRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.veidemann.api.controller.v1.RunCrawlReply.deserializeBinary
);


/**
 * @param {!proto.veidemann.api.controller.v1.RunCrawlRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.veidemann.api.controller.v1.RunCrawlReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.veidemann.api.controller.v1.RunCrawlReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.veidemann.api.controller.v1.ControllerClient.prototype.runCrawl =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/veidemann.api.controller.v1.Controller/RunCrawl',
      request,
      metadata || {},
      methodDescriptor_Controller_RunCrawl,
      callback);
};


/**
 * @param {!proto.veidemann.api.controller.v1.RunCrawlRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.veidemann.api.controller.v1.RunCrawlReply>}
 *     Promise that resolves to the response
 */
proto.veidemann.api.controller.v1.ControllerPromiseClient.prototype.runCrawl =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/veidemann.api.controller.v1.Controller/RunCrawl',
      request,
      metadata || {},
      methodDescriptor_Controller_RunCrawl);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.veidemann.api.controller.v1.ExecutionId,
 *   !proto.veidemann.api.frontier.v1.CrawlExecutionStatus>}
 */
const methodDescriptor_Controller_AbortCrawlExecution = new grpc.web.MethodDescriptor(
  '/veidemann.api.controller.v1.Controller/AbortCrawlExecution',
  grpc.web.MethodType.UNARY,
  controller_v1_resources_pb.ExecutionId,
  frontier_v1_resources_pb.CrawlExecutionStatus,
  /**
   * @param {!proto.veidemann.api.controller.v1.ExecutionId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  frontier_v1_resources_pb.CrawlExecutionStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.veidemann.api.controller.v1.ExecutionId,
 *   !proto.veidemann.api.frontier.v1.CrawlExecutionStatus>}
 */
const methodInfo_Controller_AbortCrawlExecution = new grpc.web.AbstractClientBase.MethodInfo(
  frontier_v1_resources_pb.CrawlExecutionStatus,
  /**
   * @param {!proto.veidemann.api.controller.v1.ExecutionId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  frontier_v1_resources_pb.CrawlExecutionStatus.deserializeBinary
);


/**
 * @param {!proto.veidemann.api.controller.v1.ExecutionId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.veidemann.api.frontier.v1.CrawlExecutionStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.veidemann.api.frontier.v1.CrawlExecutionStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.veidemann.api.controller.v1.ControllerClient.prototype.abortCrawlExecution =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/veidemann.api.controller.v1.Controller/AbortCrawlExecution',
      request,
      metadata || {},
      methodDescriptor_Controller_AbortCrawlExecution,
      callback);
};


/**
 * @param {!proto.veidemann.api.controller.v1.ExecutionId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.veidemann.api.frontier.v1.CrawlExecutionStatus>}
 *     Promise that resolves to the response
 */
proto.veidemann.api.controller.v1.ControllerPromiseClient.prototype.abortCrawlExecution =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/veidemann.api.controller.v1.Controller/AbortCrawlExecution',
      request,
      metadata || {},
      methodDescriptor_Controller_AbortCrawlExecution);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.veidemann.api.controller.v1.ExecutionId,
 *   !proto.veidemann.api.frontier.v1.JobExecutionStatus>}
 */
const methodDescriptor_Controller_AbortJobExecution = new grpc.web.MethodDescriptor(
  '/veidemann.api.controller.v1.Controller/AbortJobExecution',
  grpc.web.MethodType.UNARY,
  controller_v1_resources_pb.ExecutionId,
  frontier_v1_resources_pb.JobExecutionStatus,
  /**
   * @param {!proto.veidemann.api.controller.v1.ExecutionId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  frontier_v1_resources_pb.JobExecutionStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.veidemann.api.controller.v1.ExecutionId,
 *   !proto.veidemann.api.frontier.v1.JobExecutionStatus>}
 */
const methodInfo_Controller_AbortJobExecution = new grpc.web.AbstractClientBase.MethodInfo(
  frontier_v1_resources_pb.JobExecutionStatus,
  /**
   * @param {!proto.veidemann.api.controller.v1.ExecutionId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  frontier_v1_resources_pb.JobExecutionStatus.deserializeBinary
);


/**
 * @param {!proto.veidemann.api.controller.v1.ExecutionId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.veidemann.api.frontier.v1.JobExecutionStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.veidemann.api.frontier.v1.JobExecutionStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.veidemann.api.controller.v1.ControllerClient.prototype.abortJobExecution =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/veidemann.api.controller.v1.Controller/AbortJobExecution',
      request,
      metadata || {},
      methodDescriptor_Controller_AbortJobExecution,
      callback);
};


/**
 * @param {!proto.veidemann.api.controller.v1.ExecutionId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.veidemann.api.frontier.v1.JobExecutionStatus>}
 *     Promise that resolves to the response
 */
proto.veidemann.api.controller.v1.ControllerPromiseClient.prototype.abortJobExecution =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/veidemann.api.controller.v1.Controller/AbortJobExecution',
      request,
      metadata || {},
      methodDescriptor_Controller_AbortJobExecution);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply>}
 */
const methodDescriptor_Controller_GetOpenIdConnectIssuer = new grpc.web.MethodDescriptor(
  '/veidemann.api.controller.v1.Controller/GetOpenIdConnectIssuer',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply>}
 */
const methodInfo_Controller_GetOpenIdConnectIssuer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.veidemann.api.controller.v1.ControllerClient.prototype.getOpenIdConnectIssuer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/veidemann.api.controller.v1.Controller/GetOpenIdConnectIssuer',
      request,
      metadata || {},
      methodDescriptor_Controller_GetOpenIdConnectIssuer,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.veidemann.api.controller.v1.OpenIdConnectIssuerReply>}
 *     Promise that resolves to the response
 */
proto.veidemann.api.controller.v1.ControllerPromiseClient.prototype.getOpenIdConnectIssuer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/veidemann.api.controller.v1.Controller/GetOpenIdConnectIssuer',
      request,
      metadata || {},
      methodDescriptor_Controller_GetOpenIdConnectIssuer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Controller_PauseCrawler = new grpc.web.MethodDescriptor(
  '/veidemann.api.controller.v1.Controller/PauseCrawler',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Controller_PauseCrawler = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.veidemann.api.controller.v1.ControllerClient.prototype.pauseCrawler =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/veidemann.api.controller.v1.Controller/PauseCrawler',
      request,
      metadata || {},
      methodDescriptor_Controller_PauseCrawler,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.veidemann.api.controller.v1.ControllerPromiseClient.prototype.pauseCrawler =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/veidemann.api.controller.v1.Controller/PauseCrawler',
      request,
      metadata || {},
      methodDescriptor_Controller_PauseCrawler);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Controller_UnPauseCrawler = new grpc.web.MethodDescriptor(
  '/veidemann.api.controller.v1.Controller/UnPauseCrawler',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Controller_UnPauseCrawler = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.veidemann.api.controller.v1.ControllerClient.prototype.unPauseCrawler =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/veidemann.api.controller.v1.Controller/UnPauseCrawler',
      request,
      metadata || {},
      methodDescriptor_Controller_UnPauseCrawler,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.veidemann.api.controller.v1.ControllerPromiseClient.prototype.unPauseCrawler =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/veidemann.api.controller.v1.Controller/UnPauseCrawler',
      request,
      metadata || {},
      methodDescriptor_Controller_UnPauseCrawler);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.veidemann.api.controller.v1.CrawlerStatus>}
 */
const methodDescriptor_Controller_Status = new grpc.web.MethodDescriptor(
  '/veidemann.api.controller.v1.Controller/Status',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.veidemann.api.controller.v1.CrawlerStatus,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.veidemann.api.controller.v1.CrawlerStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.veidemann.api.controller.v1.CrawlerStatus>}
 */
const methodInfo_Controller_Status = new grpc.web.AbstractClientBase.MethodInfo(
  proto.veidemann.api.controller.v1.CrawlerStatus,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.veidemann.api.controller.v1.CrawlerStatus.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.veidemann.api.controller.v1.CrawlerStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.veidemann.api.controller.v1.CrawlerStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.veidemann.api.controller.v1.ControllerClient.prototype.status =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/veidemann.api.controller.v1.Controller/Status',
      request,
      metadata || {},
      methodDescriptor_Controller_Status,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.veidemann.api.controller.v1.CrawlerStatus>}
 *     Promise that resolves to the response
 */
proto.veidemann.api.controller.v1.ControllerPromiseClient.prototype.status =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/veidemann.api.controller.v1.Controller/Status',
      request,
      metadata || {},
      methodDescriptor_Controller_Status);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.veidemann.api.frontier.v1.CrawlExecutionId,
 *   !proto.veidemann.api.frontier.v1.CountResponse>}
 */
const methodDescriptor_Controller_QueueCountForCrawlExecution = new grpc.web.MethodDescriptor(
  '/veidemann.api.controller.v1.Controller/QueueCountForCrawlExecution',
  grpc.web.MethodType.UNARY,
  frontier_v1_frontier_pb.CrawlExecutionId,
  frontier_v1_frontier_pb.CountResponse,
  /**
   * @param {!proto.veidemann.api.frontier.v1.CrawlExecutionId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  frontier_v1_frontier_pb.CountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.veidemann.api.frontier.v1.CrawlExecutionId,
 *   !proto.veidemann.api.frontier.v1.CountResponse>}
 */
const methodInfo_Controller_QueueCountForCrawlExecution = new grpc.web.AbstractClientBase.MethodInfo(
  frontier_v1_frontier_pb.CountResponse,
  /**
   * @param {!proto.veidemann.api.frontier.v1.CrawlExecutionId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  frontier_v1_frontier_pb.CountResponse.deserializeBinary
);


/**
 * @param {!proto.veidemann.api.frontier.v1.CrawlExecutionId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.veidemann.api.frontier.v1.CountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.veidemann.api.frontier.v1.CountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.veidemann.api.controller.v1.ControllerClient.prototype.queueCountForCrawlExecution =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/veidemann.api.controller.v1.Controller/QueueCountForCrawlExecution',
      request,
      metadata || {},
      methodDescriptor_Controller_QueueCountForCrawlExecution,
      callback);
};


/**
 * @param {!proto.veidemann.api.frontier.v1.CrawlExecutionId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.veidemann.api.frontier.v1.CountResponse>}
 *     Promise that resolves to the response
 */
proto.veidemann.api.controller.v1.ControllerPromiseClient.prototype.queueCountForCrawlExecution =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/veidemann.api.controller.v1.Controller/QueueCountForCrawlExecution',
      request,
      metadata || {},
      methodDescriptor_Controller_QueueCountForCrawlExecution);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.veidemann.api.frontier.v1.CrawlHostGroup,
 *   !proto.veidemann.api.frontier.v1.CountResponse>}
 */
const methodDescriptor_Controller_QueueCountForCrawlHostGroup = new grpc.web.MethodDescriptor(
  '/veidemann.api.controller.v1.Controller/QueueCountForCrawlHostGroup',
  grpc.web.MethodType.UNARY,
  frontier_v1_resources_pb.CrawlHostGroup,
  frontier_v1_frontier_pb.CountResponse,
  /**
   * @param {!proto.veidemann.api.frontier.v1.CrawlHostGroup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  frontier_v1_frontier_pb.CountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.veidemann.api.frontier.v1.CrawlHostGroup,
 *   !proto.veidemann.api.frontier.v1.CountResponse>}
 */
const methodInfo_Controller_QueueCountForCrawlHostGroup = new grpc.web.AbstractClientBase.MethodInfo(
  frontier_v1_frontier_pb.CountResponse,
  /**
   * @param {!proto.veidemann.api.frontier.v1.CrawlHostGroup} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  frontier_v1_frontier_pb.CountResponse.deserializeBinary
);


/**
 * @param {!proto.veidemann.api.frontier.v1.CrawlHostGroup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.veidemann.api.frontier.v1.CountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.veidemann.api.frontier.v1.CountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.veidemann.api.controller.v1.ControllerClient.prototype.queueCountForCrawlHostGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/veidemann.api.controller.v1.Controller/QueueCountForCrawlHostGroup',
      request,
      metadata || {},
      methodDescriptor_Controller_QueueCountForCrawlHostGroup,
      callback);
};


/**
 * @param {!proto.veidemann.api.frontier.v1.CrawlHostGroup} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.veidemann.api.frontier.v1.CountResponse>}
 *     Promise that resolves to the response
 */
proto.veidemann.api.controller.v1.ControllerPromiseClient.prototype.queueCountForCrawlHostGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/veidemann.api.controller.v1.Controller/QueueCountForCrawlHostGroup',
      request,
      metadata || {},
      methodDescriptor_Controller_QueueCountForCrawlHostGroup);
};


module.exports = proto.veidemann.api.controller.v1;


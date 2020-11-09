/**
 * @fileoverview gRPC-Web generated client stub for veidemann.api.report.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var commons_v1_resources_pb = require('../../commons/v1/resources_pb.js')

var frontier_v1_resources_pb = require('../../frontier/v1/resources_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.veidemann = {};
proto.veidemann.api = {};
proto.veidemann.api.report = {};
proto.veidemann.api.report.v1 = require('./report_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.veidemann.api.report.v1.ReportClient =
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
proto.veidemann.api.report.v1.ReportPromiseClient =
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
 *   !proto.veidemann.api.report.v1.CrawlLogListRequest,
 *   !proto.veidemann.api.frontier.v1.CrawlLog>}
 */
const methodDescriptor_Report_ListCrawlLogs = new grpc.web.MethodDescriptor(
  '/veidemann.api.report.v1.Report/ListCrawlLogs',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.veidemann.api.report.v1.CrawlLogListRequest,
  frontier_v1_resources_pb.CrawlLog,
  /**
   * @param {!proto.veidemann.api.report.v1.CrawlLogListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  frontier_v1_resources_pb.CrawlLog.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.veidemann.api.report.v1.CrawlLogListRequest,
 *   !proto.veidemann.api.frontier.v1.CrawlLog>}
 */
const methodInfo_Report_ListCrawlLogs = new grpc.web.AbstractClientBase.MethodInfo(
  frontier_v1_resources_pb.CrawlLog,
  /**
   * @param {!proto.veidemann.api.report.v1.CrawlLogListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  frontier_v1_resources_pb.CrawlLog.deserializeBinary
);


/**
 * @param {!proto.veidemann.api.report.v1.CrawlLogListRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.veidemann.api.frontier.v1.CrawlLog>}
 *     The XHR Node Readable Stream
 */
proto.veidemann.api.report.v1.ReportClient.prototype.listCrawlLogs =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/veidemann.api.report.v1.Report/ListCrawlLogs',
      request,
      metadata || {},
      methodDescriptor_Report_ListCrawlLogs);
};


/**
 * @param {!proto.veidemann.api.report.v1.CrawlLogListRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.veidemann.api.frontier.v1.CrawlLog>}
 *     The XHR Node Readable Stream
 */
proto.veidemann.api.report.v1.ReportPromiseClient.prototype.listCrawlLogs =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/veidemann.api.report.v1.Report/ListCrawlLogs',
      request,
      metadata || {},
      methodDescriptor_Report_ListCrawlLogs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.veidemann.api.report.v1.CrawlLogListRequest,
 *   !proto.veidemann.api.report.v1.ListCountResponse>}
 */
const methodDescriptor_Report_CountCrawlLogs = new grpc.web.MethodDescriptor(
  '/veidemann.api.report.v1.Report/CountCrawlLogs',
  grpc.web.MethodType.UNARY,
  proto.veidemann.api.report.v1.CrawlLogListRequest,
  proto.veidemann.api.report.v1.ListCountResponse,
  /**
   * @param {!proto.veidemann.api.report.v1.CrawlLogListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.veidemann.api.report.v1.ListCountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.veidemann.api.report.v1.CrawlLogListRequest,
 *   !proto.veidemann.api.report.v1.ListCountResponse>}
 */
const methodInfo_Report_CountCrawlLogs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.veidemann.api.report.v1.ListCountResponse,
  /**
   * @param {!proto.veidemann.api.report.v1.CrawlLogListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.veidemann.api.report.v1.ListCountResponse.deserializeBinary
);


/**
 * @param {!proto.veidemann.api.report.v1.CrawlLogListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.veidemann.api.report.v1.ListCountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.veidemann.api.report.v1.ListCountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.veidemann.api.report.v1.ReportClient.prototype.countCrawlLogs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/veidemann.api.report.v1.Report/CountCrawlLogs',
      request,
      metadata || {},
      methodDescriptor_Report_CountCrawlLogs,
      callback);
};


/**
 * @param {!proto.veidemann.api.report.v1.CrawlLogListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.veidemann.api.report.v1.ListCountResponse>}
 *     Promise that resolves to the response
 */
proto.veidemann.api.report.v1.ReportPromiseClient.prototype.countCrawlLogs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/veidemann.api.report.v1.Report/CountCrawlLogs',
      request,
      metadata || {},
      methodDescriptor_Report_CountCrawlLogs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.veidemann.api.report.v1.PageLogListRequest,
 *   !proto.veidemann.api.frontier.v1.PageLog>}
 */
const methodDescriptor_Report_ListPageLogs = new grpc.web.MethodDescriptor(
  '/veidemann.api.report.v1.Report/ListPageLogs',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.veidemann.api.report.v1.PageLogListRequest,
  frontier_v1_resources_pb.PageLog,
  /**
   * @param {!proto.veidemann.api.report.v1.PageLogListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  frontier_v1_resources_pb.PageLog.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.veidemann.api.report.v1.PageLogListRequest,
 *   !proto.veidemann.api.frontier.v1.PageLog>}
 */
const methodInfo_Report_ListPageLogs = new grpc.web.AbstractClientBase.MethodInfo(
  frontier_v1_resources_pb.PageLog,
  /**
   * @param {!proto.veidemann.api.report.v1.PageLogListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  frontier_v1_resources_pb.PageLog.deserializeBinary
);


/**
 * @param {!proto.veidemann.api.report.v1.PageLogListRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.veidemann.api.frontier.v1.PageLog>}
 *     The XHR Node Readable Stream
 */
proto.veidemann.api.report.v1.ReportClient.prototype.listPageLogs =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/veidemann.api.report.v1.Report/ListPageLogs',
      request,
      metadata || {},
      methodDescriptor_Report_ListPageLogs);
};


/**
 * @param {!proto.veidemann.api.report.v1.PageLogListRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.veidemann.api.frontier.v1.PageLog>}
 *     The XHR Node Readable Stream
 */
proto.veidemann.api.report.v1.ReportPromiseClient.prototype.listPageLogs =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/veidemann.api.report.v1.Report/ListPageLogs',
      request,
      metadata || {},
      methodDescriptor_Report_ListPageLogs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.veidemann.api.report.v1.PageLogListRequest,
 *   !proto.veidemann.api.report.v1.ListCountResponse>}
 */
const methodDescriptor_Report_CountPageLogs = new grpc.web.MethodDescriptor(
  '/veidemann.api.report.v1.Report/CountPageLogs',
  grpc.web.MethodType.UNARY,
  proto.veidemann.api.report.v1.PageLogListRequest,
  proto.veidemann.api.report.v1.ListCountResponse,
  /**
   * @param {!proto.veidemann.api.report.v1.PageLogListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.veidemann.api.report.v1.ListCountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.veidemann.api.report.v1.PageLogListRequest,
 *   !proto.veidemann.api.report.v1.ListCountResponse>}
 */
const methodInfo_Report_CountPageLogs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.veidemann.api.report.v1.ListCountResponse,
  /**
   * @param {!proto.veidemann.api.report.v1.PageLogListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.veidemann.api.report.v1.ListCountResponse.deserializeBinary
);


/**
 * @param {!proto.veidemann.api.report.v1.PageLogListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.veidemann.api.report.v1.ListCountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.veidemann.api.report.v1.ListCountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.veidemann.api.report.v1.ReportClient.prototype.countPageLogs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/veidemann.api.report.v1.Report/CountPageLogs',
      request,
      metadata || {},
      methodDescriptor_Report_CountPageLogs,
      callback);
};


/**
 * @param {!proto.veidemann.api.report.v1.PageLogListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.veidemann.api.report.v1.ListCountResponse>}
 *     Promise that resolves to the response
 */
proto.veidemann.api.report.v1.ReportPromiseClient.prototype.countPageLogs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/veidemann.api.report.v1.Report/CountPageLogs',
      request,
      metadata || {},
      methodDescriptor_Report_CountPageLogs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.veidemann.api.report.v1.ExecuteDbQueryRequest,
 *   !proto.veidemann.api.report.v1.ExecuteDbQueryReply>}
 */
const methodDescriptor_Report_ExecuteDbQuery = new grpc.web.MethodDescriptor(
  '/veidemann.api.report.v1.Report/ExecuteDbQuery',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.veidemann.api.report.v1.ExecuteDbQueryRequest,
  proto.veidemann.api.report.v1.ExecuteDbQueryReply,
  /**
   * @param {!proto.veidemann.api.report.v1.ExecuteDbQueryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.veidemann.api.report.v1.ExecuteDbQueryReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.veidemann.api.report.v1.ExecuteDbQueryRequest,
 *   !proto.veidemann.api.report.v1.ExecuteDbQueryReply>}
 */
const methodInfo_Report_ExecuteDbQuery = new grpc.web.AbstractClientBase.MethodInfo(
  proto.veidemann.api.report.v1.ExecuteDbQueryReply,
  /**
   * @param {!proto.veidemann.api.report.v1.ExecuteDbQueryRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.veidemann.api.report.v1.ExecuteDbQueryReply.deserializeBinary
);


/**
 * @param {!proto.veidemann.api.report.v1.ExecuteDbQueryRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.veidemann.api.report.v1.ExecuteDbQueryReply>}
 *     The XHR Node Readable Stream
 */
proto.veidemann.api.report.v1.ReportClient.prototype.executeDbQuery =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/veidemann.api.report.v1.Report/ExecuteDbQuery',
      request,
      metadata || {},
      methodDescriptor_Report_ExecuteDbQuery);
};


/**
 * @param {!proto.veidemann.api.report.v1.ExecuteDbQueryRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.veidemann.api.report.v1.ExecuteDbQueryReply>}
 *     The XHR Node Readable Stream
 */
proto.veidemann.api.report.v1.ReportPromiseClient.prototype.executeDbQuery =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/veidemann.api.report.v1.Report/ExecuteDbQuery',
      request,
      metadata || {},
      methodDescriptor_Report_ExecuteDbQuery);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.veidemann.api.report.v1.CrawlExecutionsListRequest,
 *   !proto.veidemann.api.frontier.v1.CrawlExecutionStatus>}
 */
const methodDescriptor_Report_ListExecutions = new grpc.web.MethodDescriptor(
  '/veidemann.api.report.v1.Report/ListExecutions',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.veidemann.api.report.v1.CrawlExecutionsListRequest,
  frontier_v1_resources_pb.CrawlExecutionStatus,
  /**
   * @param {!proto.veidemann.api.report.v1.CrawlExecutionsListRequest} request
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
 *   !proto.veidemann.api.report.v1.CrawlExecutionsListRequest,
 *   !proto.veidemann.api.frontier.v1.CrawlExecutionStatus>}
 */
const methodInfo_Report_ListExecutions = new grpc.web.AbstractClientBase.MethodInfo(
  frontier_v1_resources_pb.CrawlExecutionStatus,
  /**
   * @param {!proto.veidemann.api.report.v1.CrawlExecutionsListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  frontier_v1_resources_pb.CrawlExecutionStatus.deserializeBinary
);


/**
 * @param {!proto.veidemann.api.report.v1.CrawlExecutionsListRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.veidemann.api.frontier.v1.CrawlExecutionStatus>}
 *     The XHR Node Readable Stream
 */
proto.veidemann.api.report.v1.ReportClient.prototype.listExecutions =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/veidemann.api.report.v1.Report/ListExecutions',
      request,
      metadata || {},
      methodDescriptor_Report_ListExecutions);
};


/**
 * @param {!proto.veidemann.api.report.v1.CrawlExecutionsListRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.veidemann.api.frontier.v1.CrawlExecutionStatus>}
 *     The XHR Node Readable Stream
 */
proto.veidemann.api.report.v1.ReportPromiseClient.prototype.listExecutions =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/veidemann.api.report.v1.Report/ListExecutions',
      request,
      metadata || {},
      methodDescriptor_Report_ListExecutions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.veidemann.api.report.v1.JobExecutionsListRequest,
 *   !proto.veidemann.api.frontier.v1.JobExecutionStatus>}
 */
const methodDescriptor_Report_ListJobExecutions = new grpc.web.MethodDescriptor(
  '/veidemann.api.report.v1.Report/ListJobExecutions',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.veidemann.api.report.v1.JobExecutionsListRequest,
  frontier_v1_resources_pb.JobExecutionStatus,
  /**
   * @param {!proto.veidemann.api.report.v1.JobExecutionsListRequest} request
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
 *   !proto.veidemann.api.report.v1.JobExecutionsListRequest,
 *   !proto.veidemann.api.frontier.v1.JobExecutionStatus>}
 */
const methodInfo_Report_ListJobExecutions = new grpc.web.AbstractClientBase.MethodInfo(
  frontier_v1_resources_pb.JobExecutionStatus,
  /**
   * @param {!proto.veidemann.api.report.v1.JobExecutionsListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  frontier_v1_resources_pb.JobExecutionStatus.deserializeBinary
);


/**
 * @param {!proto.veidemann.api.report.v1.JobExecutionsListRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.veidemann.api.frontier.v1.JobExecutionStatus>}
 *     The XHR Node Readable Stream
 */
proto.veidemann.api.report.v1.ReportClient.prototype.listJobExecutions =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/veidemann.api.report.v1.Report/ListJobExecutions',
      request,
      metadata || {},
      methodDescriptor_Report_ListJobExecutions);
};


/**
 * @param {!proto.veidemann.api.report.v1.JobExecutionsListRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.veidemann.api.frontier.v1.JobExecutionStatus>}
 *     The XHR Node Readable Stream
 */
proto.veidemann.api.report.v1.ReportPromiseClient.prototype.listJobExecutions =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/veidemann.api.report.v1.Report/ListJobExecutions',
      request,
      metadata || {},
      methodDescriptor_Report_ListJobExecutions);
};


module.exports = proto.veidemann.api.report.v1;


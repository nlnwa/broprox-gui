/**
 * @fileoverview gRPC-Web generated client stub for veidemann.api.eventhandler.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var eventhandler_v1_resources_pb = require('../../eventhandler/v1/resources_pb.js')

var commons_v1_resources_pb = require('../../commons/v1/resources_pb.js')
const proto = {};
proto.veidemann = {};
proto.veidemann.api = {};
proto.veidemann.api.eventhandler = {};
proto.veidemann.api.eventhandler.v1 = require('./eventhandler_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.veidemann.api.eventhandler.v1.EventHandlerClient =
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
proto.veidemann.api.eventhandler.v1.EventHandlerPromiseClient =
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
 *   !proto.veidemann.api.eventhandler.v1.EventRef,
 *   !proto.veidemann.api.eventhandler.v1.EventObject>}
 */
const methodDescriptor_EventHandler_GetEventObject = new grpc.web.MethodDescriptor(
  '/veidemann.api.eventhandler.v1.EventHandler/GetEventObject',
  grpc.web.MethodType.UNARY,
  eventhandler_v1_resources_pb.EventRef,
  eventhandler_v1_resources_pb.EventObject,
  /**
   * @param {!proto.veidemann.api.eventhandler.v1.EventRef} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  eventhandler_v1_resources_pb.EventObject.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.veidemann.api.eventhandler.v1.EventRef,
 *   !proto.veidemann.api.eventhandler.v1.EventObject>}
 */
const methodInfo_EventHandler_GetEventObject = new grpc.web.AbstractClientBase.MethodInfo(
  eventhandler_v1_resources_pb.EventObject,
  /**
   * @param {!proto.veidemann.api.eventhandler.v1.EventRef} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  eventhandler_v1_resources_pb.EventObject.deserializeBinary
);


/**
 * @param {!proto.veidemann.api.eventhandler.v1.EventRef} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.veidemann.api.eventhandler.v1.EventObject)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.veidemann.api.eventhandler.v1.EventObject>|undefined}
 *     The XHR Node Readable Stream
 */
proto.veidemann.api.eventhandler.v1.EventHandlerClient.prototype.getEventObject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/veidemann.api.eventhandler.v1.EventHandler/GetEventObject',
      request,
      metadata || {},
      methodDescriptor_EventHandler_GetEventObject,
      callback);
};


/**
 * @param {!proto.veidemann.api.eventhandler.v1.EventRef} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.veidemann.api.eventhandler.v1.EventObject>}
 *     Promise that resolves to the response
 */
proto.veidemann.api.eventhandler.v1.EventHandlerPromiseClient.prototype.getEventObject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/veidemann.api.eventhandler.v1.EventHandler/GetEventObject',
      request,
      metadata || {},
      methodDescriptor_EventHandler_GetEventObject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.veidemann.api.eventhandler.v1.ListRequest,
 *   !proto.veidemann.api.eventhandler.v1.EventObject>}
 */
const methodDescriptor_EventHandler_ListEventObjects = new grpc.web.MethodDescriptor(
  '/veidemann.api.eventhandler.v1.EventHandler/ListEventObjects',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.veidemann.api.eventhandler.v1.ListRequest,
  eventhandler_v1_resources_pb.EventObject,
  /**
   * @param {!proto.veidemann.api.eventhandler.v1.ListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  eventhandler_v1_resources_pb.EventObject.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.veidemann.api.eventhandler.v1.ListRequest,
 *   !proto.veidemann.api.eventhandler.v1.EventObject>}
 */
const methodInfo_EventHandler_ListEventObjects = new grpc.web.AbstractClientBase.MethodInfo(
  eventhandler_v1_resources_pb.EventObject,
  /**
   * @param {!proto.veidemann.api.eventhandler.v1.ListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  eventhandler_v1_resources_pb.EventObject.deserializeBinary
);


/**
 * @param {!proto.veidemann.api.eventhandler.v1.ListRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.veidemann.api.eventhandler.v1.EventObject>}
 *     The XHR Node Readable Stream
 */
proto.veidemann.api.eventhandler.v1.EventHandlerClient.prototype.listEventObjects =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/veidemann.api.eventhandler.v1.EventHandler/ListEventObjects',
      request,
      metadata || {},
      methodDescriptor_EventHandler_ListEventObjects);
};


/**
 * @param {!proto.veidemann.api.eventhandler.v1.ListRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.veidemann.api.eventhandler.v1.EventObject>}
 *     The XHR Node Readable Stream
 */
proto.veidemann.api.eventhandler.v1.EventHandlerPromiseClient.prototype.listEventObjects =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/veidemann.api.eventhandler.v1.EventHandler/ListEventObjects',
      request,
      metadata || {},
      methodDescriptor_EventHandler_ListEventObjects);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.veidemann.api.eventhandler.v1.ListRequest,
 *   !proto.veidemann.api.eventhandler.v1.ListCountResponse>}
 */
const methodDescriptor_EventHandler_CountEventObjects = new grpc.web.MethodDescriptor(
  '/veidemann.api.eventhandler.v1.EventHandler/CountEventObjects',
  grpc.web.MethodType.UNARY,
  proto.veidemann.api.eventhandler.v1.ListRequest,
  proto.veidemann.api.eventhandler.v1.ListCountResponse,
  /**
   * @param {!proto.veidemann.api.eventhandler.v1.ListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.veidemann.api.eventhandler.v1.ListCountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.veidemann.api.eventhandler.v1.ListRequest,
 *   !proto.veidemann.api.eventhandler.v1.ListCountResponse>}
 */
const methodInfo_EventHandler_CountEventObjects = new grpc.web.AbstractClientBase.MethodInfo(
  proto.veidemann.api.eventhandler.v1.ListCountResponse,
  /**
   * @param {!proto.veidemann.api.eventhandler.v1.ListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.veidemann.api.eventhandler.v1.ListCountResponse.deserializeBinary
);


/**
 * @param {!proto.veidemann.api.eventhandler.v1.ListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.veidemann.api.eventhandler.v1.ListCountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.veidemann.api.eventhandler.v1.ListCountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.veidemann.api.eventhandler.v1.EventHandlerClient.prototype.countEventObjects =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/veidemann.api.eventhandler.v1.EventHandler/CountEventObjects',
      request,
      metadata || {},
      methodDescriptor_EventHandler_CountEventObjects,
      callback);
};


/**
 * @param {!proto.veidemann.api.eventhandler.v1.ListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.veidemann.api.eventhandler.v1.ListCountResponse>}
 *     Promise that resolves to the response
 */
proto.veidemann.api.eventhandler.v1.EventHandlerPromiseClient.prototype.countEventObjects =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/veidemann.api.eventhandler.v1.EventHandler/CountEventObjects',
      request,
      metadata || {},
      methodDescriptor_EventHandler_CountEventObjects);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.veidemann.api.eventhandler.v1.SaveRequest,
 *   !proto.veidemann.api.eventhandler.v1.EventObject>}
 */
const methodDescriptor_EventHandler_SaveEventObject = new grpc.web.MethodDescriptor(
  '/veidemann.api.eventhandler.v1.EventHandler/SaveEventObject',
  grpc.web.MethodType.UNARY,
  proto.veidemann.api.eventhandler.v1.SaveRequest,
  eventhandler_v1_resources_pb.EventObject,
  /**
   * @param {!proto.veidemann.api.eventhandler.v1.SaveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  eventhandler_v1_resources_pb.EventObject.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.veidemann.api.eventhandler.v1.SaveRequest,
 *   !proto.veidemann.api.eventhandler.v1.EventObject>}
 */
const methodInfo_EventHandler_SaveEventObject = new grpc.web.AbstractClientBase.MethodInfo(
  eventhandler_v1_resources_pb.EventObject,
  /**
   * @param {!proto.veidemann.api.eventhandler.v1.SaveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  eventhandler_v1_resources_pb.EventObject.deserializeBinary
);


/**
 * @param {!proto.veidemann.api.eventhandler.v1.SaveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.veidemann.api.eventhandler.v1.EventObject)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.veidemann.api.eventhandler.v1.EventObject>|undefined}
 *     The XHR Node Readable Stream
 */
proto.veidemann.api.eventhandler.v1.EventHandlerClient.prototype.saveEventObject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/veidemann.api.eventhandler.v1.EventHandler/SaveEventObject',
      request,
      metadata || {},
      methodDescriptor_EventHandler_SaveEventObject,
      callback);
};


/**
 * @param {!proto.veidemann.api.eventhandler.v1.SaveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.veidemann.api.eventhandler.v1.EventObject>}
 *     Promise that resolves to the response
 */
proto.veidemann.api.eventhandler.v1.EventHandlerPromiseClient.prototype.saveEventObject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/veidemann.api.eventhandler.v1.EventHandler/SaveEventObject',
      request,
      metadata || {},
      methodDescriptor_EventHandler_SaveEventObject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.veidemann.api.eventhandler.v1.UpdateRequest,
 *   !proto.veidemann.api.eventhandler.v1.UpdateResponse>}
 */
const methodDescriptor_EventHandler_UpdateEventObjects = new grpc.web.MethodDescriptor(
  '/veidemann.api.eventhandler.v1.EventHandler/UpdateEventObjects',
  grpc.web.MethodType.UNARY,
  proto.veidemann.api.eventhandler.v1.UpdateRequest,
  proto.veidemann.api.eventhandler.v1.UpdateResponse,
  /**
   * @param {!proto.veidemann.api.eventhandler.v1.UpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.veidemann.api.eventhandler.v1.UpdateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.veidemann.api.eventhandler.v1.UpdateRequest,
 *   !proto.veidemann.api.eventhandler.v1.UpdateResponse>}
 */
const methodInfo_EventHandler_UpdateEventObjects = new grpc.web.AbstractClientBase.MethodInfo(
  proto.veidemann.api.eventhandler.v1.UpdateResponse,
  /**
   * @param {!proto.veidemann.api.eventhandler.v1.UpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.veidemann.api.eventhandler.v1.UpdateResponse.deserializeBinary
);


/**
 * @param {!proto.veidemann.api.eventhandler.v1.UpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.veidemann.api.eventhandler.v1.UpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.veidemann.api.eventhandler.v1.UpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.veidemann.api.eventhandler.v1.EventHandlerClient.prototype.updateEventObjects =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/veidemann.api.eventhandler.v1.EventHandler/UpdateEventObjects',
      request,
      metadata || {},
      methodDescriptor_EventHandler_UpdateEventObjects,
      callback);
};


/**
 * @param {!proto.veidemann.api.eventhandler.v1.UpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.veidemann.api.eventhandler.v1.UpdateResponse>}
 *     Promise that resolves to the response
 */
proto.veidemann.api.eventhandler.v1.EventHandlerPromiseClient.prototype.updateEventObjects =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/veidemann.api.eventhandler.v1.EventHandler/UpdateEventObjects',
      request,
      metadata || {},
      methodDescriptor_EventHandler_UpdateEventObjects);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.veidemann.api.eventhandler.v1.EventObject,
 *   !proto.veidemann.api.eventhandler.v1.DeleteResponse>}
 */
const methodDescriptor_EventHandler_DeleteEventObject = new grpc.web.MethodDescriptor(
  '/veidemann.api.eventhandler.v1.EventHandler/DeleteEventObject',
  grpc.web.MethodType.UNARY,
  eventhandler_v1_resources_pb.EventObject,
  proto.veidemann.api.eventhandler.v1.DeleteResponse,
  /**
   * @param {!proto.veidemann.api.eventhandler.v1.EventObject} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.veidemann.api.eventhandler.v1.DeleteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.veidemann.api.eventhandler.v1.EventObject,
 *   !proto.veidemann.api.eventhandler.v1.DeleteResponse>}
 */
const methodInfo_EventHandler_DeleteEventObject = new grpc.web.AbstractClientBase.MethodInfo(
  proto.veidemann.api.eventhandler.v1.DeleteResponse,
  /**
   * @param {!proto.veidemann.api.eventhandler.v1.EventObject} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.veidemann.api.eventhandler.v1.DeleteResponse.deserializeBinary
);


/**
 * @param {!proto.veidemann.api.eventhandler.v1.EventObject} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.veidemann.api.eventhandler.v1.DeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.veidemann.api.eventhandler.v1.DeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.veidemann.api.eventhandler.v1.EventHandlerClient.prototype.deleteEventObject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/veidemann.api.eventhandler.v1.EventHandler/DeleteEventObject',
      request,
      metadata || {},
      methodDescriptor_EventHandler_DeleteEventObject,
      callback);
};


/**
 * @param {!proto.veidemann.api.eventhandler.v1.EventObject} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.veidemann.api.eventhandler.v1.DeleteResponse>}
 *     Promise that resolves to the response
 */
proto.veidemann.api.eventhandler.v1.EventHandlerPromiseClient.prototype.deleteEventObject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/veidemann.api.eventhandler.v1.EventHandler/DeleteEventObject',
      request,
      metadata || {},
      methodDescriptor_EventHandler_DeleteEventObject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.veidemann.api.eventhandler.v1.ListLabelRequest,
 *   !proto.veidemann.api.eventhandler.v1.ListLabelResponse>}
 */
const methodDescriptor_EventHandler_ListLabels = new grpc.web.MethodDescriptor(
  '/veidemann.api.eventhandler.v1.EventHandler/ListLabels',
  grpc.web.MethodType.UNARY,
  proto.veidemann.api.eventhandler.v1.ListLabelRequest,
  proto.veidemann.api.eventhandler.v1.ListLabelResponse,
  /**
   * @param {!proto.veidemann.api.eventhandler.v1.ListLabelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.veidemann.api.eventhandler.v1.ListLabelResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.veidemann.api.eventhandler.v1.ListLabelRequest,
 *   !proto.veidemann.api.eventhandler.v1.ListLabelResponse>}
 */
const methodInfo_EventHandler_ListLabels = new grpc.web.AbstractClientBase.MethodInfo(
  proto.veidemann.api.eventhandler.v1.ListLabelResponse,
  /**
   * @param {!proto.veidemann.api.eventhandler.v1.ListLabelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.veidemann.api.eventhandler.v1.ListLabelResponse.deserializeBinary
);


/**
 * @param {!proto.veidemann.api.eventhandler.v1.ListLabelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.veidemann.api.eventhandler.v1.ListLabelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.veidemann.api.eventhandler.v1.ListLabelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.veidemann.api.eventhandler.v1.EventHandlerClient.prototype.listLabels =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/veidemann.api.eventhandler.v1.EventHandler/ListLabels',
      request,
      metadata || {},
      methodDescriptor_EventHandler_ListLabels,
      callback);
};


/**
 * @param {!proto.veidemann.api.eventhandler.v1.ListLabelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.veidemann.api.eventhandler.v1.ListLabelResponse>}
 *     Promise that resolves to the response
 */
proto.veidemann.api.eventhandler.v1.EventHandlerPromiseClient.prototype.listLabels =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/veidemann.api.eventhandler.v1.EventHandler/ListLabels',
      request,
      metadata || {},
      methodDescriptor_EventHandler_ListLabels);
};


module.exports = proto.veidemann.api.eventhandler.v1;


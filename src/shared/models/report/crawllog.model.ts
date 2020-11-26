import {ApiError} from './api-error.model';
import {CrawlLogProto} from '../../../api';
import {fromTimestampProto, toTimestampProto} from '../../func';
import {fromRethinkTimeStamp} from '../../func/rethinkdb';

export class CrawlLog {
  id: string;
  warcId: string;
  timeStamp: string;
  statusCode: number;
  size: number;
  requestedUri: string;
  responseUri: string;
  discoveryPath: string;
  referrer: string;
  contentType: string;
  fetchTimeStamp: string;
  fetchTimeMs: number;
  blockDigest: string;
  payloadDigest: string;
  storageRef: string;
  recordType: string;
  warcRefersTo: string;
  ipAddress: string;
  executionId: string;
  retries: number;
  error: ApiError;
  jobExecutionId: string;
  collectionFinalName: string;
  method: string;

  constructor({
                id = '',
                warcId = '',
                timeStamp = '',
                statusCode = 0,
                size = 0,
                requestedUri = '',
                responseUri = '',
                discoveryPath = '',
                referrer = '',
                contentType = '',
                fetchTimeStamp = '',
                fetchTimeMs = 0,
                blockDigest = '',
                payloadDigest = '',
                storageRef = '',
                recordType = '',
                warcRefersTo = '',
                ipAddress = '',
                executionId = '',
                retries = 0,
                error = new ApiError(),
                jobExecutionId = '',
                collectionFinalName = '',
                method = ''
              }: Partial<CrawlLog> = {}) {
    this.id = id || warcId;
    this.warcId = warcId;
    this.timeStamp = timeStamp;
    this.statusCode = statusCode;
    this.size = size;
    this.requestedUri = requestedUri;
    this.responseUri = responseUri;
    this.discoveryPath = discoveryPath;
    this.referrer = referrer;
    this.contentType = contentType;
    this.fetchTimeStamp = fetchTimeStamp;
    this.fetchTimeMs = fetchTimeMs;
    this.blockDigest = blockDigest;
    this.payloadDigest = payloadDigest;
    this.storageRef = storageRef;
    this.recordType = recordType;
    this.warcRefersTo = warcRefersTo;
    this.ipAddress = ipAddress;
    this.executionId = executionId;
    this.retries = retries;
    this.error = error;
    this.jobExecutionId = jobExecutionId;
    this.collectionFinalName = collectionFinalName;
    this.method = method;
  }

  /**
   * A function that transforms the results. This function is called for each member of the object.
   * If a member contains nested objects, the nested objects are transformed before the parent object is.
   * @see JSON.parse
   */
  static reviver(key: string, value: any) {
    switch (key) {
      case 'timeStamp':
      case 'fetchTimeStamp':
        return fromRethinkTimeStamp(value);
      default:
        return value;
    }
  }

  static fromProto(proto: CrawlLogProto): CrawlLog {
    return new CrawlLog({
      warcId: proto.getWarcId(),
      timeStamp: fromTimestampProto(proto.getTimeStamp()),
      statusCode: proto.getStatusCode(),
      size: proto.getSize(),
      requestedUri: proto.getRequestedUri(),
      responseUri: proto.getResponseUri(),
      discoveryPath: proto.getDiscoveryPath(),
      referrer: proto.getReferrer(),
      contentType: proto.getContentType(),
      fetchTimeStamp: fromTimestampProto(proto.getFetchTimeStamp()),
      fetchTimeMs: proto.getFetchTimeMs(),
      blockDigest: proto.getBlockDigest(),
      payloadDigest: proto.getPayloadDigest(),
      storageRef: proto.getStorageRef(),
      recordType: proto.getRecordType(),
      warcRefersTo: proto.getWarcRefersTo(),
      ipAddress: proto.getIpAddress(),
      executionId: proto.getExecutionId(),
      retries: proto.getRetries(),
      error: ApiError.fromProto(proto.getError()),
      jobExecutionId: proto.getJobExecutionId(),
      collectionFinalName: proto.getCollectionFinalName(),
      method: proto.getMethod()
    });
  }

  static toProto(crawlLog: CrawlLog): CrawlLogProto {
    const proto = new CrawlLogProto();
    proto.setWarcId(crawlLog.warcId);
    proto.setTimeStamp(toTimestampProto(crawlLog.timeStamp));
    proto.setStatusCode(crawlLog.statusCode);
    proto.setSize(crawlLog.size);
    proto.setRequestedUri(crawlLog.requestedUri);
    proto.setResponseUri(crawlLog.responseUri);
    proto.setDiscoveryPath(crawlLog.discoveryPath);
    proto.setReferrer(crawlLog.referrer);
    proto.setContentType(crawlLog.contentType);
    proto.setFetchTimeStamp(toTimestampProto(crawlLog.fetchTimeStamp));
    proto.setFetchTimeMs(crawlLog.fetchTimeMs);
    proto.setBlockDigest(crawlLog.blockDigest);
    proto.setPayloadDigest(crawlLog.payloadDigest);
    proto.setStorageRef(crawlLog.storageRef);
    proto.setRecordType(crawlLog.recordType);
    proto.setWarcRefersTo(crawlLog.warcRefersTo);
    proto.setIpAddress(crawlLog.ipAddress);
    proto.setExecutionId(crawlLog.executionId);
    proto.setRetries(crawlLog.retries);
    proto.setJobExecutionId(crawlLog.jobExecutionId);
    proto.setCollectionFinalName(crawlLog.collectionFinalName);
    proto.setMethod(crawlLog.method);
    return proto;
  }
}

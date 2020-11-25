import {CrawlExecutionStatusProto} from '../../../api';
import {fromTimestampProto, isNumeric, toTimestampProto} from '../../func';
import {ExtraStatusCodes} from './extrastatuscodes.model';
import {ApiError} from './api-error.model';
import {fromRethinkTimeStamp} from '../../func/rethinkdb';

export enum CrawlExecutionState {
  UNDEFINED = 0,
  CREATED = 1,
  FETCHING = 2,
  SLEEPING = 3,
  FINISHED = 4,
  ABORTED_TIMEOUT = 5,
  ABORTED_SIZE = 6,
  ABORTED_MANUAL = 7,
  FAILED = 8,
  DIED = 9,
}

export const crawlExecutionStates: CrawlExecutionState[] =
  Object.keys(CrawlExecutionState).filter(p => !isNumeric(p)).map(state => CrawlExecutionState[state]);

export class CrawlExecutionStatus {
  static DONE_STATES = [
    CrawlExecutionState.ABORTED_MANUAL,
    CrawlExecutionState.ABORTED_SIZE,
    CrawlExecutionState.ABORTED_TIMEOUT,
    CrawlExecutionState.FAILED,
    CrawlExecutionState.FINISHED,
  ];

  id: string;
  state: CrawlExecutionState;
  jobId: string;
  seedId: string;
  startTime: string;
  endTime: string;
  documentsCrawled: number;
  bytesCrawled: number;
  urisCrawled: number;
  documentsFailed: number;
  documentsOutOfScope: number;
  documentsRetried: number;
  documentsDenied: number;
  lastChangeTime: string;
  createdTime: string;
  currentUriIdList: string[];
  jobExecutionId: string;
  error: ApiError;

  constructor({
                id = '',
                state = CrawlExecutionState.UNDEFINED,
                jobId = '',
                seedId = '',
                startTime = '',
                endTime = '',
                documentsCrawled = 0,
                bytesCrawled = 0,
                urisCrawled = 0,
                documentsFailed = 0,
                documentsOutOfScope = 0,
                documentsRetried = 0,
                documentsDenied = 0,
                lastChangeTime = '',
                createdTime = '',
                currentUriIdList = [],
                jobExecutionId = '',
                error = new ApiError()
              }: Partial<CrawlExecutionStatus> = {}) {
    this.id = id;
    this.jobId = jobId;
    this.seedId = seedId;
    this.state = state;
    this.startTime = startTime;
    this.endTime = endTime;
    this.documentsCrawled = documentsCrawled;
    this.bytesCrawled = bytesCrawled;
    this.urisCrawled = urisCrawled;
    this.documentsFailed = documentsFailed;
    this.documentsOutOfScope = documentsOutOfScope;
    this.documentsRetried = documentsRetried;
    this.documentsDenied = documentsDenied;
    this.lastChangeTime = lastChangeTime;
    this.createdTime = createdTime;
    this.currentUriIdList = currentUriIdList;
    this.jobExecutionId = jobExecutionId;
    this.error = error;
  }

  /**
   * A function that transforms the results. This function is called for each member of the object.
   * If a member contains nested objects, the nested objects are transformed before the parent object is.
   * @see JSON.parse
   */
  static reviver(key: string, value: any) {
    switch (key) {
      case 'state':
        return CrawlExecutionState[value];
      case 'startTime':
      case 'endTime':
      case 'lastChangeTime':
      case 'createdTime':
        return fromRethinkTimeStamp(value);
      default:
        return value;
    }
  }

  static fromProto(proto: CrawlExecutionStatusProto): CrawlExecutionStatus {
    const extraStatusCodes = ExtraStatusCodes;
    const state = CrawlExecutionState;

    const crawlExecutionStatus = new CrawlExecutionStatus({
      id: proto.getId(),
      jobId: proto.getJobId(),
      seedId: proto.getSeedId(),
      state: CrawlExecutionState[CrawlExecutionState[proto.getState()]],
      startTime: fromTimestampProto(proto.getStartTime()),
      endTime: fromTimestampProto(proto.getEndTime()),
      documentsCrawled: proto.getDocumentsCrawled(),
      bytesCrawled: proto.getBytesCrawled(),
      urisCrawled: proto.getUrisCrawled(),
      documentsFailed: proto.getDocumentsFailed(),
      documentsOutOfScope: proto.getDocumentsOutOfScope(),
      documentsRetried: proto.getDocumentsRetried(),
      documentsDenied: proto.getDocumentsDenied(),
      lastChangeTime: fromTimestampProto(proto.getLastChangeTime()),
      createdTime: fromTimestampProto(proto.getCreatedTime()),
      currentUriIdList: proto.getCurrentUriIdList(),
      jobExecutionId: proto.getJobExecutionId(),
      error: ApiError.fromProto(proto.getError())
    });
    return crawlExecutionStatus;
  }

  static toProto(crawlExecutionStatus: CrawlExecutionStatus): CrawlExecutionStatusProto {
    const proto = new CrawlExecutionStatusProto();
    proto.setId(crawlExecutionStatus.id);
    proto.setJobId(crawlExecutionStatus.jobId);
    proto.setSeedId(crawlExecutionStatus.seedId);
    proto.setState(crawlExecutionStatus.state.valueOf());
    proto.setStartTime(toTimestampProto(crawlExecutionStatus.startTime));
    proto.setEndTime(toTimestampProto(crawlExecutionStatus.endTime));
    proto.setDocumentsCrawled(crawlExecutionStatus.documentsCrawled);
    proto.setBytesCrawled(crawlExecutionStatus.bytesCrawled);
    proto.setUrisCrawled(crawlExecutionStatus.urisCrawled);
    proto.setDocumentsFailed(crawlExecutionStatus.documentsFailed);
    proto.setDocumentsOutOfScope(crawlExecutionStatus.documentsOutOfScope);
    proto.setDocumentsRetried(crawlExecutionStatus.documentsRetried);
    proto.setDocumentsDenied(crawlExecutionStatus.documentsDenied);
    proto.setLastChangeTime(toTimestampProto(crawlExecutionStatus.lastChangeTime));
    proto.setCreatedTime(toTimestampProto(crawlExecutionStatus.createdTime));
    proto.setCurrentUriIdList(crawlExecutionStatus.currentUriIdList);
    proto.setJobExecutionId(crawlExecutionStatus.jobExecutionId);
    return proto;
  }
}

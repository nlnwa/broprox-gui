import {ExecutionIdProto, RunCrawlReplyProto, RunCrawlRequestProto, CrawlerStatusProto} from '../../../api';
import {run} from 'tslint/lib/runner';

export class CrawlerStatus {
  runStatus: RunStatus;
  busyCrawlHostGroupCount: number;
  queueSize: number;


  constructor({
                runStatus = 0,
                busyCrawlHostGroupCount = 0,
                queueSize = 0,
              }: Partial<CrawlerStatus> = {}) {
    this.busyCrawlHostGroupCount = busyCrawlHostGroupCount;
    this.queueSize = queueSize;
    this.runStatus = runStatus;
  }

  static fromProto(proto: CrawlerStatusProto): CrawlerStatus {
    return new CrawlerStatus({
      queueSize: proto.getQueuesize(),
      busyCrawlHostGroupCount: proto.getBusycrawlhostgroupcount(),
      runStatus: proto.getRunstatus().valueOf() as RunStatus
    });
  }
}

export enum RunStatus {
  RUNNING = 0,
  PAUSED = 1,
  PAUSE_REQUESTED = 2,
}

export class RunCrawlRequest {
  jobId: string;
  seedId: string;

  constructor({
                jobId = '',
                seedId = ''
              }: Partial<RunCrawlRequest> = {}) {
    this.jobId = jobId;
    this.seedId = seedId;
  }

  static fromProto(proto: RunCrawlRequestProto): RunCrawlRequest {
    return new RunCrawlRequest({
      jobId: proto.getJobId(),
      seedId: proto.getSeedId()
    });
  }

  static toProto(runCrawlRequest: RunCrawlRequest): RunCrawlRequestProto {
    const proto = new RunCrawlRequestProto();
    proto.setJobId(runCrawlRequest.jobId);
    proto.setSeedId(runCrawlRequest.seedId);

    return proto;
  }
}

export class RunCrawlReply {
  jobExecutionId: string;

  constructor({
                jobExecutionId = ''
              }: Partial<RunCrawlReply> = {}) {
    this.jobExecutionId = jobExecutionId;
  }

  static fromProto(proto: RunCrawlReplyProto): RunCrawlReply {
    return new RunCrawlReply({
      jobExecutionId: proto.getJobExecutionId()
    });
  }

  static toProto(runCrawlReply: RunCrawlReply): RunCrawlReplyProto {
    const proto = new RunCrawlReplyProto();
    proto.setJobExecutionId(runCrawlReply.jobExecutionId);
    return proto;
  }
}

export class ExecutionId {
  id: string;

  constructor({
    id = ''
              }: Partial<ExecutionId> = {}) {
    this.id =  id;
  }

  static fromProto(proto: ExecutionIdProto): ExecutionId {
    return new ExecutionId({
      id: proto.getId()
    });
  }

  static toProto(executionId: ExecutionId): ExecutionIdProto {
    const proto = new ExecutionIdProto();
    proto.setId(executionId.id);
    return proto;
  }
}

import {ActivityProto, DataProto, EventObjectProto, EventRefProto} from '../../../api';
import {fromTimestampProto, intersectString, isNumeric} from '../../func';

export enum State {
  NEW = 0,
  OPEN = 1,
  CLOSED = 2
}

export const States: State[] =
  Object.keys(State).filter(p => !isNumeric(p)).map(state => State[state]);

export enum Severity {
  INFO = 0,
  WARN = 1,
  ERROR = 2
}

export const Severities: Severity[] =
  Object.keys(Severity).filter(p => !isNumeric(p)).map(severity => Severity[severity]);

export enum ChangeType {
  CREATED = 0,
  VALUE_CHANGED = 1,
  ARRAY_ADD = 2,
  ARRAY_DEL = 3
}

export const ChangeTypes: ChangeType[] =
  Object.keys(ChangeType).filter(p => !isNumeric(p)).map(changeType => ChangeType[changeType]);

export class Data {
  key?: string;
  value?: string;

  constructor({
                key = '',
                value = ''
              } = {}) {
    this.key = key;
    this.value = value;
  }
}

export class Change {
  type: ChangeType;
  field: string;
  oldVal: string;
  newVal: string;

  constructor({
                type = ChangeType.CREATED,
                field = '',
                oldVal = '',
                newVal = ''
              } = {}) {
    this.type = type;
    this.field = field;
    this.oldVal = oldVal;
    this.newVal = newVal;
  }

  static fromProto(proto: ActivityProto.Change): Change {
    return new Change({
      type: proto.getType(),
      field: proto.getField(),
      oldVal: proto.getOldVal(),
      newVal: proto.getNewVal()
    });
  }

}

export class Activity {
  modifiedBy?: string;
  modifiedTime?: string;
  description?: Change[];
  comment?: string;

  constructor({
                modifiedBy = '',
                modifiedTime = '',
                description = [],
                comment = '',
              } = {}) {
    this.modifiedBy = modifiedBy;
    this.modifiedTime = modifiedTime;
    this.description = description;
    this.comment = comment;
  }
}

export class EventRef {
  id?: string;

  constructor({
                id = ''
              }: Partial<EventRef> = {}) {
    this.id = id;
  }

  static fromProto(proto: EventRefProto): EventRef {
    return new EventRef({
      id: proto.getId()
    });
  }

  static toProto(eventRef: EventRef): EventRefProto {
    if (!eventRef) {
      return undefined;
    }

    const proto = new EventRefProto();
    proto.setId(eventRef.id);
    return proto;
  }
}


export class EventObject {
  id: string;
  type?: string;
  source?: string;
  state: State;
  assignee?: string;
  activityList: Activity[];
  dataList: Data[];
  severity: Severity;
  labelList?: string[];

  constructor(eventObject: EventObject | any = {}) {
    this.id = eventObject.id || '';
    this.type = eventObject.type || '';
    this.source = eventObject.source || '';
    this.state = eventObject.state;
    this.assignee = eventObject.assignee || '';
    this.activityList = eventObject.activityList || [];
    this.dataList = eventObject.dataList || [];
    this.severity = eventObject.severity;
    this.labelList = eventObject.labelList || [];
  }

  static fromProto(proto: EventObjectProto): EventObject {
    return new EventObject({
      id: proto.getId(),
      type: proto.getType(),
      source: proto.getSource(),
      state: proto.getState(),
      assignee: proto.getAssignee(),
      activityList: proto.getActivityList().map(activity => new Activity({
        modifiedTime: fromTimestampProto(activity.getModifiedTime()),
        modifiedBy: activity.getModifiedBy(),
        description: activity.getDescriptionList().map(change => new Change({
          type: ChangeType[change.getType()] as any as ChangeType,
          field: change.getField(),
          oldVal: change.getOldVal(),
          newVal: change.getNewVal()
        })),
        comment: activity.getComment()
      })),
      dataList: proto.getDataList().map(data => new Data({key: data.getKey(), value: data.getValue()})),
      severity: proto.getSeverity(),
      labelList: proto.getLabelList()
    });
  }

  static toProto(eventObject: EventObject): EventObjectProto {
    const proto = new EventObjectProto();
    proto.setId(eventObject.id);
    proto.setAssignee(eventObject.assignee);
    proto.setSeverity(eventObject.severity);
    proto.setState(eventObject.state);
    proto.setSource(eventObject.source);
    proto.setType(eventObject.type);
    proto.setDataList(eventObject.dataList.map(data => {
      const d = new DataProto();
      d.setKey(data.key);
      d.setValue(data.value);
      return d;
    }));
    proto.setLabelList(eventObject.labelList);
    return proto;
  }

  static mergeEvents(eventObjects: EventObject[]): EventObject {
    const eventObject = new EventObject();
    const compareObj: EventObject = eventObjects[0];

    const equalAssignee = eventObjects.every(event => event.assignee === compareObj.assignee);

    const equalSeverity = eventObjects.every(event => event.severity === compareObj.severity);

    eventObject.labelList = eventObjects.map(c => c.labelList).reduce(intersectString);

    if (equalAssignee) {
      eventObject.assignee = compareObj.assignee;
    } else {
      eventObject.assignee = null;
    }

    if (equalSeverity) {
      eventObject.severity = compareObj.severity;
    } else {
      eventObject.severity = null;
    }

    return eventObject;
  }
}

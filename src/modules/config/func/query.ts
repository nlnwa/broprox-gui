import {ConfigObject, Kind} from '../../../shared/models';
import {FieldMask, ListRequest} from '../../../api';

export function createListRequest(kind: Kind, queryTemplate?: Partial<ConfigObject>, queryMask?: FieldMask) {
  const listRequest = new ListRequest();
  listRequest.setKind(kind.valueOf());

  if (queryTemplate) {
    const configObject = new ConfigObject();
    Object.assign(configObject, queryTemplate);

    listRequest.setQueryTemplate(ConfigObject.toProto(configObject));
  }
  if (queryMask) {
    listRequest.setQueryMask(queryMask);
  }
  return listRequest;
}

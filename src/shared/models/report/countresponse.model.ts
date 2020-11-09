import {CountResponseProto} from '../../../api';

export class CountResponse {
  count: number;

  constructor({
                count = 0
              }: Partial<CountResponse> = {}) {
    this.count = count;
  }

  static fromProto(proto: CountResponseProto) {
    const countResponse = new CountResponse({
      count: proto.getCount()
    });
    return countResponse;
  }
}

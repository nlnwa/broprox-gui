import {FormControl} from '@angular/forms';
import * as ipaddress from 'ip-address';

export class CrawlHostGroupConfigIpValidation {

  static validRanges: boolean;


  static allRangesValid(): boolean {
    return this.validRanges;
  }

  /**
   * Checks if an IP address is a valid ipv4 or ipv6 address, using ip-address library
   * @param {string} ip
   * @returns {boolean}
   */

  static isValidIp(ip: string): boolean {
    const ipv6 = ipaddress.Address6;
    const ipv4 = ipaddress.Address4;

    const ipv6Addr = new ipv6(ip);
    const ipv4Addr = new ipv4(ip);

    if (ipv6Addr.isValid()) {
      return true;

    }
    if (ipv4Addr.isValid()) {
      return true;
    } else {
      return false;
    }
  }

  /**
   *
   * Custom validator
   * @param {FormControl} control
   * @returns {any}
   */

  static ipAddressValidator(control: FormControl) {
    const ip = control.value;
    if (!CrawlHostGroupConfigIpValidation.isValidIp(ip)) {
      return {ipAddressValidator: true}
    }
    return null;
  }

  /**
   * Checks if the first group in the from and to address is the same.
   *
   * if the input address is ipv6 the groups gets split on ':'
   * for ipv4 groups are split on '.'
   * @param {string} ipFrom
   * @param {string} ipTo
   * @param {boolean} isIpv6
   * @returns {boolean}
   */
  static isInRange(ipFrom: string, ipTo: string, isIpv6: boolean) {

    let ipFromArray;
    let ipToArray;

    if (isIpv6) {
      ipFromArray = ipFrom.split(':');
      ipToArray = ipTo.split(':');
      if (ipFromArray[0] === ipToArray[0]) {
        return true;
      } else {
        return false;
      }
    }

    if (!isIpv6) {
      ipFromArray = ipFrom.split('.');
      ipToArray = ipTo.split('.');
      if (ipFromArray[0] === ipToArray[0]) {
        return true;
      } else {
        return false;
      }
    }
  }

  /**
   * Checks if the from and to IP address is valid and that both are of the same version (ipv4 / ipv6)
   * Then it check if both addresses first groups is the same, and returns the result
   *
   * @param {string} fromIp
   * @param {string} toIp
   * @returns {boolean}
   */
  static isValidRange(fromIp: string, toIp: string): boolean {
    const ipv6 = ipaddress.Address6;
    const ipv4 = ipaddress.Address4;
    const ipv6From = new ipv6(fromIp);
    const ipv6To = new ipv6(toIp);
    const ipv4From = new ipv4(fromIp);
    const ipv4To = new ipv4(toIp);

    if (ipv6From.isValid() && ipv6To.isValid()) {
      if (this.isInRange(ipv6From.correctForm(), ipv6To.correctForm(), true)) {
        this.validRanges = true;
        return true;
      } else {
        this.validRanges = false;
        return false;
      }

    }

    if (ipv4From.isValid() && ipv4To.isValid()) {
      if (this.isInRange(ipv4From.correctForm(), ipv4To.correctForm(), false)) {
        this.validRanges = true;
        return true;
      } else {
        this.validRanges = false;
        return false;
      }
    }

    if (!(ipv4From.isValid() && ipv4To.isValid()) || !(ipv6From.isValid() && ipv4To.isValid())) {
      return false;
    }

  }
}

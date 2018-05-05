import { LoggingDataLayerInterface } from './interfaces/logging-data-layer.interface';
import { UserTimestampUtil } from '../utils/user-timestamp/user-timestamp.util';
import { ErrorJsDataLayerInterface } from '../js-error/interfaces/error-js-data-layer.interface';

/**
 * Generic logging class
 *
 * used to pushLog miscellaneous logs to gtm
 *
 * @export
 * @class Logging
 */

export class Logging {
  /**
   * Push generic manual logs to GTM
   *
   * @static
   * @param {LoggingDataLayerInterface} pushParams
   * @memberof Logging
   */
  public pushLog(pushParams: LoggingDataLayerInterface): void {
    pushParams.event_timestamp = UserTimestampUtil();
    (window as any).dataLayer.push(pushParams);
  }
}

export function log(userDefinedParams: LoggingDataLayerInterface): void {
  (new Logging().pushLog(userDefinedParams));
}
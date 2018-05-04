import { LoggingDataLayerInterface } from '@app/logging/interfaces/logging-data-layer.interface';
import { UserTimestampUtil } from '@app/utils/user-timestamp/user-timestamp.util';

/**
 * Generic logging class
 *
 * used to log miscellaneous logs to gtm
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
  static log(pushParams: LoggingDataLayerInterface): void {
    pushParams.event_timestamp = UserTimestampUtil();
    (window as any).dataLayer.push(pushParams);
  }
}

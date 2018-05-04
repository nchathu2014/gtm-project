/**
 * XHR push method data layer push interface
 *
 * @export
 * @class XhrError
 */
import { XhrErrorDataLayerInterface } from './interfaces/xhr-error-data-layer.interface';
import { EventLogType } from '../enums/event-log.type';
import { UserTimestampUtil } from '../utils/user-timestamp/user-timestamp.util';

export class XhrError {
  /**
   * Push manual xhr errors to GTM
   *
   * @static
   * @param {XhrErrorDataLayerInterface} pushParams
   * @memberof XhrError
   */
  static xhrErrorLog(pushParams: XhrErrorDataLayerInterface): void {
    pushParams.event_log = EventLogType.ERROR;
    pushParams.event_timestamp = UserTimestampUtil();
    (window as any).dataLayer.push(pushParams);
  }
}

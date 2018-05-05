/**
 * XHR push method data layer push interface
 *
 * @export
 * @class XhrError
 */
import { XhrErrorDataLayerInterface } from './interfaces/xhr-error-data-layer.interface';
import { EventLogType } from '../enums/event-log.type';
import { UserTimestampUtil } from '../utils/user-timestamp/user-timestamp.util';
import { LoggingDataLayerInterface } from '../logging/interfaces/logging-data-layer.interface';
import { Logging } from '../logging/logging';

export class XhrError {
  /**
   * Push manual xhr errors to GTM
   *
   * @static
   * @param {XhrErrorDataLayerInterface} pushParams
   * @memberof XhrError
   */
  public pushXhrError(pushParams: XhrErrorDataLayerInterface): void {
    pushParams.event_log = EventLogType.ERROR;
    pushParams.event_timestamp = UserTimestampUtil();
    (window as any).dataLayer.push(pushParams);
  }
}

export function xhrErrorLog(
  userDefinedParams: XhrErrorDataLayerInterface,
): void {
  new XhrError().pushXhrError(userDefinedParams);
}

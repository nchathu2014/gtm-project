import { XhrErrorDataLayerInterface } from '@app/xhr-error/interfaces/xhr-error-data-layer.interface';
import { EventLogEnum } from '@app/enums/event-log.enum';
import { UserTimestampUtil } from '@app/utils/user-timestamp/user-timestamp.util';

/**
 * XHR push method data layer push interface
 *
 * @export
 * @class XhrError
 */
export class XhrError {
  /**
   * Push manual xhr errors to GTM
   *
   * @static
   * @param {XhrErrorDataLayerInterface} pushParams
   * @memberof XhrError
   */
  static xhrErrorLog(pushParams: XhrErrorDataLayerInterface): void {
    pushParams.event_log = EventLogEnum.ERROR;
    pushParams.event_timestamp = UserTimestampUtil();
    (window as any).dataLayer.push(pushParams);
  }
}

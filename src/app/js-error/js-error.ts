import { UserTimestampUtil } from '../utils/user-timestamp/user-timestamp.util';
import { ErrorJsDataLayerInterface } from './interfaces/error-js-data-layer.interface';

class JsErrors {
  /**
   * used to pushLog javascript exception errors
   * method must be manually invoked
   * @param {ErrorJsDataLayerInterface} pushParams
   */
  public pushJSError(pushParams: ErrorJsDataLayerInterface): void {
    pushParams.event_timestamp = UserTimestampUtil(pushParams.event_timestamp);
    (window as any).dataLayer.push(pushParams);
  }
}

export function logJSError(userDefinedParams: ErrorJsDataLayerInterface): void {
  new JsErrors().pushJSError(userDefinedParams);
}

import { XhrErrorDataLayerInterface } from '@app/xhr-error/interfaces/xhr-error-data-layer.interface';

/**
 * XHR push method data layer push interface
 *
 * @export
 * @class XhrError
 */
export class XhrError {
  static xhrErrorLog(pushParams: XhrErrorDataLayerInterface): void {
    (window as any).dataLayer.push(pushParams);
  }
}

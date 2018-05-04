import { JsErrors } from '@app/js-error/js-error';
import { XhrError } from '@app/xhr-error/xhr-error';
import { Logging } from '@app/logging/logging';
import { WatchJsArgsInterface } from '@app/js-error/interfaces/watch-js-args.interface';
import { ErrorJsDataLayerInterface } from '@app/js-error/interfaces/error-js-data-layer.interface';
import { XhrErrorDataLayerInterface } from '@app/xhr-error/interfaces/xhr-error-data-layer.interface';
import { LoggingDataLayerInterface } from '@app/logging/interfaces/logging-data-layer.interface';

export default {
  jsErrorWatch: (params: WatchJsArgsInterface) => {
    return new JsErrors.watchJSErrors(params);
  },
  jsError: (params: ErrorJsDataLayerInterface) => {
    return new JsErrors.logJSErrors(params);
  },
  xhrError: (params: XhrErrorDataLayerInterface) => {
    return new XhrError.xhrErrorLog(params);
  },
  logging: (params: LoggingDataLayerInterface) => {
    return new Logging.log(params);
  },
};

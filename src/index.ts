import { JsErrors } from '@app/js-error/js-error';
import { XhrError } from '@app/xhr-error/xhr-error';
import { Logging } from '@app/logging/logging';

export default {
  jsErrorWatch: params => {
    return new JsErrors.watchJSErrors(params);
  },
  jsError: params => {
    return new JsErrors.logJSErrors(params);
  },
  xhrError: params => {
    return new XhrError.xhrErrorLog(params);
  },
  logging: params => {
    return new Logging.log(params);
  },
};

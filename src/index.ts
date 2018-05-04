import { JsErrors } from '@app/js-error/js-error';
import { XhrError } from '@app/xhr-error/xhr-error';

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
};

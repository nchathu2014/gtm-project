import { EventLogType } from '../enums/event-log.type';
import { UserTimestampUtil } from '../utils/user-timestamp/user-timestamp.util';
import { SanitizeStackErrorUtil } from '../utils/sanitize-string/to-string.util';
import { WatchJsDataLayerErrorsInterface } from './interfaces/watch-js-data-layer-errors.interface';
import { WatchJsArgsInterface } from './interfaces/watch-js-args.interface';
import { EventCategoryType } from '../enums/event-category.type';

class JsErrorWatch {
  /**
   * method which listens to the window.onerror event handler.
   * when a javascript error occurs, the event handler automatically pushes the pushLog
   * to the GTM dataLayer
   *
   * @pushParams {WatchJsArgsInterface} pushParams
   */
  public pushWatchedJSError(pushParams: WatchJsArgsInterface): void {
    window.onerror = (msg, url, line, col, error) => {
      const constructDataPush: WatchJsDataLayerErrorsInterface = {
        event: EventCategoryType.JS_ERROR_WATCH,
        event_log: EventLogType.ERROR,
        event_source: url,
        error_js_watch_line: line,
        error_js_watch_message: msg.toString(),
        error_js_watch_stack: SanitizeStackErrorUtil(error.stack),
        event_timestamp: UserTimestampUtil(),
        id_assignment: pushParams.id_assignment,
        id_correlation: pushParams.id_correlation,
        id_section: pushParams.id_section,
        id_user: pushParams.id_user,
      };
      (window as any).dataLayer.push(constructDataPush);
    };
  }
}

export function WatchJSErrors(userDefinedParams: WatchJsArgsInterface): void {
  (new JsErrorWatch().pushWatchedJSError(userDefinedParams));
}
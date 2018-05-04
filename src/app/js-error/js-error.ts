import { WatchJsArgsInterface } from '@app/js-error/interfaces/watch-js-args.interface';
import { WatchJsDataLayerErrorsInterface } from '@app/js-error/interfaces/watch-js-data-layer-errors.interface';
import { UserTimestampUtil } from '@app/utils/user-timestamp/user-timestamp.util';
import { EventLogType } from '@app/enums/event-log.type';
import { EventCategoryType } from '@app/enums/event-category.type';
import { ErrorJsDataLayerInterface } from '@app/js-error/interfaces/error-js-data-layer.interface';
import { SanitizeStackErrorUtil } from '@app/utils/sanitize-string/to-string.util';

export class JsErrors {
  /**
   * method which listens to the window.onerror event handler.
   * when a javascript error occurs, the event handler automatically pushes the log
   * to the GTM dataLayer
   *
   * @pushParams {WatchJsArgsInterface} pushParams
   */
  static watchJSErrors(pushParams: WatchJsArgsInterface): void {
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

  /**
   * used to log javascript exception errors
   * method must be manually invoked
   * @param {ErrorJsDataLayerInterface} pushParams
   */
  static logJSErrors(pushParams: ErrorJsDataLayerInterface): void {
    pushParams.event_timestamp = UserTimestampUtil();
    (window as any).dataLayer.push(pushParams);
  }
}

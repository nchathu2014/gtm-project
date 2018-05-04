import { EventInterface } from '@app/interfaces/event.interface';

/**
 * Watch data layer push object interface
 *
 * @export
 * @interface WatchJsDataLayerErrorsInterface
 * @extends {EventInterface}
 */
export interface WatchJsDataLayerErrorsInterface extends EventInterface {
  error_js_watch_message: string;
  error_js_watch_line: number;
  error_js_watch_stack: string;
}

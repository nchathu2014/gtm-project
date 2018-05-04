/**
 * Watch data layer push object interface
 *
 * @export
 * @interface WatchJsDataLayerErrorsInterface
 * @extends {EventInterface}
 */
import { EventInterface } from '../../interfaces/event.interface';

export interface WatchJsDataLayerErrorsInterface extends EventInterface {
  error_js_watch_message: string;
  error_js_watch_line: number;
  error_js_watch_stack: string;
}

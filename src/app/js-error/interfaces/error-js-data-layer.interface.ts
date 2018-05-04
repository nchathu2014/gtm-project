import { EventInterface } from '@app/interfaces/event.interface';
/**
 * Interface for manual pushing javascript errors
 *
 * @export
 * @interface ErrorJsDataLayerInterface
 * @extends {EventInterface}
 */
export interface ErrorJsDataLayerInterface extends EventInterface {
  error_js_message: any;
}

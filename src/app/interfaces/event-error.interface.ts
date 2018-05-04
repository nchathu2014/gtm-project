import { EventInterface } from './event.interface';

/**
 * Interface for logging Errors
 *
 * @export
 * @interface EventErrorInterface
 * @extends {EventInterface}
 */

export interface EventErrorInterface extends EventInterface {
  error_code?: any;
  error_line_number?: number;
  error_message: string;
}

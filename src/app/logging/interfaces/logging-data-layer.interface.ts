import { EventInterface } from '../../interfaces/event.interface';

export interface LoggingDataLayerInterface extends EventInterface {
  log_message: string;
}

import { EventInterface } from '@app/interfaces/event.interface';

export interface LoggingDataLayerInterface extends EventInterface {
  log_message: string;
}

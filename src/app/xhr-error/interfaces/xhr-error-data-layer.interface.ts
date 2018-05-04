import { EventInterface } from '../../interfaces/event.interface';

export interface XhrErrorDataLayerInterface extends EventInterface {
  error_xhr_message: string;
  error_xhr_status_code?: number;
  error_xhr_url?: string;
}

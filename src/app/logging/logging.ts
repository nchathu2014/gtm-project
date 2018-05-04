import { LoggingDataLayerInterface } from '@app/logging/interfaces/logging-data-layer.interface';
import { UserTimestampUtil } from '@app/utils/user-timestamp/user-timestamp.util';

export class Logging {
  static log(pushParams: LoggingDataLayerInterface): void {
    pushParams.event_timestamp = UserTimestampUtil();
    (window as any).dataLayer.push(pushParams);
  }
}
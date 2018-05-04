import { EventLogEnum } from '@app/enums/event-log.enum';
import { EventEnvEnum } from '@app/enums/event-env.enum';

/**
 * Main interface for the data layer
 *
 * @export
 * @interface EventInterface
 */
export interface EventInterface {
  // name of the GTM event
  event: string;

  // URL/Page in which the event is being emitted
  event_source?: string;

  // client side time which the event was triggered
  event_timestamp: string;

  // type of event, e.g. error, warning, info
  event_log?: EventLogEnum;

  // event environment e.g. prod/stg etc...
  event_env?: EventEnvEnum;

  // the component in which the event is triggered, e.g. rubric component 😋
  component?: string;

  // current correlation
  id_correlation?: string;

  // current section ID
  id_section?: string;

  // assignment ID
  id_assignment?: string;

  // user PI ID
  id_user?: string;
}

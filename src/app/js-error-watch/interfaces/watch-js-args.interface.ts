/**
 * Param interface for auto pushing js errors method
 *
 * @export
 * @interface WatchJsArgsInterface
 */
export interface WatchJsArgsInterface {
  // current correlation
  id_correlation?: string;

  // current section ID
  id_section?: string;

  // assignment ID
  id_assignment?: string;

  // user PI ID
  id_user?: string;

  // optional user timestamp
  event_timestamp?: string;
}

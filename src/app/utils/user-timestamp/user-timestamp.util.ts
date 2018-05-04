/**
 * Generates a iso 8601 compliant timestamp
 * client side
 * @export
 * @returns {string}
 */
export function UserTimestampUtil(): string {
  return new Date().toISOString();
}

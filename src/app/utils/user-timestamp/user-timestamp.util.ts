/**
 * Generates a iso 8601 compliant timestamp
 * if the user has not provided one
 * client side
 * @param {string} userTimeStamp
 * @returns {string}
 * @constructor
 */
export function UserTimestampUtil(userTimeStamp?: any): string {
  return userTimeStamp ? userTimeStamp : new Date().toISOString();
}

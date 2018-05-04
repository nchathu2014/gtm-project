/**
 * Sanitizes strings with \n to space string
 *
 * @export
 * @param {*} data
 * @returns {string}
 */
export function SanitizeStackErrorUtil(data: any): string {
  return data.split('\n').join(' ');
}

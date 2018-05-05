import { UserTimestampUtil } from './user-timestamp.util';

describe('Time stamp', () => {
  it('should generate a timestamp', async () => {
    const timestamp = UserTimestampUtil();
    expect(typeof timestamp).toBe('string');
  });

  it('should be a iso 8601 date format', async () => {
    const timestamp = UserTimestampUtil();
    const isoPattern = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
    const isISO = isoPattern.test(timestamp);

    expect(isISO).toBeTruthy();
  });

  it('should generate a unix timestamp if the user has supplied one', async () => {
    const timestamp = UserTimestampUtil(Date.now());
    expect(/[a-z]/i.test(timestamp)).not.toBeTruthy();
  });
});

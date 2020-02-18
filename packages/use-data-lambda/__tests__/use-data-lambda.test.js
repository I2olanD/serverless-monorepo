import { handle } from 'lib/index';
import mockData from '../event_mock.json';

describe('use-data-lambda', () => {
  test('to return mock data', () => {
    const result = handle(mockData);
    expect(result).toBe('{\"foo\":\"bar\"}');
  });
});

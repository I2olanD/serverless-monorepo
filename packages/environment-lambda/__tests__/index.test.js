import { handle } from 'lib/index';

describe('environment-lambda', () => {
  test('to return bar', () => {
    const result = handle();
    expect(result).toBe(`This lambda is running on: ${process.env.environment}`);
  });
});

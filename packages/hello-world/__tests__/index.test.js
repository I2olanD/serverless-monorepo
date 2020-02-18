import { handle } from '../lib/handler';

test('to return bar', () => {
  const foo = handle();
  expect(foo).toBe('bar');
});

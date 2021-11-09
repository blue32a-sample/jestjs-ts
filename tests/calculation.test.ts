import { plus, minus } from '../src/calculation';

test('plus', () => {
  expect(plus(2, 3)).toBe(5);
});

test('minus', () => {
  expect(minus(5, 2)).toBe(3);
});

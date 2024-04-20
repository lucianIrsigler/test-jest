const multiply = require('../multiply');

test('multiply 1x2', () => {
  expect(multiply(1, 2)).toBe(2);
});

test('multiply 2x2', () => {
    expect(multiply(2, 2)).toBe(4);
});

test('multiply 2x0', () => {
    expect(multiply(2, 0)).toBe(0);
});

test('multiply 0x2', () => {
    expect(multiply(0, 2)).toBe(0);
});

test('multiply -1x2', () => {
    expect(multiply(-1, 2)).toBe(-2);
});
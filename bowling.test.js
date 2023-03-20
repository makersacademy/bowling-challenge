const bowling = require('./bowling');

test('expect 0', () => {
  expect(bowling([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(0);
});

test('expect 12', () => {
  expect(bowling([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10, 1,0])).toBe(12);
});

test('expect 15', () => {
    expect(bowling([1,1, 0,0, 0,0, 0,0, 0,0, 1,1, 0,0, 0,0, 0,0, 10,1,0])).toBe(15);
  });

test('expect 98', () => {
  expect(bowling([8,1, 8,1, 8,1, 8,1, 8,1, 8,1, 8,1, 8,1, 8,1, 8,1, 8])).toBe(98);
});

test('expect 147', () => {
    expect(bowling([10, 3,1, 4,5, 5,5, 10, 6,2, 1,2, 10, 10, 3,6, 10, 10])).toBe(147);
  });

test('expect 300', () => {
  expect(bowling([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toBe(300);
});
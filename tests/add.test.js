const add = require('../lib/add');

describe('add', () => {
  it ('add 2 and 2', () => {
    expect(add(2,2)).toBe(4)
  });
});
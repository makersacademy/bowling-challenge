const Frame = require('../../src/classes/frame');

describe('Frame', () => {
  test('initializes firstRoll, secondRoll, and bonus correctly', () => {
    const firstRoll = 5;
    const secondRoll = 4;
    const frame = new Frame(firstRoll, secondRoll);

    expect(frame.firstRoll).toBe(firstRoll);
    expect(frame.secondRoll).toBe(secondRoll);
    expect(frame.bonus).toBe(0);
  });
});
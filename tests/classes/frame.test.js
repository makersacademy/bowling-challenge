const Frame = require('../../lib/classes/frame');

describe('Frame', () => {
  test('initializes firstRoll, secondRoll, and bonus correctly', () => {
    const firstRoll = 5;
    const secondRoll = 4;
    const frame = new Frame(firstRoll, secondRoll);

    expect(frame.firstRoll).toBe(firstRoll);
    expect(frame.secondRoll).toBe(secondRoll);
    expect(frame.bonus).toBe(0);
  });

  test('isStrike returns true when first roll is 10', () => {
    const frame = new Frame(10);

    expect(frame.isStrike()).toBe(true);
  });

  test('isStrike returns false when first roll is not 10', () => {
    const frame = new Frame(5, 4);

    expect(frame.isStrike()).toBe(false);
  });

  test('isSpare returns true when the sum of first and second rolls is 10 and it is not a strike', () => {
    const frame = new Frame(5, 5);

    expect(frame.isSpare()).toBe(true);
  });

  test('isSpare returns false when the sum of first and second rolls is not 10', () => {
    const frame = new Frame(5, 4);

    expect(frame.isSpare()).toBe(false);
  });

  test('isSpare returns false when it is a strike', () => {
    const frame = new Frame(10);

    expect(frame.isSpare()).toBe(false);
  });

  test('throws an error when a roll has more than 10 pins', () => {
    expect(() => {
      const frame = new Frame(11, 0);
    }).toThrow('Invalid number of pins. Maximum is 10.');
  });
});
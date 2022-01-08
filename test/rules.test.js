const Rules = require('../lib/rules.js')

describe('Rules', () => {
  let rules;
  beforeEach(() => {
    rules = new Rules();
  });

  test('maxFrames default to 10', () => {
    expect(rules.maxFrames).toEqual(10);
  });

  describe('.isStrike', () => {
    test('returns true if input is 10', () => {
      expect(rules.isStrike([10])).toEqual(true);
    });
    test('returns false if input is not a strike', () => {
      expect(rules.isStrike([2,8])).toEqual(false);
      expect(rules.isStrike([5,5])).toEqual(false);
      expect(rules.isStrike([9])).toEqual(false);
    });
  });

  describe('.isSpare', () => {
    test('returns true if frame total is 10', () => {
      expect(rules.isSpare([5,5])).toEqual(true);
      expect(rules.isSpare([4,6])).toEqual(true);
    });
    test('returns false if input is not a spare', () => {
      expect(rules.isSpare([2,1])).toEqual(false);
      expect(rules.isSpare([5,3])).toEqual(false);
      expect(rules.isSpare([1])).toEqual(false);
    });
  });
});
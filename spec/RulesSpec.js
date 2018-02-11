const Rules = require('../src/Rules');

describe('Rules', () => {
  describe('#maxFrameLength', () => {
    it('returns 2', () => {
      expect(Rules.maxFrameLength()).toEqual(2);
    });
  });

  describe('#isSpare', () => {
    it('checks if rolls recorded mean a spare', () => {
      const rolls = { 1: 5, 2: 5 };

      expect(Rules.isSpare(rolls)).toBe(true);
    });
  });

  describe('#isStrike', () => {
    it('checks if roll recorded means a strike', () => {
      const roll = { 1: 10 };

      expect(Rules.isStrike(roll)).toBe(true);
    });
  });
});

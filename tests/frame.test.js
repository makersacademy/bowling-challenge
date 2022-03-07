const Frame = require('../frame')

let frame;

beforeEach(() => {
  frame = new Frame;
});

describe (Frame, () => {

  describe ('constructor', () => {
    it ('starts a new game, with frame number set to 1', () => {
      expect(frame.currentFrame).toBe(1);
    });
  });

  describe ('isStrike', () => {
    it ('returns true when score of ten is recorded with 1st roll', () => {
      expect(frame.isStrike([10])).toBe(true);
    });

    it ('returns false when a spare is passed', () => {
      expect(frame.isStrike([8,2])).toBe(false);
    });
  });

  describe ('isSpare', () => {
    it ('returns true when a spare is passed', () => {
      expect(frame.isSpare([8,2])).toBe(true);
    });

    it ('returns false when a strike is passed', () => {
      expect(frame.isSpare([10])).toBe(false);
    });

    it ('returns false when 2 scores not totalling ten are passed', () => {
      expect(frame.isSpare([6,1])).toBe(false);
    });
  });
});
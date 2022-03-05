const Frame = require('./frame')

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

  describe ('strike', () => {
    it ('returns true when score of ten is recorded with 1st roll', () => {
      expect(frame.strike([10])).toBe(true);
    });

    it ('returns false when a spare is passed', () => {
      expect(frame.strike([8,2])).toBe(false);
    });
  });

  describe ('spare', () => {
    it ('returns true when a spare is passed', () => {
      expect(frame.spare([8,2])).toBe(true);
    });

    it ('returns false when a strike is passed', () => {
      expect(frame.spare([10])).toBe(false);
    });

    it ('returns false when 2 scores not totalling ten are passed', () => {
      expect(frame.spare([6,1])).toBe(false);
    });
  });
});
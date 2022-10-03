const Frame = require('../frame')

describe('Frame', () => {
  beforeEach(() => {
    frame = new Frame();
  });

  describe('isStrike()', () => {
    it('returns true if there is strike', () => {
      frame.setFirstRoll(10);
      expect(frame.isStrike()).toEqual(true);
    });

    it('returns false if there is no strike', () => {
      frame.setFirstRoll(5);
      expect(frame.isStrike()).toEqual(false);
    });

    it('returns false if called before first roll', () => {
      expect(frame.isStrike()).toEqual(false);
    });
  });


  describe('isSpare()', () => {
    it('returns true if there is spare', () => {
      frame.setFirstRoll(6);
      frame.setSecondRoll(4);
      expect(frame.isSpare()).toEqual(true);
    });

    it('returns false if there is no spare', () => {
      frame.setFirstRoll(6);
      frame.setSecondRoll(3);
      expect(frame.isSpare()).toEqual(false);
    });

    it('returns false if there is strike', () => {
      expect(frame.isSpare()).toEqual(false);
    });

    it('returns false if there is no spare', () => {
      frame.setFirstRoll(6);
      expect(frame.isSpare()).toEqual(false);
    });
  });
});

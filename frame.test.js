const Frame = require('./frame');

describe('frame', () => {
  describe('addPins', () => {
    it("adds the current roll's pins to the roundPins array", () => {
      let currentFrame = new Frame();

      let pinsKnocked = 1;
      currentFrame.addPins(pinsKnocked);

      let pinsKnocked2 = 4;
      currentFrame.addPins(pinsKnocked2);

      expect(currentFrame.framePins).toStrictEqual([1, 4]);
    });
  });

  describe('isStrike', () => {
    it('returns true if frame is strike', () => {
      let currentFrame = new Frame();

      let pinsKnocked = 10;
      currentFrame.addPins(pinsKnocked);
      expect(currentFrame.isStrike()).toEqual(true);
    });

    it('returns false if frame is not a strike', () => {
      let currentFrame = new Frame();

      let pinsKnocked1 = 2;
      currentFrame.addPins(pinsKnocked1);

      let pinsKnocked2 = 8;
      currentFrame.addPins(pinsKnocked2);

      expect(currentFrame.isStrike()).toEqual(false);
    });
  });
});

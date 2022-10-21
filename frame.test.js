const Frame = require('./frame');

describe('frame', () => {
  const currentFrame = new Frame();

  describe('addPins', () => {
    it("adds the current roll's pins to the roundPins array", () => {
      let pinsKnocked = 1;
      currentFrame.addPins(pinsKnocked);

      let pinsKnocked2 = 4;
      currentFrame.addPins(pinsKnocked2);

      expect(currentFrame.roundPins).toStrictEqual([1, 4]);
    });
  });
});

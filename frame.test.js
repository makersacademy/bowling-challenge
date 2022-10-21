const Frame = require('./frame');

describe('frame', () => {
  beforeEach(() => {
    const currentRound = new Round();
  });
  describe('addPins', () => {
    it("adds the current roll's pins to the roundPins array", () => {
      let pinsKnocked = 1;
      currentRound.addPins(pinsKnocked);

      let pinsKnocked2 = 4;
      currentRound.addPins(pinsKnocked2);

      expect(currentRound.roundPins()).toBe([1, 4]);
    });
  });
});

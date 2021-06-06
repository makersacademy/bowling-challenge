const Frame = require("../src/Frame.js");

describe("Frame", () => {
  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  describe("#roll", () => {
    it("adds to knocked down pins", () => {
      frame.roll(3);
      frame.roll(4);

      expect(frame.knockedDownPins).toEqual(7);
    });
  });
});

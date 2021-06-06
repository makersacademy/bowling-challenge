const Frame = require("../src/Frame.js");

describe("Frame", () => {
  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  describe("#roll", () => {
    it("adds to the frame score", () => {
      frame.roll(3);
      frame.roll(4);

      expect(frame.frameScore()).toEqual(7);
    });
  });

  describe("#isStrike", () => {
    it("returns true if the frame is a strike", () => {
      frame.roll(10);

      expect(frame.isStrike()).toBe(true);
    });

    it("returns false if the frame is not a strike", () => {
      frame.roll(0);
      frame.roll(10);

      expect(frame.isStrike()).toBe(false);
    });
  });
});

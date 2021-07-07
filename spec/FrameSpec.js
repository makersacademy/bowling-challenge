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

    it("is closed after a strike", () => {
      frame.roll(10);
      expect(frame.isClosed()).toEqual(true);
    });
  });

  describe("#isSpare", () => {
    it("returns true if the frame is a spare", () => {
      frame.roll(8);
      frame.roll(2);

      expect(frame.isSpare()).toBe(true);
    });

    it("returns false if the frame is not a spare", () => {
      frame.roll(2);
      frame.roll(5);

      expect(frame.isSpare()).toBe(false);
    });
  });

  describe("#frameScore", () => {
    it("returns the frame score", () => {
      frame.roll(2);
      frame.roll(4);
      expect(frame.frameScore()).toEqual(6);
    });
  });
});

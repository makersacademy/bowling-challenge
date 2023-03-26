const Frame = require("../lib/frame");

describe("Frame Class", () => {
  describe("add roll function", () => {
    it("has no score when created", () => {
      const frame = new Frame();
      expect(frame.getRoll1()).toBe(null);
    });

    it("has a score against roll1", () => {
      const frame = new Frame();
      frame.addRoll(4);
      expect(frame.getRoll1()).toBe(4);
      expect(frame.getRoll2()).toBe(null);
    });

    it("has a score against roll2", () => {
      const frame = new Frame();
      frame.addRoll(4);
      frame.addRoll(3);
      expect(frame.getRoll1()).toBe(4);
      expect(frame.getRoll2()).toBe(3);
    });

    it("does not allow a score greater than 10", () => {
      const frame = new Frame();
      frame.addRoll(7);
      expect(() => {
        frame.addRoll(6);
      }).toThrow("Maximum score of 10 allowed");
    });

    it("does not allow a score greater than 10", () => {
      const frame = new Frame();
      expect(() => {
        frame.addRoll(11);
      }).toThrow("Maximum score of 10 allowed");
    });
  });

  describe("isSpare function", () => {
    it("returns true if roll1 and roll2 are equal to 10", () => {
      const frame = new Frame();
      frame.addRoll(5);
      frame.addRoll(5);
      expect(frame.isSpare()).toBe(true);
    });

    it("returns false if roll1 and roll2 are not equal to 10", () => {
      const frame = new Frame();
      frame.addRoll(5);
      frame.addRoll(4);
      expect(frame.isSpare()).toBe(false);
    });
  });

  describe("isStrike function", () => {
    it("returns true if roll1 is equal to 10", () => {
      const frame = new Frame();
      frame.addRoll(10);
      expect(frame.isStrike()).toBe(true);
    });

    it("returns false if roll1 is not equal to 10", () => {
      const frame = new Frame();
      frame.addRoll(4);
      expect(frame.isStrike()).toBe(false);
    });
  });

  describe("isRegularFrameComplete function", () => {
    it("knows it is not the tenth frame", () => {
      const frame = new Frame();
      frame.setTenthFrame();
      expect(frame.isRegularFrameComplete()).toBe(false);
    });

    it("knows it is complete if roll1 is a strike", () => {
      const frame = new Frame();
      frame.addRoll(10);
      expect(frame.isRegularFrameComplete()).toBe(true);
    });

    it("knows it is complete if roll1 and roll2 have been played", () => {
      const frame = new Frame();
      frame.addRoll(3);
      frame.addRoll(5);
      expect(frame.isRegularFrameComplete()).toBe(true);
    });

    it("knows it's not complete if only roll1 has been played and is not a strike", () => {
      const frame = new Frame();
      frame.addRoll(3);
      expect(frame.isRegularFrameComplete()).toBe(false);
    });
  });

  describe("isTenthFrameComplete function", () => {
    it("knows it is not complete if it's not the tenth frame", () => {
      const frame = new Frame();
      frame.setTenthFrame();
      expect(frame.isTenthFrameComplete()).toBe(false);
    });

    it("knows it is complete if 3 rolls have been played", () => {
      const frame = new Frame();
      frame.setTenthFrame();
      frame.addRoll(5);
      frame.addRoll(5);
      frame.addRoll(5);
      expect(frame.isTenthFrameComplete()).toBe(true);
    });

    it("knows it is not complete if roll3 has not been played and roll1 is a strike", () => {
      const frame = new Frame();
      frame.setTenthFrame();
      frame.addRoll(10);
      frame.addRoll(5);
      expect(frame.isTenthFrameComplete()).toBe(false);
    });

    it("knows it is not complete if roll3 has not been played and roll2 is a spare", () => {
      const frame = new Frame();
      frame.setTenthFrame();
      frame.addRoll(5);
      frame.addRoll(5);
      expect(frame.isTenthFrameComplete()).toBe(false);
    });

    it("knows it is not complete if roll2 has not been played and it is not a strike", () => {
      const frame = new Frame();
      frame.setTenthFrame();
      frame.addRoll(9);
      expect(frame.isTenthFrameComplete()).toBe(false);
    });

    it("knows it is complete if roll1 and roll2 did not make a spare", () => {
      const frame = new Frame();
      frame.setTenthFrame();
      frame.addRoll(4);
      frame.addRoll(4);
      expect(frame.isTenthFrameComplete()).toBe(true);
    });
  });

  describe("getFrameScore function", () => {
    it("returns score of a frame if roll1 is a strike", () => {
      const frame = new Frame();
      frame.addRoll(10);
      expect(frame.getFrameScore()).toBe(10);
    });

    it("returns score of a frame if roll1 is not a strike", () => {
      const frame = new Frame();
      frame.addRoll(6);
      frame.addRoll(3);
      expect(frame.getFrameScore()).toBe(9);
    });

    it("returns score of a frame if roll3 played", () => {
      const frame = new Frame();
      frame.setTenthFrame();
      frame.addRoll(5);
      frame.addRoll(5);
      frame.addRoll(8);
      expect(frame.getFrameScore()).toBe(18);
    });
  });
});

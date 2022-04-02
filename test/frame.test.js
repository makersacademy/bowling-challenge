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
  });

  describe("isStrike function", () => {
    it("returns true if roll1 is equal to 10", () => {
      const frame = new Frame();
      frame.addRoll(10);
      expect(frame.isStrike()).toBe(true);
    });
  });
});

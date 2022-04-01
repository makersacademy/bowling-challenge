const Frame = require("./frame.js");

describe(Frame, () => {
  it("stores the frame number", () => {
    const frame = new Frame(1);
    expect(frame.getNumber()).toBe(1);
  });

  it("begins with no scores", () => {
    const frame = new Frame(1);
    expect(frame.getScore()).toBe(0);
  });

  it("updates the score when pins are knocked down", () => {
    const frame = new Frame(1);
    frame.addScore(3);
    expect(frame.getScore()).toBe(3);
  });

  describe("reports whether the frame is complete", () => {
    it("true when two sets of pins have been added", () => {
      const frame = new Frame(1);
      frame.addScore(3);
      frame.addScore(3);
      expect(frame.isComplete()).toBe(true);
    });
    it("true when a strike has been scored", () => {
      const frame = new Frame(1);
      frame.addScore(10);
      expect(frame.isComplete()).toBe(true);
    });
    it("false when fewer than 10 pins have been knocked down in one roll", () => {
      const frame = new Frame(1);
      frame.addScore(6);
      expect(frame.isComplete()).toBe(false);
    });
  });
});

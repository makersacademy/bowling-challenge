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

  it("registers if a spare has been scored", () => {
    const frame = new Frame(1);
    frame.addScore(9);
    frame.addScore(1);
    expect(frame.isSpare()).toBe(true);
  });

  it("registers if a strike has been scored", () => {
    const frame = new Frame(1);
    frame.addScore(10);
    expect(frame.isStrike()).toBe(true);
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

  describe("can have bonus rolls added", () => {
    it("when a strike is scored two bonus rolls are added", () => {
      const frame = new Frame(1);
      frame.addScore(10);
      expect(frame.isBonusComplete()).toBe(false);
      frame.addBonus(3);
      frame.addBonus(5);
      expect(frame.isBonusComplete()).toBe(true);
      expect(frame.getBonus()).toBe(8);
      expect(frame.getScore()).toBe(18);
    });
    it("when a spare is scored a single bonus roll is added", () => {
      const frame = new Frame(1);
      frame.addScore(9);
      frame.addScore(1);
      expect(frame.isBonusComplete()).toBe(false);
      frame.addBonus(3);
      frame.addBonus(5);
      expect(frame.isBonusComplete()).toBe(true);
      expect(frame.getBonus()).toBe(3);
      expect(frame.getScore()).toBe(13);
    });
    it("with a normal score, no bonus rolls are added", () => {
      const frame = new Frame(1);
      frame.addScore(5);
      frame.addScore(4);
      expect(frame.isBonusComplete()).toBe(true);
      frame.addBonus(3);
      frame.addBonus(5);
      expect(frame.isBonusComplete()).toBe(true);
      expect(frame.getBonus()).toBe(0);
      expect(frame.getScore()).toBe(9);
    });
  });
});

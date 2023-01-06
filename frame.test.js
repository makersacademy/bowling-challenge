const Frame = require("./frame");

describe("scores", () => {
  it("returns the scores of the frame", () => {
    const frame = new Frame([2, 1]);
    expect(frame.getRolls()).toEqual([2, 1]);
  });
});

describe("strike", () => {
  it("returns true if strike", () => {
    const frame = new Frame([10]);
    expect(frame.strike()).toBe(true);
  });
  it("returns false if not a strike", () => {
    const frame = new Frame([2, 1]);
    expect(frame.strike()).toBe(false);
  });
});

describe("spare", () => {
  it("returns true if spare", () => {
    const frame = new Frame([8, 2]);
    expect(frame.spare()).toBe(true);
  });
  it("returns false if not a spare", () => {
    const frame = new Frame([2, 1]);
    expect(frame.spare()).toBe(false);
  });
  it("returns false if not a spare when a strike", () => {
    const frame = new Frame([10]);
    expect(frame.spare()).toBe(false);
  });
});

describe("isComplete", () => {
  it("returns isComplete as true if two rolls and no strike or spare", () => {
    const frame = new Frame([2, 1]);
    expect(frame.isComplete(1)).toBe(true);
  });
  it("returns isComplete as false if one roll and no strike or spare", () => {
    const frame = new Frame([2]);
    expect(frame.isComplete(1)).toBe(false);
  });
  it("returns isComplete as true if one roll strike when not frame 10", () => {
    const frame = new Frame([10]);
    expect(frame.isComplete(1)).toBe(true);
  });
  it("returns isComplete as true if two rolls spare when not frame 10", () => {
    const frame = new Frame([8, 2]);
    expect(frame.isComplete(1)).toBe(true);
  });
  it("returns isComplete as true if three rolls when first roll strike and frame 10", () => {
    const frame = new Frame([10, 1, 2]);
    expect(frame.isComplete(10)).toBe(true);
  });
  it("returns isComplete as false if two rolls when first roll strike and frame 10", () => {
    const frame = new Frame([10, 1]);
    expect(frame.isComplete(10)).toBe(false);
  });
  it("returns isComplete as false if one roll when first roll strike and frame 10", () => {
    const frame = new Frame([10]);
    expect(frame.isComplete(10)).toBe(false);
  });
  it("returns isComplete as true if three rolls when first two rolls spare and frame 10", () => {
    const frame = new Frame([8, 2, 2]);
    expect(frame.isComplete(10)).toBe(true);
  });
  it("returns isComplete as false if two rolls when first two rolls spare and frame 10", () => {
    const frame = new Frame([8, 2]);
    expect(frame.isComplete(10)).toBe(false);
  });
});

const Frame = require("../lib/frame");

describe("Frame class", () => {
  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  it("the frame is completed", () => {
    frame.logRoll(6);
    frame.logRoll(3);
    expect(frame.frameComplete()).toBe(true);
  });

  it("frame is not completed", () => {
    frame.logRoll(6);
    expect(frame.frameComplete()).toBe(false);
  });

  it("frame is not completed", () => {
    frame.logRoll(10);
    expect(frame.frameComplete()).toBe(true);
  });

  it("sums a frame", () => {
    frame.logRoll(3);
    frame.logRoll(6);
    expect(frame.sumFrame()).toBe(9);
  });

  it("is an open frame", () => {
    frame.logRoll(3);
    frame.logRoll(6);
    expect(frame.openFrame()).toBe(true);
  });

  it("shows game is a spare game", () => {
    frame.logRoll(3);
    frame.logRoll(7);
    expect(frame.spareFrame()).toBe(true);
  });

});

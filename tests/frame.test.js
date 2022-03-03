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
});

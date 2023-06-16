const Frame = require("./frame");

describe("Frame", () => {
  beforeEach(() => {
    frame = new Frame();
  });

  test(".addBallScore adds a score to the frame", () => {
    frame.addBallScore(1, 5);
    expect(frame.getBallScore(1)).toBe(5);
  });
});

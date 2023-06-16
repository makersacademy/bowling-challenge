const Frame = require("./frame");

describe("Frame", () => {
  beforeEach(() => {
    frame = new Frame();
  });

  test(".addBallScore adds a score to the frame", () => {
    frame.addBallScore(1, 5);
    expect(frame.getBallScore(1)).toBe(5);
  });

  test(".frameScore returns the score for the frame, excluding bonuses", () => {
    frame.addBallScore(1, 5);
    frame.addBallScore(2, 3);
    expect(frame.frameScore()).toBe(8);
  });

  test(".totalFrameScore returns the score for the frame, including bonuses", () => {
    frame.addBallScore(1, 5);
    frame.addBallScore(2, 3);
    frame.updateBonusScore(10);
    expect(frame.totalFrameScore()).toBe(18);
  });
});

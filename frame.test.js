const Frame = require("./frame");

describe("Frame", () => {
  beforeEach(() => {
    frame = new Frame();
  });

  test(".setBallScore adds a score to the frame", () => {
    frame.setBallScore(1, 5);
    expect(frame.getBallScore(1)).toBe(5);
  });

  test(".frameScore returns the score for the frame, excluding bonuses", () => {
    frame.setBallScore(1, 5);
    frame.setBallScore(2, 3);
    expect(frame.frameScore()).toBe(8);
  });

  test(".totalFrameScore returns the score for the frame, including bonuses", () => {
    frame.setBallScore(1, 5);
    frame.setBallScore(2, 3);
    frame.setBonusScore(10);
    expect(frame.totalFrameScore()).toBe(18);
  });

  test(".getStrike returns true if the frame has a strike", () => {
    frame.setStrike();
    expect(frame.getStrike()).toBe(true);
  });
});

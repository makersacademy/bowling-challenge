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

  test(".setStrike sets ball 1 score to 10", () => {
    frame.setStrike(1);
    expect(frame.getBallScore(1)).toBe(10);
  });

  test(".getStrike returns true if the frame has a strike", () => {
    frame.setStrike(1);
    expect(frame.getStrike()).toBe(true);
  });

  test(".setBonusScore and .getBonusScore set and return a frame bonus", () => {
    frame.setBonusScore(15);
    expect(frame.getBonusScore()).toBe(15);
  });

  test(".setSpare sets ball 2 score", () => {
    frame.setBallScore(1, 4);
    frame.setSpare();
    expect(frame.getBallScore(2)).toBe(6);
  });

  test(".getSpare returns true if the frame has a spare", () => {
    frame.setSpare();
    expect(frame.getSpare()).toBe(true);
  });

  test(".checkCompleteFrame returns true if two balls bowled", () => {
    frame.setBallScore(1, 5);
    expect(frame.checkCompleteFrame()).toBe(false);
    frame.setBallScore(2, 3);
    expect(frame.checkCompleteFrame()).toBe(true);
  });
});

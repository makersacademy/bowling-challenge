const Frame = require("./frame");

describe("Frame", () => {
  test(".setBallScore adds a score to the frame", () => {
    frame = new Frame(1);
    frame.setBallScore(1, 5);
    expect(frame.getBallScore(1)).toBe(5);
  });

  test(".frameScore returns the score for the frame, excluding bonuses", () => {
    frame = new Frame(1);
    frame.setBallScore(1, 5);
    frame.setBallScore(2, 3);
    expect(frame.frameScore()).toBe(8);
  });

  test(".totalFrameScore returns the score for the frame, including bonuses", () => {
    frame = new Frame(1);
    frame.setBallScore(1, 5);
    frame.setBallScore(2, 3);
    frame.setBonusScore(10);
    expect(frame.totalFrameScore()).toBe(18);
  });

  test(".setStrike sets ball 1 score to 10", () => {
    frame = new Frame(1);
    frame.setStrike(1);
    expect(frame.getBallScore(1)).toBe(10);
  });

  test(".getStrike returns true if the frame has a strike", () => {
    frame = new Frame(1);
    frame.setStrike(1);
    expect(frame.getStrike()).toBe(true);
  });

  test(".setBonusScore and .getBonusScore set and return a frame bonus", () => {
    frame = new Frame(1);
    frame.setBonusScore(15);
    expect(frame.getBonusScore()).toBe(15);
  });

  test(".setSpare sets ball 2 score", () => {
    frame = new Frame(1);
    frame.setBallScore(1, 4);
    frame.setSpare();
    expect(frame.getBallScore(2)).toBe(6);
  });

  test(".getSpare returns true if the frame has a spare", () => {
    frame = new Frame(1);
    frame.setSpare();
    expect(frame.getSpare()).toBe(true);
  });

  test(".checkTwoBallsPlayed returns true if two balls bowled", () => {
    frame = new Frame(1);
    frame.setBallScore(1, 5);
    expect(frame.checkTwoBallsPlayed()).toBe(false);
    frame.setBallScore(2, 3);
    expect(frame.checkTwoBallsPlayed()).toBe(true);
  });

  test(".getRemaining pins returns the number of pins left in play", () => {
    frame = new Frame(1);
    frame.setBallScore(1, 4);
    expect(frame.getRemainingPins()).toBe(6);
  });

  test(".lastBallPlayed increments properly", () => {
    frame = new Frame(1);
    expect(frame.lastBallPlayed).toBe(0);
    frame.setBallScore(1, 4);
    expect(frame.lastBallPlayed).toBe(1);
  });
});

const ScoreCard = require("../lib/scorecard");
const Frame = require("../lib/frame");
const LastFrame = require("../lib/lastFrame");

describe("ScoreCard class", () => {
  let scorecard

  beforeEach(() => {
    scorecard = new ScoreCard(Frame, LastFrame);
  });

  it("the gives the frame number at the start of the game", () => {
    expect(scorecard.currentFrameNumber()).toBe(0);
  });

  it("logs a roll to the score card", () => {
    scorecard.logRoll(7)
    expect(scorecard.currentFrameNumber()).toBe(1);
  });

  it("logs a full game of strikes", () => {
    for (i = 0; i < 13; i++){
      scorecard.logRoll(10)
    }
    expect(scorecard.currentFrameNumber()).toBe(10);
  });

  it("logs a full game of all sorts", () => {
    scorecard.logRoll(3)
    scorecard.logRoll(1)
    scorecard.logRoll(6)
    scorecard.logRoll(3)
    scorecard.logRoll(2)
    scorecard.logRoll(1)
    scorecard.logRoll(0)
    scorecard.logRoll(0)
    scorecard.logRoll(8)
    scorecard.logRoll(0)
    scorecard.logRoll(0)
    scorecard.logRoll(9)
    scorecard.logRoll(10)
    scorecard.logRoll(5)
    scorecard.logRoll(5)
    scorecard.logRoll(8)
    scorecard.logRoll(1)
    scorecard.logRoll(1)
    scorecard.logRoll(3)
    expect(scorecard.currentFrameNumber()).toBe(10);
  });


})
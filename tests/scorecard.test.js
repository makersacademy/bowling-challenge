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

  it("returns the current frame", () => {
    scorecard.logRoll(10)
    expect(scorecard.currentFrame().strikeFrame()).toBe(true);
  });

  it("logs a roll to the score card", () => {
    scorecard.logRoll(7)
    expect(scorecard.currentFrameNumber()).toBe(1);
  });

  it("logs a full game of strikes", () => {
    for (i = 0; i < 12; i++){
      scorecard.logRoll(10)
    }
    expect(scorecard.score()).toBe(300);
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
    expect(scorecard.score()).toBe(84);
  });

  
  it("a spare and strike on the last frame of the game", () => {
    for (i = 0; i < 9; i++){
      scorecard.logRoll(10)
    }
    scorecard.logRoll(7)
    scorecard.logRoll(3)
    scorecard.logRoll(10)

    expect(scorecard.score()).toBe(277);
  });

  it("Gutter game", () => {
    for (i = 0; i < 20; i++){
      scorecard.logRoll(0)
    }
    expect(scorecard.score()).toBe(0);
  });

  it("game is over", () => {
    for (i = 0; i < 12; i++){
      scorecard.logRoll(10)
    }
    expect(() => {
      scorecard.logRoll(10);
    }).toThrow("Game is over");
  });

})
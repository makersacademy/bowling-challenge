const ScoreCard = require("../lib/scorecard");

describe("ScoreCard class", () => {
  let scorecard

  beforeEach(() => {
    scorecard = new ScoreCard();
  });

  it("the gives the frame number at the start of the game", () => {
    expect(scorecard.currentFrameNumber()).toBe(0);
  });
})
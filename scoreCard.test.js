const ScoreCard = require("./scoreCard.js");

describe(".addKnockedPins", () => {
  const scorecard = new ScoreCard;

  it("adds knocked pins information", () => {
    scorecard.addKnockedPins(4);
    expect(scorecard.getTotalPoints()).toEqual(4);
  });
});
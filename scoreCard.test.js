const ScoreCard = require("./scoreCard.js");

describe(".addKnockedPins", () => {
  const scorecard = new ScoreCard();

  it("adds knocked pins number", () => {
    scorecard.addKnockedPins(4);
    expect(scorecard.getTotalPoints()).toEqual(4);
  });

  it("adds maximum of 10 pins", () => {
    expect(() => scorecard.addKnockedPins(11)).toThrow(
      "this is a 10 pins bowling game!"
    );
  });

  it("adds maximum of 10 pins across two throws or a frame", () => {
    const anotherCard = new ScoreCard;

    anotherCard.addKnockedPins(5);
    expect(() => anotherCard.addKnockedPins(6)).toThrow(
      "this is a 10 pins bowling game!"
    );
  });
});

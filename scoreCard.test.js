const ScoreCard = require("./scoreCard.js");

describe(".addKnockedPins", () => {
  let scoreCard;
  beforeEach(() => { scoreCard = new ScoreCard });

  it("adds knocked pins number score after a frame", () => {
    scoreCard.addKnockedPins(4);
    scoreCard.addKnockedPins(4);
    expect(scoreCard.getTotalPoints()).toEqual(8);
  });

  it("adds maximum of 10 pins", () => {
    expect(() => scoreCard.addKnockedPins(11)).toThrow(
      "this is a 10 pins bowling game!"
    );
  });

  it("adds maximum of 10 pins across two throws or a frame", () => {
    scoreCard.addKnockedPins(6);
    expect(() => scoreCard.addKnockedPins(6)).toThrow(
      "this is a 10 pins bowling game!"
    );
  });

  it("closes frame after strike", () => {
    scoreCard.addKnockedPins(4);
    scoreCard.addKnockedPins(4);
    scoreCard.addKnockedPins(10);
    expect(scoreCard.getTotalPoints()).toEqual(18);
  });
});

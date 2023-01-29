const BowlingScoreCard = require("../lib/bowlingScoreCard");

describe("bowlingScoreCard class", () => {
  beforeEach(() => {
    scoreCard = new BowlingScoreCard();
  });

  it("tests for a zero score game", () => {
    for (let i = 0; i < 20; i++) {
      scoreCard.roll(0);
    }
    expect(scoreCard.overallScore()).toEqual(0);
  });

  it("tests for user hitting 1 for every roll", () => {
    for (let i = 0; i < 20; i++) {
      scoreCard.roll(1);
    }
    expect(scoreCard.overallScore()).toEqual(20);
  });

  it("tests for user rolling one spare and then a four", () => {
    let spareGame = () => {
      scoreCard.roll(5), scoreCard.roll(5), scoreCard.roll(4);
      for (let i = 0; i < 17; i++) {
        scoreCard.roll(0);
      }
    };
    spareGame();
    expect(scoreCard.overallScore()).toEqual(18);
  });

  it("tests for user rolling one strike then a four and a five", () => {
    let strikeGame = () => {
      scoreCard.roll(10), scoreCard.roll(4), scoreCard.roll(5);
      for (let i = 0; i < 17; i++) {
        scoreCard.roll(0);
      }
    };
    strikeGame();
    expect(scoreCard.overallScore()).toEqual(28);
  });

  it("tests for the perfect game", () => {
    let perfectGame = () => {
      for (let i = 0; i < 12; i++) {
        scoreCard.roll(10);
      }
    };
    perfectGame();
    expect(scoreCard.overallScore()).toEqual(300);
  });

  it("tests a spare in the last frame", () => {
    let oneRolls = () => {
      for (let i = 0; i < 18; i++) {
        scoreCard.roll(1);
      }
    };
    let finalSpare = () => {
      scoreCard.roll(5);
      scoreCard.roll(5);
      scoreCard.roll(10);
    };
    oneRolls();
    finalSpare();
    expect(scoreCard.overallScore()).toEqual(48);
  });

  it("tests a spare in every frame", () => {
    let spareRolls = () => {
      for (let i = 0; i < 21; i++) {
        scoreCard.roll(5);
      }
    };

    spareRolls();
    expect(scoreCard.overallScore()).toEqual(155);
  });
});

const BowlingScoreCard = require("./BowlingScoreCard");

describe("bowlingScoreCard class", () => {
  beforeEach(() => {
    scoreCard = new BowlingScoreCard();
  });

  it("tests for a zero score game", () => {
    for (let i = 0; i < 20; i++) {
      return scoreCard.roll(0);
    }
    expect(scoreCard.overallScore()).toEqual(0);
  });

  it("tests for user hitting 1 for every roll", () => {
    for (let i = 0; i < 20; i++) {
      return scoreCard.roll(1);
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
});

// 1. test for a 0 score game (0)
// 2. test for user hits 1 for every roll (20 score)
// 3. test for user rolls one spare and then a five for next roll (18 score)
// 4. test for user rolls one strike then a four and a five (28 score)
// 5. test for user rolls the highest score possible for each roll

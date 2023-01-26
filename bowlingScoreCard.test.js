const BowlingScoreCard = require("./BowlingScoreCard");

describe("bowlingScoreCard class", () => {
  let scoreCard = new BowlingScoreCard();

  it("tests for a zero score game", () => {});

  it("tests for user hitting 1 for every roll", () => {});

  it("tests for user rolling one spare and then a five", () => {});

  it("tests for user rolling one strike then a four and a five", () => {});

  it("tests for the perfect game", () => {});
});

// 1. test for a 0 score game (0)
// 2. test for user hits 1 for every roll (20 score)
// 3. test for user rolls one spare and then a five for next roll (18 score)
// 4. test for user rolls one strike then a four and a five (28 score)
// 5. test for user rolls the highest score possible for each roll

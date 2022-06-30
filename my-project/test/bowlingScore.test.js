const BowlingScore = require("../lib/bowlingScore");

describe("BowlingScore", () => {
  it("returns the final score of the players game", () => {
    const bowlingScore = new BowlingScore([
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ]);
    expect(bowlingScore.finalScore()).toEqual("Final Score: 0");
  });
});

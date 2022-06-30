const BowlingScore = require("../lib/bowlingScore");

describe("BowlingScore", () => {
  it("returns the score for one frame", () => {
    const bowlingScore = new BowlingScore([[4, 2]]);
    expect(bowlingScore.finalScore()).toEqual("Final Score: 6");
  });

  it("returns the score for multiple frames", () => {
    const bowlingScore = new BowlingScore([
      [4, 2],
      [3, 3],
      [1, 1],
    ]);
    expect(bowlingScore.finalScore()).toEqual("Final Score: 14");
  });

  it("returns the final score of the players gutter game", () => {
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
    ]);
    expect(bowlingScore.finalScore()).toEqual("Final Score: 0");
  });

  it("returns the final score of the players gutter game", () => {
    const bowlingScore = new BowlingScore([
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
    ]);
    expect(bowlingScore.finalScore()).toEqual("Final Score: 20");
  });
});

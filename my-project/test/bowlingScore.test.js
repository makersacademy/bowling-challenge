const BowlingScore = require("../lib/bowlingScore");

describe("BowlingScore", () => {
  it("returns the score for one frame", () => {
    const bowlingScore = new BowlingScore([[4, 2]]);
    bowlingScore.frame();
    expect(bowlingScore.finalScore()).toEqual("Final Score: 6");
  });

  it("returns the score for multiple frames", () => {
    const bowlingScore = new BowlingScore([
      [4, 2],
      [3, 3],
      [1, 1],
    ]);
    bowlingScore.frame();
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
    bowlingScore.frame();
    expect(bowlingScore.finalScore()).toEqual("Final Score: 0");
  });

  it("returns the final score of players game without spares and strikes", () => {
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
    bowlingScore.frame();
    expect(bowlingScore.finalScore()).toEqual("Final Score: 20");
  });

  it("returns the final score including points from spare scored in the game", () => {
    const bowlingScore = new BowlingScore([
      [0, 0],
      [6, 4],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ]);
    bowlingScore.frame();
    bowlingScore.spare();
    expect(bowlingScore.finalScore()).toEqual("Final Score: 16");
  });

  it("returns the final score including points from strikes scored in the game", () => {
    const bowlingScore = new BowlingScore([
      [0, 0],
      [10, 0],
      [1, 1],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ]);
    bowlingScore.frame();
    bowlingScore.spare();
    bowlingScore.strike();
    expect(bowlingScore.finalScore()).toEqual("Final Score: 14");
  });

  it("returns the final score including points from multiple spares scored in the game", () => {
    const bowlingScore = new BowlingScore([
      [0, 0],
      [6, 4],
      [3, 7],
      [5, 5],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ]);
    bowlingScore.frame();
    bowlingScore.spare();
    expect(bowlingScore.finalScore()).toEqual("Final Score: 44");
  });

  it("returns the final score including points from multiple strikes scored in the game", () => {
    const bowlingScore = new BowlingScore([
      // 12,2, 14, 4, 16, 6
      [0, 0],
      [10, 0],
      [1, 1],
      [10, 0],
      [2, 2],
      [10, 0],
      [3, 3],
      [0, 0],
      [0, 0],
      [0, 0],
    ]);
    bowlingScore.frame();
    bowlingScore.spare();
    bowlingScore.strike();
    bowlingScore.tenthFrame;
    expect(bowlingScore.finalScore()).toEqual("Final Score: 54");
  });

  xit("returns the final score when a player scores a strike in the tenth frame", () => {
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
      [10, 0],
      [1, 1],
      [1, 1],
    ]);
    bowlingScore.frame();
    bowlingScore.spare();
    bowlingScore.strike();
    expect(bowlingScore.finalScore()).toEqual("Final Score: 34");
  });

  it("returns the final score when a player scores 2 strikes in a row", () => {
    const bowlingScore = new BowlingScore([
      [0, 0],
      [0, 0],
      [10, 0],
      [10, 0],
      [1, 1],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ]);
    bowlingScore.frame();
    bowlingScore.spare();
    bowlingScore.strikesInARow();
    bowlingScore.strike();
    expect(bowlingScore.finalScore()).toEqual("Final Score: 44");
  });

  xit("returns the final score when a player plays a perfect game", () => {
    const bowlingScore = new BowlingScore([
      [10, 0],
      [10, 0],
      [10, 0],
      [10, 0],
      [10, 0],
      [10, 0],
      [10, 0],
      [10, 0],
      [10, 0],
      [10, 0],
      [10, 0],
      [10, 0],
    ]);
    bowlingScore.frame();
    bowlingScore.spare();
    bowlingScore.strike();
    bowlingScore.tenthFrame();
    expect(bowlingScore.finalScore()).toEqual("Final Score: 300");
  });
});

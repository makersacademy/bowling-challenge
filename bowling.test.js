const BowlingScore = require("./bowlingScore.js");

describe("Bowling Score", () => {
  it("scores 300 when rolling a perfect game", () => {
    const score = new BowlingScore();
    for (let i = 0; i < 12; i++) {
      score.addScore(10);
    }
    expect(score.getTotalScore()).toBe(300);
  });

  it("scores 150 when rolling all 5s (Spares game)", () => {
    const score = new BowlingScore();
    for (let i = 0; i < 21; i++) {
      score.addScore(5);
    }
    expect(score.getTotalScore()).toBe(150);
  });

  it("scores 0 for a Gutter Game", () => {
    const score = new BowlingScore();
    for (let i = 0; i < 20; i++) {
      score.addScore(0);
    }
    expect(score.getTotalScore()).toBe(0);
  });

  it("scores 133 when given Example Game 1", () => {
    const score = new BowlingScore();
    let exampleScores = [
      1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6,
    ];
    exampleScores.forEach((roll) => {
      score.addScore(roll);
    });
    expect(score.getTotalScore()).toBe(133);
  });

  it("scores 116 when given Example Game 2", () => {
    const score = new BowlingScore();
    let exampleScores = [
      9, 1, 6, 4, 7, 3, 7, 1, 2, 7, 2, 1, 7, 1, 4, 6, 1, 8, 10, 2, 6,
    ];
    exampleScores.forEach((roll) => {
      score.addScore(roll);
    });
    expect(score.getTotalScore()).toBe(116);
  });
});

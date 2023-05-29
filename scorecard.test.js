const Scorecard = require("./scorecard.js");

describe("Scorecard", () => {
  it("initialises with an empty array of scores", () => {
    const scorecard = new Scorecard();
    expect(scorecard.getScores()).toEqual([]);
  });

  it("adds a single 'open' frame to the scorecard", () => {
    const scorecard = new Scorecard();
    scorecard.addFrame([5, 3]);
    expect(scorecard.getScores()).toEqual([{ frame: [5, 3], score: 8 }]);
  });

  it("adds multiple 'open' frames", () => {
    const scorecard = new Scorecard();
    scorecard.addFrame([5, 3]);
    scorecard.addFrame([8, 1]);
    scorecard.addFrame([6, 2]);
    const scores = scorecard.getScores();
    expect(scores).toEqual([
      { frame: [5, 3], score: 8 },
      { frame: [8, 1], score: 17 },
      { frame: [6, 2], score: 25 },
    ]);
  });

  it("does not calculate or add score to array if rolled a spare", () => {
    const scorecard = new Scorecard();
    scorecard.addFrame([9, 1]);
    expect(scorecard.getScores()).toEqual([{ frame: [9, 1] }]);
  });

  it("does not calculate or add score to array if last roll was a strike", () => {
    const scorecard = new Scorecard();
    scorecard.addFrame([8, 1]);
    scorecard.addFrame([10]);
    expect(scorecard.getScores()).toEqual([{ frame: [8, 1], score: 9 }, { frame: [10] }]);
  });

  it("correctly calculates spare bonus after next roll", () => {
    const scorecard = new Scorecard();
    scorecard.addFrame([9, 1]);
    scorecard.addFrame([6, 3]);
    expect(scorecard.getScores()).toEqual([
      { frame: [9, 1], score: 16 },
      { frame: [6, 3], score: 25 },
    ]);
  });

  it("correctly calculates strike bonus after next roll", () => {
    const scorecard = new Scorecard();
    scorecard.addFrame([10]);
    scorecard.addFrame([6, 3]);
    expect(scorecard.getScores()).toEqual([
      { frame: [10], score: 19 },
      { frame: [6, 3], score: 28 },
    ]);
  });

  it("correctly calculates bonus if two strikes in a row", () => {
    const scorecard = new Scorecard();
    scorecard.addFrame([10]);
    scorecard.addFrame([10]);
    scorecard.addFrame([6, 3]);
    expect(scorecard.getScores()).toEqual([
      { frame: [10], score: 26 },
      { frame: [10], score: 45 },
      { frame: [6, 3], score: 54 },
    ]);
  });

  it("correctly calculates scores if last game not spare or strike", () => {
    const scorecard = new Scorecard();
    scorecard.addFrame([3, 4]);
    scorecard.addFrame([10]);
    scorecard.addFrame([6, 4]);
    scorecard.addFrame([7, 2]);
    scorecard.addFrame([10]);
    scorecard.addFrame([10]);
    scorecard.addFrame([6, 1]);
    scorecard.addFrame([0, 0]);
    scorecard.addFrame([5, 5]);
    scorecard.addFrame([6, 1]);
    expect(scorecard.getScores()).toEqual([
      { frame: [3, 4], score: 7 },
      { frame: [10], score: 27 },
      { frame: [6, 4], score: 44 },
      { frame: [7, 2], score: 53 },
      { frame: [10], score: 79 },
      { frame: [10], score: 96 },
      { frame: [6, 1], score: 103 },
      { frame: [0, 0], score: 103 },
      { frame: [5, 5], score: 119 },
      { frame: [6, 1], score: 126 },
    ]);
  });

  it("correctly adds bonus rolls if end on spare", () => {
    const scorecard = new Scorecard();
    scorecard.addFrame([3, 4]);
    scorecard.addFrame([10]);
    scorecard.addFrame([6, 4]);
    scorecard.addFrame([7, 2]);
    scorecard.addFrame([10]);
    scorecard.addFrame([10]);
    scorecard.addFrame([6, 1]);
    scorecard.addFrame([0, 0]);
    scorecard.addFrame([5, 5]);
    scorecard.addFrame([6, 4, 7]);
    expect(scorecard.getScores()).toEqual([
      { frame: [3, 4], score: 7 },
      { frame: [10], score: 27 },
      { frame: [6, 4], score: 44 },
      { frame: [7, 2], score: 53 },
      { frame: [10], score: 79 },
      { frame: [10], score: 96 },
      { frame: [6, 1], score: 103 },
      { frame: [0, 0], score: 103 },
      { frame: [5, 5], score: 119 },
      { frame: [6, 4, 7], score: 136 },
    ]);
  });

  it("correctly calculates a gutter game", () => {
    const scorecard = new Scorecard();
    for (let i = 0; i < 10; i++) {
      scorecard.addFrame([0, 0]);
    }
    expect(scorecard.getScores()).toEqual([
      { frame: [0, 0], score: 0 },
      { frame: [0, 0], score: 0 },
      { frame: [0, 0], score: 0 },
      { frame: [0, 0], score: 0 },
      { frame: [0, 0], score: 0 },
      { frame: [0, 0], score: 0 },
      { frame: [0, 0], score: 0 },
      { frame: [0, 0], score: 0 },
      { frame: [0, 0], score: 0 },
      { frame: [0, 0], score: 0 },
    ]);
  });

  it("correctly calculates a perfect game", () => {
    const scorecard = new Scorecard();
    for (let i = 0; i < 9; i++) {
      scorecard.addFrame([10]);
    }
    scorecard.addFrame([10, 10, 10]);
    expect(scorecard.getScores()).toEqual([
      { frame: [10], score: 30 },
      { frame: [10], score: 60 },
      { frame: [10], score: 90 },
      { frame: [10], score: 120 },
      { frame: [10], score: 150 },
      { frame: [10], score: 180 },
      { frame: [10], score: 210 },
      { frame: [10], score: 240 },
      { frame: [10], score: 270 },
      { frame: [10, 10, 10], score: 300 },
    ]);
  });
});

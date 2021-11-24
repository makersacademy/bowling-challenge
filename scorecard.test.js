const Scorecard = require("./scorecard");

const gameNormal = new Scorecard([
  1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6,
]);
const gameGutter = new Scorecard([
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
]);
const gamePerfect = new Scorecard([
  10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
]);
const gameUnfinished = new Scorecard([3, 4, 5, 2, 10, 1, 2]);

describe(".score", () => {
  it("returns the score value for a normal game", () => {
    expect(gameNormal.score()).toEqual(133);
  });

  it("returns the score value for a gutter game", () => {
    expect(gameGutter.score()).toEqual(0);
  });

  it("returns the score value for a perfect game", () => {
    expect(gamePerfect.score()).toEqual(300);
  });

  it("returns the score value for an unfinished game", () => {
    expect(gameUnfinished.score()).toEqual(30);
  });
});

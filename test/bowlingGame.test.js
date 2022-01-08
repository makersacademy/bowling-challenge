const { it } = require("eslint/lib/rule-tester/rule-tester");
const BowlingGame = require("../bowlingGame");

/* eslint-disable no-undef */
describe("BowlingGame", () => {
  const game = new BowlingGame();

  it("can be initialised with no argument", () => {
    // can't find matcher to compare to empty array like Rspec
    /* eslint-disable no-undef */
    expect(game.rollList).toEqual([]);
  });

  it("can store the rolls as an array", () => {
    game.roll(8);
    game.roll(1);
    game.roll(3);
    expect(game.rollList).toEqual([8, 1, 3]);
  });

  it("can roll a gutter game", () => {
    const gameTest = new BowlingGame();

    for (i = 0; i < 20; i++) {
      gameTest.roll(0);
    }
  
    expect(gameTest.getFinalScore()).toEqual(0)
  });
});

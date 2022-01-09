// const { it } = require("eslint/lib/rule-tester/rule-tester");
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

    expect(gameTest.getFinalScore()).toEqual(0);
  });

  // it("can roll a perfect game", () => {
  //   const game = new BowlingGame();

  //   for (i = 0; i < 10; i++) {
  //     game.roll(10);
  //   }

  //   expect(game.getFinalScore()).toEqual(300);
  // });

  it("can roll a spare", () => {
    const game = new BowlingGame();
    game.roll(8);
    game.roll(2);
    game.roll(3);
    // console.log(game.rollList);
    expect(game.getFinalScore()).toEqual(13);
  });

  it("can roll all spares", () => {
    const game = new BowlingGame();
    for (i = 0; i < 20; i++) {
      game.roll(5);
    }

    console.log(game.rollList);
    expect(game.getFinalScore()).toEqual(13);
  });
});

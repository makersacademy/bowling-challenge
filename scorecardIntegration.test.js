const Game = require("./game");
const Scorecard = require("./scorecard");

describe("Returns total score when all frames complete", () => {
  it("total equal 0 when gutter game", () => {
    const game = new Game();

    for (let i = 0; i < 20; i++) {
      game.add(0);
    }

    expect(game.framesWithRolls()).toEqual([
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

    const scorecard = new Scorecard(game);

    expect(scorecard.scoreByFrame()).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    expect(scorecard.totalScore()).toBe(0);
  });
  it("when no strikes or spares are scored", () => {
    const game = new Game();

    for (let i = 0; i < 10; i++) {
      game.add(1);
      game.add(2);
    }

    expect(game.framesWithRolls()).toEqual([
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
    ]);

    const scorecard = new Scorecard(game);

    expect(scorecard.scoreByFrame()).toEqual([3, 3, 3, 3, 3, 3, 3, 3, 3, 3]);

    expect(scorecard.totalScore()).toBe(30);
  });
  it("when score a strike in frame 9", () => {
    const game = new Game();

    for (let i = 0; i < 8; i++) {
      game.add(1);
      game.add(2);
    }

    game.add(10);
    game.add(1);
    game.add(2);

    expect(game.framesWithRolls()).toEqual([
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
      [10],
      [1, 2],
    ]);

    const scorecard = new Scorecard(game);

    expect(scorecard.scoreByFrame()).toEqual([3, 3, 3, 3, 3, 3, 3, 3, 13, 3]);

    expect(scorecard.totalScore()).toBe(40);
  });
});

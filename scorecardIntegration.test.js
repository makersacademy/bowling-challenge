const Game = require("./game");
const Scorecard = require("./scorecard");

describe("Returns total score when all frames complete", () => {
  it("when gutter game returns 0", () => {
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
  it("when strike scored in frame 9", () => {
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
  it("when strike scored in frame 8 and frame 9", () => {
    const game = new Game();

    for (let i = 0; i < 7; i++) {
      game.add(1);
      game.add(2);
    }

    game.add(10);
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
      [10],
      [10],
      [1, 2],
    ]);

    const scorecard = new Scorecard(game);
    expect(scorecard.scoreByFrame()).toEqual([3, 3, 3, 3, 3, 3, 3, 21, 13, 3]);
    expect(scorecard.totalScore()).toBe(58);
  });
  it("when strike scored in frame 8, frame 9 and frame 10", () => {
    const game = new Game();

    for (let i = 0; i < 7; i++) {
      game.add(1);
      game.add(2);
    }

    for (let i = 0; i < 3; i++) {
      game.add(10);
    }

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
      [10],
      [10],
      [10, 1, 2],
    ]);

    const scorecard = new Scorecard(game);
    expect(scorecard.scoreByFrame()).toEqual([3, 3, 3, 3, 3, 3, 3, 30, 21, 13]);
    expect(scorecard.totalScore()).toBe(85);
  });
  it("when perfect game returns 300", () => {
    const game = new Game();

    for (let i = 0; i < 12; i++) {
      game.add(10);
    }

    expect(game.framesWithRolls()).toEqual([
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10],
      [10, 10, 10],
    ]);

    const scorecard = new Scorecard(game);
    expect(scorecard.scoreByFrame()).toEqual([
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
    ]);
    expect(scorecard.totalScore()).toBe(300);
  });
  it("when spare scored in frame 9", () => {
    const game = new Game();

    for (let i = 0; i < 8; i++) {
      game.add(1);
      game.add(2);
    }

    game.add(8);
    game.add(2);
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
      [8, 2],
      [1, 2],
    ]);

    const scorecard = new Scorecard(game);
    expect(scorecard.scoreByFrame()).toEqual([3, 3, 3, 3, 3, 3, 3, 3, 11, 3]);
    expect(scorecard.totalScore()).toBe(38);
  });
  it("when spare scored in frame 9 and 10", () => {
    const game = new Game();

    for (let i = 0; i < 8; i++) {
      game.add(1);
      game.add(2);
    }

    for (let i = 0; i < 2; i++) {
      game.add(8);
      game.add(2);
    }

    game.add(1);

    expect(game.framesWithRolls()).toEqual([
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
      [8, 2],
      [8, 2, 1],
    ]);

    const scorecard = new Scorecard(game);
    expect(scorecard.scoreByFrame()).toEqual([3, 3, 3, 3, 3, 3, 3, 3, 18, 11]);
    expect(scorecard.totalScore()).toBe(53);
  });
});

const BowlingGame = require("../bowlingGame");

describe("BowlingGame", () => {
  it("can roll a gutter game", () => {
    const game = new BowlingGame();

    for (i = 0; i < 20; i++) {
      game.roll(0);
    }

    // console.log(game.rollList.length); // 20
    expect(game.getFinalScore()).toBe(0);
  });

  it("can roll a spare and then 9 frames with 0 pts", () => {
    const game = new BowlingGame();

    game.roll(8);
    game.roll(2);
    game.roll(3);

    for (i = 0; i < 17; i++) {
      game.roll(0);
    }

    // console.log(game.rollList.length); // 20
    expect(game.getFinalScore()).toBe(16);
  });

  it("can roll 9 frames with 0 pts and then roll 1 spare (10th frame)", () => {
    const game = new BowlingGame();

    for (i = 0; i < 18; i++) {
      game.roll(0);
    }

    game.roll(8);
    game.roll(2);
    game.roll(3);

    // console.log(game.rollList.length); // 21
    expect(game.getFinalScore()).toBe(13);
  });

  it("can roll all spares", () => {
    const gameAllSpares = new BowlingGame();
    for (i = 0; i < 21; i++) {
      gameAllSpares.roll(5);
    }

    // console.log(gameAllSpares.rollList.length); // 21
    expect(gameAllSpares.getFinalScore()).toBe(150);
  });

  it("can roll a strike and then 9 frames with 0pts", () => {
    const game = new BowlingGame();
    game.roll(10);
    game.roll(1);
    game.roll(1);

    for (i = 0; i < 16; i++) {
      game.roll(0);
    }
    // console.log(game.rollList.length); // 19 (1 strike)
    expect(game.getFinalScore()).toBe(14);
  });

  it("can roll 9 frames with 0 pts, then roll a strike (10th frame)", () => {
    const game = new BowlingGame();

    for (i = 0; i < 18; i++) {
      game.roll(0);
    }
    game.roll(10);
    game.roll(1);
    game.roll(1);

    // console.log(game.rollList.length); // 21 (1 strike)
    expect(game.getFinalScore()).toBe(12);
  });

  it("can roll a perfect game", () => {
    const perfectGame = new BowlingGame();

    for (i = 0; i < 12; i++) {
      perfectGame.roll(10);
    }

    // console.log(perfectGame.rollList.length); // 12 (10 strikes + 2 bonus rolls)
    expect(perfectGame.getFinalScore()).toBe(300);
  });
});

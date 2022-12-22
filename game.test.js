const Game = require("./game");

describe("Separates each game into 10 frames when complete game", () => {
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
  });
  it("Only return 10 frames when extra rolls are added", () => {
    const game = new Game();

    for (let i = 0; i < 11; i++) {
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
  });
  it("Add 3 rolls in frame 10 when strike in frame 10", () => {
    const game = new Game();

    for (let i = 0; i < 9; i++) {
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
      [1, 2],
      [10, 1, 2],
    ]);
  });
  it("Add 3 rolls in frame 10 when spare in frame 10", () => {
    const game = new Game();

    for (let i = 0; i < 9; i++) {
      game.add(1);
      game.add(2);
    }
    game.add(8);
    game.add(2);
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
      [1, 2],
      [8, 2, 2],
    ]);
  });
  it("Add 1 roll in frame 9 when strike in frame 9", () => {
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
  });
  it("Add 2 rolls in frame 9 when spare in frame 9", () => {
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
  });
});
describe("Separates each game into frames when partial game", () => {
  it("when 5 frames complete and no strikes or spares are scored", () => {
    const game = new Game();

    for (let i = 0; i < 5; i++) {
      game.add(1);
      game.add(2);
    }

    expect(game.framesWithRolls()).toEqual([
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
    ]);
  });
  it("when 5 frames are completed score a strike in frame 5", () => {
    const game = new Game();

    for (let i = 0; i < 4; i++) {
      game.add(1);
      game.add(2);
    }

    game.add(10);

    expect(game.framesWithRolls()).toEqual([
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
      [10],
    ]);
  });
  it("when 5 frames are completed score a spare in frame 5", () => {
    const game = new Game();

    for (let i = 0; i < 4; i++) {
      game.add(1);
      game.add(2);
    }

    game.add(8);
    game.add(2);

    expect(game.framesWithRolls()).toEqual([
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
      [8, 2],
    ]);
  });
  it("when 5 frames and one roll are completed and a strike in frame 8", () => {
    const game = new Game();

    for (let i = 0; i < 4; i++) {
      game.add(1);
      game.add(2);
    }

    game.add(10);
    game.add(2);

    expect(game.framesWithRolls()).toEqual([
      [1, 2],
      [1, 2],
      [1, 2],
      [1, 2],
      [10],
      [2],
    ]);
  });
});

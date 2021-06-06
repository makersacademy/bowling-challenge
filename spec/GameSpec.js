const Game = require("../src/Game.js");

describe("Game", () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it("can create a new game", () => {
    expect(game).toBeInstanceOf(Game);
  });

  it("can roll gutter game", () => {
    for (let i = 0; i < 20; i++) {
      game.bowl(0);
    }
    expect(game.score()).toEqual(0);
  });

  it("can roll all 1s", () => {
    for (let i = 0; i < 20; i++) {
      game.bowl(1);
    }
    expect(game.score()).toEqual(20);
  });
});

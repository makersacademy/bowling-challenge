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

  describe("perfect game", () => {
    it("can roll a perfect game", () => {
      for (let i = 0; i < 12; i++) {
        game.bowl(10);
      }
      expect(game.score()).toEqual(300);
    });
  });

  it("can calculate the score correctly", () => {
    game.bowl(1);
    game.bowl(4);
    game.bowl(4);
    game.bowl(5);
    game.bowl(6);
    game.bowl(4);
    game.bowl(5);
    game.bowl(5);
    game.bowl(10);
    game.bowl(0);
    game.bowl(1);
    game.bowl(7);
    game.bowl(3);
    game.bowl(6);
    game.bowl(4);
    game.bowl(10);
    game.bowl(2);
    game.bowl(8);
    game.bowl(6);
    expect(game.score()).toEqual(133);
  });

  describe("when the game is over", () => {
    it("does not let you to bowl", () => {
      for (let i = 0; i < 20; i++) {
        game.bowl(1);
      }
      expect(function () {
        game.bowl(1);
      }).toThrow(
        "Game Over: Maximum frame size exceeded. Please start a new game."
      );
    });
  });
});

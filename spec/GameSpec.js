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

  describe("when a strike occurs three times in a row", () => {
    it("can calculate three strikes in a row", () => {
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      for (let i = 0; i < 13; i++) {
        game.bowl(0);
      }
      expect(game.score()).toEqual(60);
    });
  });

  it("can calculate the score correctly", () => {
    let rolls = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6];
    rolls.forEach((roll) => {
      game.bowl(roll);
    });
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

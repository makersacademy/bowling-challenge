const Game = require("./game");

describe("Game", () => {
  beforeEach(() => {
    game = new Game();
  });
  describe("roll", () => {
    it("returns a value of a roll", () => {
      expect(game.roll(5)).toEqual(5);
    });
  });
});

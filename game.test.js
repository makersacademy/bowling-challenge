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
  describe('createFrame', () => {
    it("creates a new frame", () => {
      const frameDouble = { ball1: 5, ball2: 2}
      expect(game.createFrame(game.roll(5), game.roll(2))).toEqual(frameDouble);
    })
  })
});

const Game = require('./game');
describe("Game", () => {
    it("returns 0 for 20 Gutter games", () => {
        const game = new Game;
        expect(game.getScore()).toEqual(0);
    });


  it("max score for perfect game ", () => {
      const game = new Game;
      expect(game.getMaxscore()).toEqual(300)
  });

});
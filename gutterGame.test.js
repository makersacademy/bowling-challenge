const Game = require("./game");

describe(Game.Game, () => {
  it("scores 0 points after a gutter game", () => {
    const game = new Game.Game();

    for (let i = 1; i <= 20; i++) {
      game.addPointsScored(0);
    }

    expect(game.totalScore).toEqual(0);
  });
});

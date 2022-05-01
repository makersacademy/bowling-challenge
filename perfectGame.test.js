const Game = require("./game");

describe(Game.Game, () => {
  it("scores 300 points after a perfect game", () => {
    const game = new Game.Game();

    for (let i = 1; i <= 12; i++) {
      game.addPointsScored(10);
    }

    expect(game.totalScore).toEqual(300);
  });
});

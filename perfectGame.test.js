const Game = require("./game");

describe(Game.Game, () => {
  it("scores 0 points after a gutter game", () => {
    const game = new Game.Game();

    for (let i = 1; i <= 12; i++) {
      game.addPointsScored(10);
    }

    game.addBonusRolls();

    game.addBonusPoints();

    game.calculateScore();

    expect(game.totalScore).toEqual(300);
  });
});

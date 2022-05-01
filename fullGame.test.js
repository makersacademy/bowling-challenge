const Game = require("./game");

describe(Game.Game, () => {
  it("scores 133 points after a full game", () => {
    const game = new Game.Game();

    game.addPointsScored(1);
    game.addPointsScored(4);

    game.addPointsScored(4);
    game.addPointsScored(5);

    game.addPointsScored(6);
    game.addPointsScored(4);

    game.addPointsScored(5);
    game.addPointsScored(5);

    game.addPointsScored(10);

    game.addPointsScored(0);
    game.addPointsScored(1);

    game.addPointsScored(7);
    game.addPointsScored(3);

    game.addPointsScored(6);
    game.addPointsScored(4);

    game.addPointsScored(10);

    game.addPointsScored(2);
    game.addPointsScored(8);
    game.addPointsScored(6);

    game.addBonusRolls();

    game.addBonusPoints();

    game.calculateScore();

    expect(game.totalScore).toEqual(133);
  });
});

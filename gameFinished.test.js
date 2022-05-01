const Game = require("./game");

describe(Game.Game, () => {
  it("throws error if user attempts to input more scores after a perfect game has ended", () => {
    const game = new Game.Game();

    const addPointsScored = () => {
      for (let i = 1; i <= 13; i++) {
        game.addPointsScored(10);
      }
    };

    expect(addPointsScored).toThrow("The game has finished!");
  });

  it("throws error if user attempts to input more scores after the game has ended", () => {
    const game = new Game.Game();

    const addPointsScored = () => {
      for (let i = 1; i <= 21; i++) {
        game.addPointsScored(1);
      }
    };

    expect(addPointsScored).toThrow("The game has finished!");
  });
});

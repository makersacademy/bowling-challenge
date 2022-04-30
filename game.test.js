const Game = require("./game");

describe(Game.Game, () => {
  it("creates an array of Frame objects", () => {
    const game = new Game.Game();

    game.addFrame();

    expect(game.frames[0]).toBeInstanceOf(Game.Frame);
  });

  it("Adds up the score of 2 rolls in a frame without strikes or spares", () => {
    const game = new Game.Game();

    game.addPointsScored(1);
    game.addPointsScored(1);

    expect(game.frames[game.frames.length - 1].addScore()).toEqual(2);
  });

  it("Adds up the score of 2 frames without strikes or spares", () => {
    const game = new Game.Game();

    game.addPointsScored(2);
    game.addPointsScored(2);
    game.addPointsScored(3);
    game.addPointsScored(3);

    game.calculateScore();

    expect(game.returnScore()).toEqual(10);
  });

  it("Adds up the scores of 2 frames with 1 spare", () => {
    const game = new Game.Game();

    game.addPointsScored(5);
    game.addPointsScored(5);

    game.calculateScore();

    expect(game.returnScore()).toEqual(10);
  });

  it("Checks each frame has it's own log of scores", () => {
    const game = new Game.Game();

    game.addPointsScored(3);
    game.addPointsScored(3);

    game.addPointsScored(1);
    game.addPointsScored(1);

    game.calculateScore();

    expect(game.frames[0].addScore()).toEqual(6);
    expect(game.frames[1].addScore()).toEqual(2);
  });

  it("adds additional points when a spare is scored", () => {
    const game = new Game.Game();

    game.addPointsScored(5);
    game.addPointsScored(5);

    game.addPointsScored(3);
    game.addPointsScored(3);

    game.calculateScore();

    expect(game.totalScore).toEqual(19);
  });
});

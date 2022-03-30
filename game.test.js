const Game = require('./game')

describe('bowling game', () => {
  const game = new Game();

  it ('starts the score with 0', () => {
    expect(game.getScore()).toBe(0);
  });
});
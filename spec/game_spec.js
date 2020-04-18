const Game = require('../src/game');

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('should accept a score from the player', () => {
    expect(game.addScore).toBeDefined();
  });
});

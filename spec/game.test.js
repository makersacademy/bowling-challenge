const Game = require('../lib/game')

describe('Game', () => {
  it('initializes with 10 frames inside this.frames array', () => {
    const game = new Game;
    expect(game.frames.length).toBe(10);
  });
})
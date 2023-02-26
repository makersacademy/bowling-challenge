const Game = require('../lib/game')

describe('Game', () => {
  it('initializes with 10 frames inside this.frames array', () => {
    const game = new Game;
    expect(game.frames.length).toBe(10);
  });

  it('can add two rolls to the same object in frames array', () => {
    const game = new Game;
    game.roll(5);
    game.roll(4);
    const firstFrame = game.frames[0];
    expect(firstFrame.rolls).toEqual([5, 4]);
  });
})
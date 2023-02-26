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

  it('can add multiple rolls and assign to the correct frame', () => {
    const game = new Game;
    game.roll(5);
    game.roll(4);
    game.roll(6);
    game.roll(7);
    const currFrame = game.frames[1];
    expect(currFrame.rolls).toEqual([6, 7]);
  });

  it('can add rolls to the correct frame and account for strike', () => {
    const game = new Game;
    game.roll(5);
    game.roll(4);
    game.roll(10);
    game.roll(6);
    game.roll(7);
    const currFrame = game.frames[1];
    expect(currFrame.rolls).toEqual([10]);
  });
})
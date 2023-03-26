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
    let currFrame = game.frames[1];
    expect(currFrame.rolls).toEqual([6, 7]);
  });

  it('can add rolls to the correct frame and account for strike', () => {
    const game = new Game;
    game.roll(5);
    game.roll(4);
    game.roll(10);
    game.roll(6);
    game.roll(7);
    let currFrame = game.frames[1];
    expect(currFrame.rolls).toEqual([10]);
  });

  it('returns totalscore of 133 based on scores from README example', () => {
    const game = new Game();
    const pins = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6];
    pins.forEach(pin => {
      game.roll(pin);
    });
    expect(game.totalScore()).toEqual(133);
  });

  it('returns the score of 300 for a perfect game', () => {
    const game = new Game();
    const pins = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    pins.forEach(pin => {
      game.roll(pin);
    });
    expect(game.totalScore()).toEqual(300);
  });

  it('returns the score of 0 for gutter game', () => {
    const game = new Game();
    const pins = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    pins.forEach(pin => {
      game.roll(pin);
    });
    expect(game.totalScore()).toEqual(0);
  });
})
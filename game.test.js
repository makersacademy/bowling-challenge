const Game = require('./game')

describe('Frame class', () => {
  it('game not started', () => {
    const game = new Game;
    expect(game.framenum()).toBe(1);
  });
  it('rolls two balls in current frame', () => {
    const game = new Game;
    game.roll(2);
    expect(game.currentframe().done()).toBe(false);
    game.roll(4);
    expect(game.currentframe().done()).toBe(true);
    expect(game.framenum()).toBe(1)
  });
  it('rolls 10 frames with no strike or spare', () => {
    const game = new Game;
    for (let i = 0; i < 18; i++) {
      game.roll(3);
    }
    expect(game.currentframe().done()).toBe(true);
    expect(game.framenum()).toBe(9);
    game.roll(4);
    game.roll(4);
    expect(game.framenum()).toBe(10)
    expect(game.currentframe().done()).toBe(true)
  });
  it('perfect game', () => {
    const game = new Game;
    for (let i = 0; i < 10; i++) {
      game.roll(10)
    }
    expect(game.framenum()).toBe(10)
    // expect(game.currentframe().done()).toBe(false)
    // game.roll(10)
    // expect(game.currentframe().done()).toBe(false)
    // game.roll(10)
    // expect(game.currentframe().done()).toBe(true)
  })
});

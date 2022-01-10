const Game = require('../game');

describe('Game', () => {
  const game = new Game();

  it('plays 10 frames', () => {
    expect(game.frames.length).toEqual(10);
  })

  it('can record a roll', () => {
    game.roll(1);
  });

  it('returns the total score', () => {
    game.roll(1)
    expect(game.score()).toEqual(2);
  })
});
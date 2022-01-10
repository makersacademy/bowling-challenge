const Game = require('../game');

describe('Game', () => {
  const game = new Game();

  it('plays 10 frames', () => {
    expect(game.frames.length).toEqual(10);
  });

  it('can record a roll', () => {
    game.roll(1);
    expect(game.score()).toEqual(1);
  });

  it('returns the total score', () => {
    game.roll(1);
    expect(game.score()).toEqual(2);
  });

  it('sets spare bonus', () => {
    game.roll(1);
    game.roll(9);
    game.roll(1);
    game.roll(1);
    expect(game.score()).toEqual(15);
  });

  it('sets strike bonus', () => {
    game.roll(10);
    game.roll(1);
    game.roll(1);
    expect(game.score()).toEqual(29);
  });

  it('can record a perfect game', () => {
    for (let i = 0; i < 12; i++) {
      game.roll(10);
    }
    expect(game.score()).toEqual(300);
  });
});

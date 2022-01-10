const Frame = require('../frame');
const Game = require('../game');
jest.mock('../frame');

describe('Game', () => {
  const game = new Game();

  it('plays 10 frames', () => {
    game.roll(1);
    expect(Frame).toHaveBeenCalledTimes(10);
  })

  it('can record a roll', () => {
    game.roll(1);
  });
});
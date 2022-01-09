const Frame = require('../frame');
const Game = require('../game');
jest.mock('../frame');

describe('Game', () => {
  const game = new Game();

  it('can create a frame', () => {
    game.roll(1);
    expect(Frame).toHaveBeenCalledTimes(1);
  })

  it('can record a roll', () => {
    game.roll(1);
  });
});
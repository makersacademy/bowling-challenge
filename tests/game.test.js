const Game = require('../game');
const Frame = require('../frame')
// jest.mock('./frame');

describe('bowling game', () => {
  const game = new Game();

  it ('starts the score with an empty array', () => {
    expect(game.getScore()).toBeEmpty;
  });

  it ('stores the first frame scores', () => {
    game.rollPins(4)
    game.rollPins(4)
    expect(game.getScore()[0]).toEqual([4, 4]);
  });

  it ('starts a new frame after 2 rolls', () => {
    game.rollPins(4)
    game.rollPins(4)
    expect(game.getScore().length).toBe(2);
  });

  it ('finishes the frame after a strike', () => {
    game.rollPins(10)
    game.rollPins(4)
    expect(game.getScore()[2]).toEqual([10]);
  });
});

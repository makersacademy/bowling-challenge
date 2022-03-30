const Game = require('./game')

describe('bowling game basic features', () => {
  const game = new Game();

  it ('starts the score with an empty array', () => {
    expect(game.totalScore()).toBeEmpty;
  });

  it ('stores the first frames scores', () => {
    game.rollPins(4)
    game.rollPins(4)
    expect(game.totalScore()[0]).toEqual([4, 4]);
  });

  it ('starts a new frame after 2 rolls', () => {
    game.rollPins(4)
    game.rollPins(4)
    expect(game.totalScore().length).toBe(2);
  });

  it ('finishes the frame after a strike', () => {
    game.rollPins(10)
    game.rollPins(4)
    expect(game.totalScore()[2]).toEqual([10]);
  });


  
});
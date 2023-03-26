const BowlingGame = require('./bowlingGame');

describe('BowlingGame', () => {

  it('constructs a new game with a score of 0', () => {
    const bowlingGame = new BowlingGame();
    expect(bowlingGame).toBeInstanceOf(BowlingGame);
    expect(bowlingGame.score()).toBe(0);
  });

});
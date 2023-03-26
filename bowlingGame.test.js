const BowlingGame = require('./bowlingGame');

describe('BowlingGame', () => {

  it('constructs a new game with a score of 0', () => {
    const bowlingGame = new BowlingGame();
    expect(bowlingGame).toBeInstanceOf(BowlingGame);
    expect(bowlingGame.score()).toBe(0);
  });

  it('scores a gutter game when the player rolls all zeros', () => {
    const bowlingGame = new BowlingGame();
    for (let i = 0 ; i < 20 ; i++) {
      bowlingGame.roll(0);
    };
    expect(bowlingGame.score()).toBe(0);
  });

  it('scores a game of 20 when the player rolls all ones', () => {
    const bowlingGame = new BowlingGame();
    for (let i = 0 ; i < 20 ; i++) {
      bowlingGame.roll(1);
    };
    expect(bowlingGame.score()).toBe(20);
  });

  it('adds the score of the next roll to 10 when the player rolls a spare', () => {
    const bowlingGame = new BowlingGame();
    bowlingGame.roll(5);
    bowlingGame.roll(5);
    bowlingGame.roll(5);
    bowlingGame.roll(3);
    for (let i = 0 ; i < 16 ; i++) {
      bowlingGame.roll(0);
    };
    expect(bowlingGame.score()).toBe(23);
  });



});
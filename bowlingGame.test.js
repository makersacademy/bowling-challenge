const BowlingGame = require('./bowlingGame');

describe('BowlingGame', () => {

  let bowlingGame;

  beforeEach(() => {
    bowlingGame = new BowlingGame();
  });

  it('constructs a new game with a score of 0', () => {
    expect(bowlingGame).toBeInstanceOf(BowlingGame);
    expect(bowlingGame.score()).toBe(0);
  });

  it('scores a gutter game when the player rolls all zeros', () => {
    for (let i = 0 ; i < 20 ; i++) {
      bowlingGame.roll(0);
    }
    expect(bowlingGame.score()).toBe(0);
  });

  it('scores a game of 20 when the player rolls all ones', () => {
    for (let i = 0 ; i < 20 ; i++) {
      bowlingGame.roll(1);
    }
    expect(bowlingGame.score()).toBe(20);
  });

  it('adds the score of the next roll to 10 when the player rolls a spare', () => {
    bowlingGame.roll(5);
    bowlingGame.roll(5);
    bowlingGame.roll(5);
    bowlingGame.roll(3);
    for (let i = 0 ; i < 16 ; i++) {
      bowlingGame.roll(0);
    }
    expect(bowlingGame.score()).toBe(23);
  });

  it('adds the score of the next two rolls to 10 when the player rolls a strike', () => {
    bowlingGame.roll(10);
    bowlingGame.roll(5);
    bowlingGame.roll(2);
    for (let i = 0 ; i < 16 ; i++) {
      bowlingGame.roll(0);
    }
    expect(bowlingGame.score()).toBe(24);
  });

  it('scores a perfect game when the player rolls all strikes', () => {
    for (let i = 0 ; i < 12 ; i++) {
      bowlingGame.roll(10);
    }
    expect(bowlingGame.score()).toBe(300);
  });

});
const BowlingGame = require('./bowlingGame')

describe('BowlingGame class', () => {
  it('creates a new bowling game', () => {
    expect(new BowlingGame).toBeInstanceOf(BowlingGame)
  });
})
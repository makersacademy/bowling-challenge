const BowlingGame = require('../lib/bowling-game')

describe( 'Bowling Game', () => {
  it('creates a new game', () => {
    expect(new BowlingGame()).toBeInstanceOf(BowlingGame)
  })
})
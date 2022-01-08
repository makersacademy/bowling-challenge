const BowlingGame = require('../lib/bowling-game')

describe( 'Bowling Game', () => {

  let game;

  beforeEach(() => { game = new BowlingGame() })

  describe('.roll', () => {
    it('it can roll and knock down 10 pins', () => {
      game.roll(10)
      expect(game.rolls).toContain(10);
    })
  })

})
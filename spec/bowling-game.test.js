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

  describe('.score', () => {
    describe('when player rolls a spare', () => {
      it('rolls a gutter game', () => {
        for (let i = 0; i < 20; i++) {
          game.roll(0);
        }
        expect(game.score()).toEqual(0);
      })
    })
  })

})
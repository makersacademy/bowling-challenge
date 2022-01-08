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
    describe('when player never hits a pin', () => {
      it('rolls a gutter game', () => {
        for (let i = 0; i < 20; i++) {
          game.roll(0);
        }
        expect(game.score()).toEqual(0);
      })
    })

    describe('when player rolls a spare', () => {
      it('calculates score after a spare is rolled', () => {
        game.roll(6)
        game.roll(4) 
        game.roll(3)
        game.roll(2)
        for (let i = 0; i < 16; i++) {
          game.roll(0);
        }
        expect(game.score()).toEqual(18);
      })
    })

    describe('when player rolls a strike', () => {
      it('calculates score after a strike is rolled', () => {
        game.roll(10)
        game.roll(4) 
        game.roll(2)
        for (let i = 0; i < 17; i++) {
          game.roll(0);
        }
        expect(game.score()).toEqual(22);
      })
    })
  })

})
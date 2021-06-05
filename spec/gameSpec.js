const Game = require('../lib/game')

describe('Game', () => {
  let game

  beforeEach(() => {
    game = new Game()
  })

  describe('.prototype.bowl()', () => {
    describe('when no strike or spare', () => {
      it('when given 4 it returns 4', () => {
        expect(game.bowl(4)).toBe(4)
      })
    })
  })
})

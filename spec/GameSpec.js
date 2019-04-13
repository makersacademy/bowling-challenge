Game = require ('../lib/Game')

describe('Game', function () {
  var game

  beforeEach(function () {
    game = new Game()
  })

  describe('#roll', function () {
    it('it stores the roll', function () {
      game.roll(0)
      expect(game.lastRoll()).toBe(0)
    })
  })

  describe('#complete', function () {
    it('returns true after 20 gutterballs', function () {
      for (var i = 0; i < 20; i ++) {
        game.roll(0)
      }
      expect(game.complete()).toBe(true)
    })

    it('returns false after 19 gutterballs', function () {
      for (var i = 0; i < 19; i ++) {
        game.roll(0)
      }
      expect(game.complete()).toBe(false)
    })
  })

  describe('#score', function () {
    it('returns zero after 20 gutterballs', function () {
      for (var i = 0; i < 20; i ++) {
        game.roll(0)
      }
      expect(game.score()).toBe(0)
    })
  })
})

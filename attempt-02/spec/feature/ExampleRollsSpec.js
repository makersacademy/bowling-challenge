describe('Example rolls', function () {
  if (typeof (require) !== 'undefined') {
    Game = require('../../lib/Game')
  }

  var game

  beforeEach(function () {
    game = new Game()
  })

  describe('20 * 0', function () {
    it('Game is complete with a score of 0', function () {
      for (var i = 0; i < 20; i++) {
        game.roll(0)
      }
      expect(game.complete()).toBe(true)
      expect(game.score()).toBe(0)
    })
  })

  describe('19 * 0', function () {
    it('Game is incomplete with a score of 0', function () {
      for (var i = 0; i < 19; i++) {
        game.roll(0)
      }
      expect(game.complete()).toBe(false)
      expect(game.score()).toBe(0)
    })
  })

  xdescribe('1 * 10, 18 * 0', function () {
    it('Game is complete with a score of 10', function () {
      game.roll(10)
      for (var i = 0; i < 18; i++) {
        game.roll(0)
      }
      expect(game.complete()).toBe(true)
      expect(game.score()).toBe(10)
    })
  })

  describe('9, 1, 1, 17 * 0', function () {
    it('Game is complete with a score of 12', function () {
      game.roll(9)
      game.roll(1)
      game.roll(1)
      for (var i = 0; i < 17; i++) {
        game.roll(0)
      }
      expect(game.complete()).toBe(true)
      expect(game.score()).toBe(12)
    })
  })
})

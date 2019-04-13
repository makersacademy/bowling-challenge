Game = require('../../lib/Game')

describe('Example rolls', function () {
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
})

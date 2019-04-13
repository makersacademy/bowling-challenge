Game = require('../../lib/Game')

describe('Example rolls', function () {
  var game = new Game()

  describe('20 gutterballs', function () {
    it('Game is complete with a score of zero', function () {
      for (var i = 0; i < 20; i++) {
        game.roll(0)
      }
      expect(game.complete()).toBe(true)
      expect(game.score()).toBe(0)
    })
  })
})

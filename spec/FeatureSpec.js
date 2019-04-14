describe('Example rolls', function () {
  var game

  if (typeof (require) !== 'undefined') {
    Game = require('../src/Game')
  }

  beforeEach(function () {
    game = new Game ()
  })

  describe('19 * 0', function () {
    it('Game is incomplete with score of 0', function () {
      rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0, 0, 0]
      rolls.forEach(function(pins) {
        game.roll(pins)
      })
      expect(game.isComplete()).toBe(false)
      expect(game.score()).toEqual(0)
    })
  })

  describe('20 * 0', function () {
    it('Game is complete with score of 0', function () {
      rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      rolls.forEach(function(pins) {
        game.roll(pins)
      })
      expect(game.isComplete()).toBe(true)
      expect(game.score()).toEqual(0)
    })
  })
})

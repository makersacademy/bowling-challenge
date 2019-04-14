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

  describe('10, then 18 * 0', function () {
    it('Game is complete with score of 10', function () {
      rolls = [10, 0, 0, 0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0, 0, 0]
      rolls.forEach(function(pins) {
        game.roll(pins)
      })
      expect(game.isComplete()).toBe(true)
      expect(game.score()).toEqual(10)
    })
  })

  describe('10, then 2 * 1, then 16 * 0', function () {
    it('Game is complete with score of 14', function () {
      rolls = [10, 1, 1, 0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0, 0, 0]
      rolls.forEach(function(pins) {
        game.roll(pins)
      })
      expect(game.isComplete()).toBe(true)
      expect(game.score()).toEqual(14)
    })
  })
})

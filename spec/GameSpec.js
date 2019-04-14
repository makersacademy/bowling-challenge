describe('Game', function () {
  var game

  if (typeof (require) !== 'undefined') {
    var Game = require('../src/Game')
  }

  beforeEach(function () {
    game = new Game ()
  })

  describe('Add one roll', function () {
    it('No frames are scored', function () {
      game.roll(0)
      expect(game.score()).toEqual([])
    })
  })

  describe('Add a basic frame', function () {
    it('One frame is scored', function () {
      game.roll(0)
      game.roll(1)
      expect(game.score()).toEqual([1])
    })
  })

  describe('Add a basic frame plus one roll', function () {
    it('One frame is scored', function () {
      game.roll(0)
      game.roll(1)
      game.roll(2)
      expect(game.score()).toEqual([1])
    })
  })

  describe('Add two basic frames', function () {
    it('Two frames are scored', function () {
      game.roll(0)
      game.roll(1)
      game.roll(2)
      game.roll(3)
      expect(game.score()).toEqual([1, 6])
    })
  })
})

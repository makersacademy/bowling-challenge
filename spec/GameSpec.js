'use strict'

describe('Game:', function () {
  var game

  beforeEach(function () {
    game = new Game()
  })

  describe('it tracks frames', function () {
    it('starts with 0 frames', function () {
      expect(game.frames.length).toEqual(0)
    })
  })

  describe('it calculates the score', function () {
    it('initializes at 0', function () {
      expect(game.score).toEqual(0)
    })
  })

  describe('Bowl', function () {
    it('identifies the first roll', function () {
      var fakeGame = new Game()
      spyOn(fakeGame, 'calcFirstRoll')
      fakeGame.bowl(5)
      expect(fakeGame.calcFirstRoll).toHaveBeenCalled()
    })

    it('identifies the second roll', function () {
      var fakeGame = new Game()
      spyOn(fakeGame, 'calcSecondRoll')
      fakeGame.bowl(5)
      fakeGame.bowl(5)
      expect(fakeGame.calcSecondRoll).toHaveBeenCalled()
    })
  })
  describe('Complete frames', function () {
    beforeEach(function () {
      game.bowl(4)
      game.bowl(4)
    })
    it('adds score of a frame to the game score', function () {
      expect(game.score).toEqual(8)
    })
    it('stores a complete frame in the frame array', function () {
      expect(game.frames.length).toEqual(1)
    })
  })
})

/* global Game:true */
/* global i:true */
var Game = require("../../src/Game.js")

describe('Game', function () {
  var game

  beforeEach(function () {
    game = new Game()
  })

  it('should return the inputted pins', function () {
    expect(game.knockDown(3)).toEqual(3)
  })

  describe('should update frame', function () {
    it('update frame when frame ended when no bonus', function () {
      expect(game.cur_frame).toEqual(1)
      game.knockDown(2)
      game.knockDown(5)
      expect(game.cur_frame).toEqual(2)
    })

    it('update frame when frame ended when is Spare', function () {
      expect(game.cur_frame).toEqual(1)
      game.knockDown(5)
      game.knockDown(5)
      expect(game.cur_frame).toEqual(2)
    })

    it('pdate frame when frame ended when is Strike', function () {
      expect(game.cur_frame).toEqual(1)
      game.knockDown(10)
      expect(game.cur_frame).toEqual(2)
    })
  })

  describe('should calculate the correct frame score - non final frame', function () {
    it('calculate frame score when no bonus', function () {
      game.knockDown(2)
      game.knockDown(5)
      expect(game.frameScore(1)).toEqual(7)
    })

    it('calculate frame score when is Spare', function () {
      game.knockDown(5)
      game.knockDown(5)
      game.knockDown(5)
      game.knockDown(0) // frame 2 has to end for frame 1 to get the pins number
      expect(game.frameScore(1)).toEqual(15)
    })

    it('calculate frame score when is single Strike', function () {
      game.knockDown(10)
      game.knockDown(1)
      game.knockDown(2)// frame 2 has to end for frame 1 to get the pins number
      expect(game.frameScore(1)).toEqual(13)
    })

    it('calculate frame score when is double Strike', function () {
      game.knockDown(10)
      game.knockDown(10)
      game.knockDown(2)
      game.knockDown(2)// frame 3 has to end for frame 1 to get the pins number
      expect(game.frameScore(1)).toEqual(22)
    })
  })

  describe('should calculate the correct frame score - final frame', function () {
    beforeEach(function () { // fill the first 9 frames
      for (i = 1; i < 10; i++) {
        game.knockDown(10)
      }
    })

    it('calculate final frame score when no bonus', function () {
      game.knockDown(2)
      game.knockDown(5)
      expect(game.finalFrScore()).toEqual(7)
    })

    it('calculate final frame score when is Spare', function () {
      game.knockDown(5)
      game.knockDown(5)
      game.knockDown(9)
      expect(game.finalFrScore()).toEqual(19)
    })

    it('calculate final frame score when is Strike', function () {
      game.knockDown(10)
      game.knockDown(2)
      game.knockDown(5)
      expect(game.finalFrScore()).toEqual(17)
    })

    it('give error after the final frame finish', function () {
      game.knockDown(10)
      game.knockDown(10)
      game.knockDown(10)
      expect(game.finalFrScore()).toEqual(30)
      expect(function () { game.knockDown(2) }).toThrowError('game ended')
    })
  })

  describe('should calculate the correct accumulate score', function () {
    it('calculate correct accum score - all zero', function () {
      for (i = 1; i <= 20; i++) {
        game.knockDown(0)
      }
      for (i = 1; i < 10; i++) {
        game.frameScore(i)
      }
      game.finalFrScore()
      expect(game.accumScore(10)).toEqual(0)
    })

    it('calculate correct accum score - no bonus', function () {
      for (i = 1; i <= 20; i++) {
        game.knockDown(2)
      }
      for (i = 1; i < 10; i++) {
        game.frameScore(i)
      }
      game.finalFrScore()
      expect(game.accumScore(10)).toEqual(40)
    })

    it('calculate correct accum score - all Spare', function () {
      for (i = 1; i <= 21; i++) {
        game.knockDown(5)
      }
      for (i = 1; i < 10; i++) {
        game.frameScore(i)
      }
      game.finalFrScore()
      expect(game.accumScore(10)).toEqual(150)
    })

    it('calculate correct accum score - all Strike', function () {
      for (i = 1; i <= 12; i++) {
        game.knockDown(10)
      }
      for (i = 1; i < 10; i++) {
        game.frameScore(i)
      }
      game.finalFrScore()
      expect(game.accumScore(10)).toEqual(300)
    })
  })
})

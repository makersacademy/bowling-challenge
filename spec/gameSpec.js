var Game = require('../src/game')
var Frame = require('../src/frame')

describe('Game class', function() {
  describe('#roll', function () {
    // var frame = {
    //   inputScore: jasmine.createSpy('inputScore')
    // }
    // var frameClass = {
    //   prototype: jasmine.createSpy('Prototype')
    //   // .and.returnValue("frame")
    // }
    var game;

    beforeEach(function() {
      game = new Game ()
    })


    it('Makes a 1st frame for new Game', function () {
      game.roll(4)
      expect(game.frames.length).toEqual(1)
    })

    it('Makes a new frame for 3rd roll', function () {
      game.roll(3)
      game.roll(3)
      game.roll(3)
      expect(game.frames.length).toEqual(2)
    })

    it('sends score to all frames', function () {
      game.roll(3)
      var firstFrame = game.frames[0]
      expect(firstFrame.totalScore()).toEqual(3)
    })

    it('stops making new frames after 10 frames', function () {
      for (var i = 0; i < 25; i++) {
        game.roll(2)
      }
      expect(game.totalScore()).toEqual(40)
    })
  })

  describe('#totalScore', function () {
    var game;

    beforeEach(function() {
      game = new Game ()
    })
    it('sums the score of all frames', function () {
      game.roll(3)
      game.roll(3)
      game.roll(3)
      expect(game.totalScore()).toEqual(9)
    })

    it('works for spares', function () {
      game.roll(9)
      game.roll(1)
      game.roll(3)
      expect(game.totalScore()).toEqual(16)
    })

    it('works for strikes', function () {
      game.roll(10)
      game.roll(10)
      game.roll(5)
      expect(game.totalScore()).toEqual(45)
    })

    it('works for multiple strikes and spares,', function () {
      game.roll(10)
      game.roll(10)
      game.roll(5)
      game.roll(5)
      game.roll(9)
      game.roll(0)
      expect(game.totalScore()).toEqual(73)
    })
    describe('Gutter game', function () {
      var game = new Game()

      it('Scores Zero on a Gutter game', function () {
        for (var i = 0; i < 20; i++) {
          game.roll(0)
        }
        expect(game.totalScore()).toEqual(0)
      })
    })

    describe('Perfect game', function () {
      var game = new Game()

      it('Scores 300 on a Perfect game', function () {
        for (var i = 0; i < 29; i++) {
          game.roll(10)
        }
        expect(game.totalScore()).toEqual(300)
      })
    })
  })
})

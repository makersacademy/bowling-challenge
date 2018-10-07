var Game = require('../src/game')
var Frame = require('../src/frame')

describe('Game class', function() {
  describe('Gutter game', function () {
    var game = new Game()

    it('Scores Zero on a Gutter game', function () {
      for (var i = 0; i < 20; i++) {
        game.roll(0)
      }
      expect(game.score).toEqual(0)
    })
  })

  describe('#roll', function () {
    var frame = {
      inputScore: jasmine.createSpy('inputScore')
    }
    var frameClass = {
      prototype: jasmine.createSpy('Prototype')
      // .and.returnValue("frame")
    }
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
      console.log(game.frames)
      expect(game.frames[0].scoreTotal()).toEqual(3)
    })
  })
})

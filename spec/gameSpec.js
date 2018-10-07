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
  })
})

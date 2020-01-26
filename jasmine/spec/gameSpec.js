'use strict'

describe('game', function () {
  let game

  beforeEach(function () {
    game = new Game()
  })

  describe('.addFrame', function () {
    it('add a frame to the game', function () {
      game.addFrame()
      expect(game._frames.length).toEqual(1)
    })

    it('add 6 frames to the game', function () {
      for (let i = 0; i < 6; i++) {
        game.addFrame()
      }
      expect(game._frames.length).toEqual(6)
    })

    it('throw an error if trying to add a 11nth frame', function () {
      for (let i = 0; i < 10; i++) {
        game.addFrame()
      }
      expect(function () { game.addFrame() }).toThrowError(Error, "This game is over, can't play for ever!")
    })
  })

  describe('.frameNumber', function () {
    it('return 0 if no frames were added', function () {
      expect(game.frameNumber()).toEqual(0)
    })
    it('return 1 as the first frame', function () {
      game.addFrame()
      expect(game.frameNumber()).toEqual(1)
    })

    it('return 5 after adding 5 frames', function () {
      for (let i = 0; i < 5; i++) {
        game.addFrame()
      }
      expect(game.frameNumber()).toEqual(5)
    })
  })

  describe('.getPoints', function () {
    it('starts a game at 0 point', function () {
      expect(game.getPoints()).toEqual(0)
    })
  })
})
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
})
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
})
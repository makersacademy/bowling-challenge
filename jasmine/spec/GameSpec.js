'use strict'

describe('Features', function () {
  let game
  beforeEach(function () {
    game = new Game()
  })

  it('shows the number of frames of a game', function () {
    expect(game.numberOfFrames).toBeGreaterThan(0)
  })
  it('has a default number of frames of 10', function () {
    expect(game.numberOfFrames).toEqual(10)
  })

})
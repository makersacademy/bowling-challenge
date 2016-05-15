'use strict'

describe('Game', function(){

  var game
  var frame

  beforeEach(function() {
    game = new Game()
    frame = {
      firstRoll: function() {
        return value
      },
      secondRoll: function() {
        return value
      }
    }
  })

  it('can add a frame to the game', function() {
    game.addFrame(frame)
    expect(game.frames()).toContain(frame)
  })

  it('game tracks score')

})
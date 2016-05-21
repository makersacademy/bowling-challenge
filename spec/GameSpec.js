'use strict'

describe('Game', function() {

  var game

  beforeEach( function() {
    game = new Game
  })

  it('stores the result of a roll', function() {
    game.roll(5)
    expect(game.rollscore(1)).toEqual(5)
  })

})
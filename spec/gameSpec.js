'use strict';

describe('Game:', function(){
  var game

  beforeEach(function(){
    game = new Game
  })

  it('adds a roll to the array of scores', function(){
    game.roll(3)
    console.log(game.score())
    expect(game.score()).toEqual([3])
  })
})

'use strict';

describe('Game:', function(){
  var game

  beforeEach(function(){
    game = new Game
  });

  it('adds a roll to the array of scores', function(){
    game.roll(3)
    expect(game.score()).toEqual([3])
  });
  it('can deal with a multitude of scores', function(){
    game.roll(10)
    game.roll(4)
    game.roll(5)
    game.roll(7)
    game.roll(3)
    for(var i = 0; i < 14; i++){
      game.roll(3)
    }
    expect(game.score()).toEqual(
      [
        10, 4, 5, 7,
        3, 3, 3, 3, 3,
        3, 3, 3, 3, 3,
        3, 3, 3, 3, 3,
      ])
  });
  describe('Tenth frame :-', function(){
    it('gives two bonus rolls for a strike', function(){
      for(var i = 0; i < 18; i++){
        game.roll(1)
      }
      game.roll(10)
      game.roll(3)
      game.roll(3)
      expect(game._playing).toBe(false)
    })
  })
})

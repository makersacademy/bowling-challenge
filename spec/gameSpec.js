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
    it('gives two bonus rolls for a strike(still playing after two rolls)', function(){
      for(var i = 0; i < 18; i++){
        game.roll(1)
      }
      game.roll(10)
      game.roll(3)
      expect(game._playing).toBe(true)
    })
    it('gives two bonus rolls for a strike(game finished after three rolls)', function(){
      for(var i = 0; i < 18; i++){
        game.roll(1)
      }
      game.roll(10)
      game.roll(3)
      game.roll(3)
      expect(game._playing).toBe(false)
    })
    it('gives only two rolls for the tenth frame if they open frames(no longer playing after two rolls)', function(){
      for(var i = 0; i < 18; i++){
        game.roll(1)
      }
      game.roll(3)
      game.roll(3)
      expect(game._playing).toBe(false)
    })
    it('gives a bonus roll after a spare(no longer playing after third roll)', function(){
      for(var i = 0; i < 18; i++){
        game.roll(1)
      }
      game.roll(3)
      game.roll(7)
      game.roll(1)
      expect(game._playing).toBe(false)
    })
    it('gives a bonus roll after a spare(still playing after spare)', function(){
      for(var i = 0; i < 18; i++){
        game.roll(1)
      }
      game.roll(3)
      game.roll(7)
      expect(game._playing).toBe(true)
    })
  })
})

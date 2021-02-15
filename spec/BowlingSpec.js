'use strict';

describe('Bowling', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('should return an empty array', function(){
    expect(game.rolls).toEqual([]);
  });

  it('roll method should input number of pins knocked into rolls array', function(){
    game.roll(3);
    expect(game.rolls).toEqual([3])
  })

  it('can score a gutter game', function(){
    for (var i = 0; i < 20; i++) {
      game.roll(0)
    }
    expect(game.score()).toEqual(0)
  })

  it('can score all ones', function(){
    for (var i = 0; i < 20; i++) {
      game.roll(1)
    }
    expect(game.score()).toEqual(20)
  })

  it('can score a spare', function(){
    game.roll(5)
    game.roll(5)
    game.roll(3)
    for (var i = 0; i < 17; i++) {
      game.roll(0)
    }
    expect(game.score()).toEqual(16)
  })

  it('can score a strike', function(){
    game.roll(10)
    game.roll(3)
    game.roll(3)
    for (var i = 0; i < 16; i++) {
      game.roll(0)
    }
    expect(game.score()).toEqual(22)
  })

  it('can roll a perfect game', function(){
    for (var i = 0; i < 20; i++) {
      game.roll(10)
    }
    expect(game.score()).toEqual(300)
  })

});

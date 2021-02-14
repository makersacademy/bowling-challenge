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
    expect(game.score()).toBe(0)
  })
});

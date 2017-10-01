'use strict';

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('rolls and registers frame', function(){
    game.roll([4,4]);
    expect(game._frames[0].rolls).toEqual([4,4]);
  });
});

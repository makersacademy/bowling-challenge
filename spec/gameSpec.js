'use strict';

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('instantiates with at least one frame', function(){
    expect(game.frame1).toBeDefined();
  });


})

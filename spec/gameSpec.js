'use strict';

describe('Game', function() {
  var game;

  beforeEach( function() {
    game = new Game();
  });

  it('consists of 20 throws per player', function(){
    for(int i=0; i <20; i++) {
      game.throw(1);
    }
    expect(game.throw(1)).toThrowException("The game has finished. Start a new game to throw again.");
  });
});

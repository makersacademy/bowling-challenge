'use strict';

describe('Feature Test:', function(){
  var game;

  beforeEach (function(){
    game = new Game();

  });

  it('stores the throws for each frame in pairs', function() {
    game.throw(4);
    game.throw(3);
    game.throw(7);
    game.throw(2);
    expect(game._frames).toEqual([[4,3],[7,2]]);
  })
});

'use strict';

describe('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('score starts at 0', function(){
    expect(game.score).toEqual(0);
  });

});

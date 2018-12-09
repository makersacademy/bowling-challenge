'use strict';

describe('Game', function() {

  var game;

  beforeEach(function(){
    game = new Game;
  });

  it('should start at frame 1', function(){
    expect(game.currentFrame).toEqual(1);
  });

});

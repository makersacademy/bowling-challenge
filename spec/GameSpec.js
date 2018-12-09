'use strict';

describe('Game', function() {

  var game;

  beforeEach(function(){
    game = new Game;
  });

  it('should start at frame 1', function(){
    expect(game.currentFrame).toEqual(1);
  });

  it('should start with a score of 0', function(){
    expect(game.score).toEqual(0);
  });

});

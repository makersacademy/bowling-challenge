'use strict';

describe('Game', function(){
  var game;
  beforeEach(function(){
    game = new Game();
  });

  it('returns the pins for a single frame', function(){
    expect(game.score()).toEqual(5)
  });
});

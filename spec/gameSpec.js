'use strict'

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game(Frame);
  });

  it('Game starts with 10 empty frame', function(){
    game.createEmptyFrames();
    expect(game.getFrames().length).toEqual(10);
  });

  it('Current frame is 1', function(){
    expect(game.getCurrentFrame()).toEqual(1);
  });
});

'use strict';

describe('Game', function(){
  var game;
  var frame;


  beforeEach(function(){
    game = new Game();
    game.create(Frame);
  });

  it('has 10 frames in a game', function(){
    expect(game.frames()).toEqual(10);
  });

  it('adds the total of the 2 rolls in a regular frame', function(){
    frame.roll(4);
    frame.roll(4);
    expect(game.score()).toEqual(2);
  });
});

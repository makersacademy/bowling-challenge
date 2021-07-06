'use strict';

describe('Game', function(){
  var game;
  beforeEach(function(){
    game = new Game();
  });

  it('returns the pins for a single frame', function(){
    expect(game.score()).toEqual(5)
  });
  it('checks if the frame has a strike', function(){
    expect(game.isStrike()).toBe(false)
  });
  it('checks if the frame has a spare', function(){
    expect(game.isSpare()).toBe(false)
  });
  it('adds up the rolls in 10 frames', function(){
    expect(game.score()).toEqual(117)
  })
});

'use strict';

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('rolls and registers frame', function(){
    game.roll([3,4]);
    expect(game._frames[0].rolls).toEqual([3,4]);
  });

  it('calculates the total game score', function(){
    game.roll([3,4]);
    game.roll([5,1]);
    game.roll([10,0]);
    game.roll([9,1]);
    game.roll([5,3]);
    game.roll([6,6]);
    game.roll([10,0]);
    game.roll([10,0]);
    game.roll([9,0]);
    game.roll([5,3]);
    expect(game.totalScore()).toEqual(90);
  });

  it("keeps track of player's number of frames", function(){
    game.roll([3,4]);
    game.roll([5,1]);
    game.roll([10,0]);
    expect(game.framesPlayed()).toEqual(3);
  });

  it('keeps track of the number of frames left to play', function(){
    game.roll([3,4]);
    expect(game.framesLeft()).toEqual(9);
  });
});

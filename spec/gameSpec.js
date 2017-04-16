'use strict';
describe('Game', function() {
  var game;

  beforeEach( function() {
    game = new Game();
  });

  it('records the player\'s score', function() {
    game.roll(1);
    expect(game.currentFrame).toEqual([1]);
  });



  it('throws an error if points entered are less than 0', function(){
    expect(function(){game.roll(-1);}).toThrowError("Invalid entry: points must be between 0-10");
  });

  it('throws an error if points entered are greater than 10', function(){
    expect(function(){game.roll(11);}).toThrowError("Invalid entry: points must be between 0-10");
  });

  it('finishes once each player has completed 20 rolls', function() {
    for(var i=0; i<20; i++) {
      game.roll(1);
    }
    expect(function(){game.roll(1);}).toThrowError("The game has finished. Start a new game to throw again.");
  });

  it('tracks the current frame number', function(){
    for(var i=0; i<2; i++) {
      game.roll(1);
    }
    expect(game.getFrameNumber()).toEqual(2);
  });

  it('each frame conists of two rolls per player', function(){
    for(var i=0; i<3; i++) {
      game.roll(1);
      game.roll(4)
    }
    expect(game.frameHistory).toEqual([[1,4],[1,4],[1,4]]);
  });

  it('returns the status of the current frame', function(){
    game.roll(8);
    game.roll(1);
    game.roll(2);
    expect(game.currentFrame).toEqual([2]);
  });

  it('each new frame starts empty', function(){
    game.roll(8);
    game.roll(1);
    expect(game.currentFrame).toEqual([]);
  });
});

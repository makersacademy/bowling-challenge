'use strict';

describe('Game', function() {
  var game;
  var frames = [];

  beforeEach(function() {
    game = new Game();
  });


  it('can roll with score less than or equal to 10', function() {
    spyOn(Math, 'random').and.returnValue(0.5);
    expect(game._roll()).toEqual(5);
  });


  it('has a standard frame with two rolls', function() {
    spyOn(Math, 'random').and.returnValue(0.5);
    expect(game._oneFrame()).toEqual([5,5]);
  });

  it('can get a specific frame', function() {
    game._frames = [[1,3],[2,2],[3,6]];
    expect(game.getFrame(3)).toEqual([3,6]);
  });

  it('can play a frame', function(){
    spyOn(Math, 'random').and.returnValue(0.5);
    game.playNextFrame();
    expect(game._score).toEqual(10);
  });

  it('has a maximum of 10 frames', function() {
    for (var i=0; i<10; i++) {
      game.playNextFrame();
    }
    expect(game.playNextFrame()).toEqual("Sorry, there are only 10 frames per game!");
  });

  it('can get the current game score', function() {
    spyOn(Math, 'random').and.returnValue(0.5);
    game.playNextFrame();
    expect(game.currentScore()).toEqual(10)
  });

});

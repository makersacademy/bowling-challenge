'use strict';

describe("Bowling Game", function() {
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('A Game contains Frames', function() {
    expect(game.getFrames()).toBeTruthy();
  });

  it('A User can Roll 2 times per Frame', function() {
    game.roll(1);
    game.roll(1);
    game.roll(1);
    expect(game.getFrames()).toEqual(['X']);
  });

  // it('A User can Roll 3 times in Frame 10', function() {
  //   game.frames = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
  //   game.roll();
  //   game.roll();
  //   game.roll();
  //   expect(game.getFrames()).toEqual(['X']);
  // });

  it('A User can Roll 20 times per Game', function() {
    game.frames = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
    game.roll(1);
    game.roll(1);
    game.roll(1);
    expect(game.frames.length).toEqual(10);
  });

  it('A User can Roll 20 times per Game', function() {

    // This for loop adds 9 Frames to a Game
    for (var i = 0; i < 10; i++) {
      game.addFrame('X');
    }
    game.roll(1);
    game.roll(1);
    game.roll(1);
    expect(game.frames.length).toEqual(10);
  });

  it('A User can Roll 2 times and score 5 points', function() {
    game.roll(1);
    game.roll(4);
    expect(game.getPoints()).toEqual(5);
  });

});

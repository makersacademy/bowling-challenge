'use strict';

describe("Game: ", function() {
  var game;
  var calc;

  beforeEach(function(){
    game = new Game();
    calc = new CalculateScore();
  });

  it('A Game contains Frames', function() {
    expect(game.getFrames()).not .toBeNull()
  });

  it('A User can Roll 2 times per Frame', function() {
    game.roll(1);
    game.roll(1);
    game.roll(1);
    expect(game.getFrames()).toEqual(1);
  });

  it('A User can Roll 20 times per Game', function() {
    // A game contains 10 Frames
    // This for loop adds 9 Frames to a Game
    for (var i = 0; i <= 9; i++) {
      game.addFrame('X');
    }
    // game.roll(1);
    // game.roll(1);
    // game.roll(1);
    expect(game.getFrames()).toEqual(10);
  });

  it('A User can Roll 2 times and score 5 points', function() {
    game.roll(1);
    game.roll(4);
    expect(game.getScore()).toEqual(5);
  });
});

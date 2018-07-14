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
    for (var i = 0; i < 10; i++) {
      game.addFrame('X');
    }
    game.roll(1);
    game.roll(1);
    game.roll(1);
    expect(game.getFrames()).toEqual(10);
  });

  it('A User can Roll 2 times and score 5 points', function() {
    game.roll(1);
    game.roll(4);
    expect(game.score()).toEqual(5);
  });

  it('A User can roll 10 strikes in a Game and score maximum points', function() {
    for (var i = 0; i < 5; i++) {
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.getBonus();
    }
    expect(game.score()).toEqual(300);
  });

  it('A User can roll 0 pins in a GUTTER GAME and score 0 points', function() {
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });

});

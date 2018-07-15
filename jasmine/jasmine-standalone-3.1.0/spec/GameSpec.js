'use strict';

describe("Game unit test: ", function() {
  var game;
  var score;

  beforeEach(function(){
    game = new Game();
    score = new Score();
  });

  it('A Game contains Frames', function() {
    expect(game.getFrames()).not .toBeNull()
  });

  it('A User can roll in a Game', function() {
    game.roll(1);
    expect(game.getRolls()).toEqual(1);
  });

  it('A User can Roll 2 times per Frame', function() {
    game.roll(1);
    game.roll(1);
    // game.roll(1);
    expect(game.getFrames()).toEqual(1);
  });

  it('A User can Roll 2 times per Frame', function() {
    game.roll(1);
    game.roll(1);
    game.roll(1);
    game.roll(1);
    expect(game.getFrames()).toEqual(2);
  });

  it('A User can Roll 20 times per Game', function() {
    // A game contains 10 Frames
    // This for loop adds 9 Frames to a Game
    for (var i = 0; i < 10; i++) {
      game.addFrame('X');
    }
    expect(game.getFrames()).toEqual(10);
  });

  it('A User can Roll 2 times and score 5 points', function() {
    game.roll(1);
    game.roll(4);
    expect(game.getScore()).toEqual(5);
  });

  it('A Game is over if 10 Frames played', function() {
    for (var i = 0; i < 10; i++) {
      game.addFrame('X');
    }
    expect(game.gameOver()).toBeTruthy();
  });

  it('A User can play again when the game is over', function() {
    game.gameOver() === true;
    game.resetGame();
    expect(game.gameOver()).toBeFalsy();
    expect(game._rolls).toEqual(0);
    expect(game._frames).toEqual([]);
    expect(game.getScore()).toEqual(0);
    expect(game.getScoreCard()).toEqual([]);
  });

});

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

  it('A User can Roll 3 times in Frame 10', function() {
    for (var i = 0; i < 10; i++) {
      game.addFrame('1');
    }
    game.roll(10);
    game.roll(10);
    game.roll(10);
    expect(game.getRolls()).toEqual(3);
  });

  it('A User can Roll 2 times if not in Frame 10', function() {
    for (var i = 0; i < 9; i++) {
      game.addFrame('1');
    }
    game.roll(10);
    game.roll(10); // reset roll to 0
    game.roll(10);
    expect(game.getRolls()).toEqual(1);
  });

  it('A User can Roll 20 times per Game', function() {
    // A game contains 10 Frames
    // This for loop adds 9 Frames to a Game
    for (var i = 0; i < 10; i++) {
      game.addFrame('1');
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

  it('Updates the pins hit total', function() {
    this._totalPinsHitFrame = 0
    expect(game.updatePinsHit(1)).toEqual(1);
  });

  it('Updates the roll total', function() {
    game._rolls = 0
    expect(game.updateRolls()).toEqual(1);
  });

});

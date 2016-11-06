'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('starts with a total score of zero', function() {
    expect(game.totalScore).toEqual(0);
  });

  it('starts a new frame after two rolls', function() {
    game.recordRoll(5);
    game.recordRoll(4);
    expect(game.frame.rolls).toEqual([]);
    expect(game.frameRolls[0]).toEqual([5,4]);
  });

  it('starts a new frame after a strike', function() {
    game.recordRoll(10);
    expect(game.frame.rolls).toEqual([]);
    expect(game.frameRolls[0]).toEqual([10]);
  });

  it('increases the frame number by one',function() {
    game.recordRoll(10)
    expect(game.frameNum).toEqual(2);
  });

  it('recognises a strike condition',function() {
    game.recordRoll(10)
    expect(game.isStrike()).toBe(true);
  });

  it('recognises a spare condition',function() {
    game.recordRoll(9)
    game.recordRoll(1)
    expect(game.isSpare()).toBe(true);
  });

  describe('End Game', function() {

    beforeEach(function() {
      for( var i = 0; i < 10; i++) {
        game.recordRoll(10)
      }
    });

    it('ends the game after 10 frames', function() {
      expect(game.isOver()).toBe(true);
    });

    it('does not allow additional rolls after game end', function() {
      expect(function(){game.recordRoll(10)}).toThrowError('Game over, please start a new game');
    });

    it('should have a final score of 100', function() {
      expect(game.totalScore).toEqual(100);
    });

  });

});

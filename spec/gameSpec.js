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
    expect(game.currentFrame.rolls).toEqual([]);
    expect(game.allFrames[0].rolls).toEqual([5,4]);
  });

  it('starts a new frame after a strike', function() {
    game.recordRoll(10);
    expect(game.currentFrame.rolls).toEqual([]);
    expect(game.allFrames[0].rolls).toEqual([10]);
  });

  it('increases the frame number by one',function() {
    game.recordRoll(10)
    expect(game.frameNum).toEqual(2);
  });

  describe('Bonus Scores', function() {

    beforeEach(function() {
      game.recordRoll(9);
      game.recordRoll(1);
      game.recordRoll(3);
      game.addSpareBonus();
    });

    it('adds the spare bonus', function() {
      expect(game.allFrames[0].score).toEqual(13);
    });

    it('updates the total score', function() {
      game.recordRoll(2);
      game.updateScore();
      expect(game.totalScore).toEqual(18);
    });

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

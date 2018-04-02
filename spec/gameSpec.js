'use strict';

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('Frame', function() {
    it('is an array of rolls', function(){
      expect(game.frame).toEqual([]);
    });
  });

  describe('roll', function() {
    it('enters the number of pins knocked down in the first roll', function() {
      game.roll(1);
      expect(game.frame).toEqual([1]);
    });
    it('enters the number of pins knocked down in the second roll', function() {
      game.roll(1);
      game.roll(4);
      expect(game.frame).toEqual([1, 4]);
    });
  });

  describe('Scorecard', function() {

    it('is empty at the beggining of the game', function() {
      expect(game.scoreCard).toEqual([]);
    });

    it('adds the score of the two rolls in a frame', function() {
      game.roll(1);
      game.roll(4);
      game.empty();
      expect(game.scoreCard).toEqual([5]);
    });

    it('empties the frame at the end', function() {
      game.roll(1);
      game.roll(4);
      game.empty();
      expect(game.frame).toEqual([]);
    });

    it('carries on score over multiple frames', function() {
      game.roll(1);
      game.roll(4);
      game.empty();
      game.roll(4);
      game.roll(5);
      game.empty();
      expect(game.scoreCard).toEqual([5, 9]);
    });
  });

  describe('RunningScore', function() {
    it('returns the current score', function() {
      game.roll(1);
      game.roll(4);
      game.empty();
      game.roll(4);
      game.roll(5);
      game.empty();
      expect(game.runningScore).toEqual(14);
    });
  });

});

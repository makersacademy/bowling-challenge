'use strict';

describe ('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('initialize game', function() {

    it('game starts with the score of zero', function() {
      expect(game.getScore()).toEqual(0);
    });

    it('game starts with the first frame', function() {
      expect(game.frameNumber()).toEqual(1);
    });

    it('games starts on roll zero', function() {
      expect(game.rollCount()).toEqual(0);
    });
  });

  describe('passing scores to the next frames', function() {

    it('frame number increases by three after six rolls', function() {
      for(var i = 0; i < 6; i++) {
        game.oneRoll(5);
      }
      expect(game.frameNumber()).toEqual(4);
    });

    it('frame number increases by one after three rolls', function() {
      for(var i = 0; i < 3; i++) {
        game.oneRoll(5);
      }
      expect(game.frameNumber()).toEqual(2);
    });

  });

  describe('storing frame scores', function() {

    it('stores frames scores in an array of frames', function() {
      game.oneRoll(6);
      game.oneRoll(3);
      expect(game.totalFrameScore()).toEqual([[6, 3]]);
    });

  });

});

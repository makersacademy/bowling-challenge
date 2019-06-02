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

    it('starts with zero bonus points', function() {
      expect(game.bonusPoints()).toEqual(0);
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

    it('stores frame score on first roll if strike', function() {
      game.oneRoll(3);
      game.oneRoll(4);
      game.oneRoll(10);
      expect(game.totalFrameScore()).toEqual([[3,4],[10]])
    });

    it("doesn't store the frame score on the first roll if not a strike", function() {
      game.oneRoll(6);
      expect(game.totalFrameScore()).toEqual([])
    });

  });

  describe('storing frame scores', function() {

    it('stores frames scores in an array of frames', function() {
      game.oneRoll(6);
      game.oneRoll(3);
      expect(game.totalFrameScore()).toEqual([[6, 3]]);
    });

  });

  describe ('awarding bonus points', function() {

    it('first roll is a strike', function() {
      expect(game.isStrike(10)).toBe(true);
    });

    it('first roll is not a strike', function() {
      expect(game.isStrike(3)).toBe(false);
    });
  
  });



});

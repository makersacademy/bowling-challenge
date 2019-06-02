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
      expect(game.frame()).toEqual(1);
    });

    it('games starts on roll zero', function() {
      expect(game.rollCount()).toEqual(0);
    });
  });

  describe('score for one frame', function() {

    it('is 6 after a roll with 6 pins hit', function() {
      game.oneRoll(6);
      expect(game.totalFrameScore()).toEqual(6);
    });

  });

});

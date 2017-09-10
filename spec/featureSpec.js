'use strict';

describe('Feature Tests', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

    it('user can roll', function() {
    });

    it('user can knock down pins', function() {
      game.roll(5);
      expect(game.frames.getAllFrameScores()).toEqual([5]);
    });

    it('total score is recorded', function() {
      game.roll(5);
      game.updateTotalScore;
      expect(game.getCurrentTotalScore()).toEqual(5);
    });

    it('score per frame is recorded', function() {
      game.roll(5);
      expect(game.frames.getAllFrameScores()).toEqual([5]);
    });
  });

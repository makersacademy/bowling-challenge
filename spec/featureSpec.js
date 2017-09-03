'use strict';

describe('Feature Tests', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

    it('user can roll', function() {
    });

    it('user can knock down pins', function() {
      game.roll();
      expect(game.getCurrentPinsKnockedDown()).toEqual(5);
    });

    it('total score is recorded', function() {
      game.roll();
      expect(game.getCurrentScore()).toEqual(5);
    });

    it('score per frame is recorded', function() {
      game.roll();
      expect(game.getCurrentFrames()).toEqual([5]);
    });

    it('pins are reset after each frame', function() {
      game.roll();
      game.roll();
      game.resetPins();
      expect(game.getCurrentPinsKnockedDown()).toEqual(0);
    });
  });

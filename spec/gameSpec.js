'use strict';

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game(Frame);
  });

  describe('calculates the scores', function() {

    it('for one roll', function() {
      game.roll(1);
      expect(game.finalSum()).toBe(1);
    });

    it('for two rolls', function() {
      game.roll(1);
      game.roll(5);
      expect(game.currentFrame()).toBe(2);
      expect(game.finalSum()).toBe(6);
    });
  });

  describe('calculates the bonus', function() {

    it('plus adds score for strike', function() {
      game.roll(10);
      game.roll(5);
      game.roll(2);
      expect(game.currentFrame()).toBe(3);
      expect(game.finalSum()).toBe(24);
    });
  });

  describe('return frame number', function() {

    it('knows which frame the game is entering', function() {
      game.roll(10);
      game.roll(5);
      game.roll(2);
      game.roll(1);
      game.roll(5);
      game.roll(2);
      game.roll(7);
      game.roll(5);
      game.roll(2);
      expect(game.currentFrame()).toBe(6);
    });

    it('knows how many frames the game already had', function() {
      game.roll(10);
      game.roll(5);
      game.roll(2);
      game.roll(1);
      game.roll(5);
      game.roll(2);
      game.roll(7);
      game.roll(5);
      game.roll(2);
      expect(game.completedFrames()).toBe(5);
    });

    it('checks if we are on the final frame, and we about to start that', function() {
      game.roll(10);
      game.roll(5);
      game.roll(2);
      game.roll(3);
      game.roll(1);
      game.roll(2);
      game.roll(7);
      game.roll(5);
      game.roll(2);
      game.roll(6);
      game.roll(1);
      game.roll(0);
      game.roll(0);
      game.roll(1);
      game.roll(8);
      game.roll(2);
      game.roll(1);
      expect(game.currentFrame()).toBe(10);
    });

    it('checks whether in case of the perfect game the final score is 300', function () {
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      expect(game.finalSum()).toBe(300);
    });

    it('checks if the game is completed', function() {
      game.roll(1);
      game.roll(0);
      game.roll(2);
      game.roll(3);
      game.roll(4);
      game.roll(5);
      game.roll(1);
      game.roll(5);
      game.roll(2);
      game.roll(2);
      game.roll(0);
      game.roll(4);
      game.roll(0);
      game.roll(0);
      game.roll(2);
      game.roll(3);
      game.roll(6);
      game.roll(1);
      game.roll(6);
      game.roll(1);
      expect(game.isGameCompleted()).toBe(true);
    });
  });
});

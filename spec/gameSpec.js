'use strict';

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game(Frame);
  });

  describe('calculates the scores', function() {

    it('calculates the score for one roll', function() {
      game.roll(1);
      expect(game.finalSum()).toBe(1);
    });

    it('calculates the score for two rolls', function() {
      game.roll(1);
      game.roll(5);
      expect(game.currentFrame()).toBe(2);
      expect(game.finalSum()).toBe(6);
    });
  });

  describe('calculates the bonus', function() {

    it('calculates the bonus and score for strike', function() {
      game.roll(10);
      game.roll(5);
      game.roll(2);
      expect(game.currentFrame()).toBe(3);
      expect(game.finalSum()).toBe(24);
    });
  });
});

//we now know what frames we are on
//we need a test for checking or the final frame
//we need a lot of rolls and checking whether the frame is the 10th frame
//map out the rolls and frames and make sure the game adds up correctly
//just testing that the score is correct and the game is complete, current frame is === 10 and is finished too

(function() {
  'use strict';

  describe('Bowling', function() {

    var game;

    beforeEach(function() {
      game = new Bowling();
    });
    it('has 10 pins left at start', function() {
      expect(game.pinsLeft()).toBe(10);
    });
    it('can knock down a pin with a bowling ball', function() {
      game.newFrame();
      game.throwBall(1);
      expect(game.pinsLeft()).toBe(9);
    });
    it('starts a new frame', function() {
      game.newFrame();
      expect(game.getFrames()).toContain(new Frame());
    });
    it('scores a frame when the ball is thrown', function() {
      game.newFrame();
      game.throwBall(1);
      expect(game.getCurrentFrame().getFirstScore()).toBe(1);
    });
    it('scores a frame when two balls are thrown', function() {
      game.newFrame();
      game.throwBall(1);
      game.throwBall(2);
      expect(game.getCurrentFrame().getSecondScore()).toBe(2);
    });
    it('starts a new frame when the current frame is over', function() {
      game.newFrame();
      game.throwBall(1);
      game.throwBall(2);
      game.throwBall(3);
      expect(game.getFrames().length).toBe(2);
      expect(game.getCurrentFrame().getFirstScore()).toBe(3);
      expect(game.pinsLeft()).toBe(7);
    });
    it('resets the pins before starting a new frame', function() {
      game.newFrame();
      game.throwBall(1);
      game.throwBall(2);
      expect(game.pinsLeft()).toBe(10);
    });
  });
}());

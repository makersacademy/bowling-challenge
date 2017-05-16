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
      game.throwBall(1);
      expect(game.pinsLeft()).toBe(9);
    });
    it('starts a new frame', function() {
      game.newFrame();
      expect(game.getFrames()).toContain(new Frame());
    });
  });
}());

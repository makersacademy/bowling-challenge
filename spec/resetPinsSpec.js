'use strict';

describe('Reset Pins Unit Tests', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('.resetPins', function() {
    it('pins aren\'t reset if frame incomplete', function() {
      game.roll();
      game.resetPins();
      expect(game.getCurrentPinsKnockedDown()).toEqual(5);
    });
    it('resets pins when you complete a frame', function() {
      game.roll();
      game.roll();
      game.resetPins();
      expect(game.getCurrentPinsKnockedDown()).toEqual(0);
    });
  });

});

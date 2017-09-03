'use strict';

describe('Roll Unit Tests', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('.roll', function() {
    it('increases roll number by 1', function() {
      game.roll();
      expect(game.getCurrentRollNumber()).toEqual(1);
    });
    it('adjusts pins_knocked_down', function() {
      game.roll();
      expect(game.getCurrentPinsKnockedDown()).toEqual(5);
    });
    it('adjusts frames', function() {
      game.roll();
      expect(game.getCurrentFrames()).toEqual([5]);
    });
    it('adjusts total score', function() {
      game.roll();
      expect(game.getCurrentScore()).toEqual(5);
    });
  });

});

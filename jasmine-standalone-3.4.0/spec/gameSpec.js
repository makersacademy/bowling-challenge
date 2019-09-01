'use strict';

describe('Bowling', function() {

  var game;
  var frame;

  beforeEach(function() {
    game = new Game(); // INPUTS REQUIRED FROM USER
    frame = new Frame(); // INPUTS REQUIRED FROM USER
    game.startFirstFrame(); // INPUTS REQUIRED FROM USER
  });

  describe('when starting a new game', function() {
    it('starts with framecount 1, score 0, bonus 0', function() {
      expect(game.checkFrameCount()).toBe(1);
      expect(game.checkScore()).toBe(0);
      expect(game.checkBonus()).toBe(0);
    });
    it('creates a new frame', function() {
      expect(game._frames.length).toBe(1);
    });
    it('starts with a nil score for the first roll', function() {
      expect(frame.checkFirstRoll()).toBe('TBC');
      expect(frame.checkFirstRoll()).not.toBe(0);
    });
  });

  describe('when inputting scores', function() {
    it('inputs a score for the first roll', function() {
      frame.inputScore(5); // INPUTS REQUIRED FROM USER
      expect(frame.checkFirstRoll()).toBe(5);
    });
    it('inputs a score for the first and second rolls', function() {
      frame.inputScore(5); // INPUTS REQUIRED FROM USER
      frame.inputScore(3); // INPUTS REQUIRED FROM USER
      expect(frame.checkFirstRoll()).toBe(5);
      expect(frame.checkSecondRoll()).toBe(3);
    });
  });

});

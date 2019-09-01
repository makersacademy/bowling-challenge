'use strict';

describe('Bowling', function() {

  var game;
  var frame;

  beforeEach(function() {
    game = new Game(); // INPUTS REQUIRED FROM USER
    frame = new Frame(); // INPUTS REQUIRED FROM USER
  });

  describe('when starting a new game', function() {
    it('starts with framecount 1, score 0, bonus 0', function() {
      expect(game.checkFrameCount()).toBe(1);
      expect(game.checkTotalScore()).toBe(0);
    });
    it('starts with a nil score for the first roll', function() {
      expect(frame.checkFirstRoll()).toBe('TBC');
      expect(frame.checkFirstRoll()).not.toBe(0);
    });
  });

  describe('when inputting scores', function() {
    beforeEach(function() {
      frame.inputScore(5); // INPUTS REQUIRED FROM USER
      frame.inputScore(3); // INPUTS REQUIRED FROM USER
    });
    it('notes a score for the first and second rolls', function() {
      expect(frame.checkFirstRoll()).toBe(5);
      expect(frame.checkSecondRoll()).toBe(3);
      expect(frameScoreHolder[0]).toBe(5);
      expect(frameScoreHolder[1]).toBe(3);
    });
    it('calculates the score after the second roll', function() {
      game.finishFrame(); // INPUTS REQUIRED FROM USER
      expect(game.checkTotalScore()).toBe(8);
    });
  });

});

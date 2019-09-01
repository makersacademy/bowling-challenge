'use strict';

describe('Bowling', function() {

  var game;

  beforeEach(function() {
    game = new Game(); // INPUTS REQUIRED FROM USER
  });

  describe('when starting a new game', function() {
    it('starts with framecount 1, score 0, bonus 0', function() {
      expect(game.checkFrameCount()).toBe(1);
      expect(game.checkTotalScore()).toBe(0);
    });
    it('starts with a nil score for the first roll', function() {
      expect(game.checkFirstRoll()).toBe('TBC');
    });
  });

  describe('when inputting scores for 1st frame', function() {
    beforeEach(function() {
      game.inputScore(5); // INPUTS REQUIRED FROM USER
      game.inputScore(3); // INPUTS REQUIRED FROM USER
    });
    it('notes a score for the first and second rolls', function() {
      expect(game.checkFirstRoll()).toBe(5);
      expect(game.checkSecondRoll()).toBe(3);
      expect(game.holdFrameScore[0]).toBe(5);
      expect(game.holdFrameScore[1]).toBe(3);
    });
    it('calculates the score when the frame is over', function() {
      game.finishFrame(); // INPUTS REQUIRED FROM USER
      expect(game.checkTotalScore()).toBe(8);
      expect(game.checkFrameCount()).toBe(2);
      expect(game.checkFirstRoll()).toBe('TBC');
      expect(game.holdFrameScore.length).toBe(0);
    });
    describe('when inputting scores for 2nd frame', function() {
      beforeEach(function() {
        game.finishFrame(); // INPUTS REQUIRED FROM USER
        game.inputScore(2); // INPUTS REQUIRED FROM USER
        game.inputScore(7); // INPUTS REQUIRED FROM USER
      });
      it('remembers the score from the previous frame', function() {
        expect(game.checkTotalScore()).toBe(8);
      });

      it('notes a score for the first and second rolls', function() {
        expect(game.checkFirstRoll()).toBe(2);
        expect(game.checkSecondRoll()).toBe(7);
        expect(game.holdFrameScore[0]).toBe(2);
        expect(game.holdFrameScore[1]).toBe(7);
      });
      it('calculates the score when the frame is over', function() {
        game.finishFrame(); // INPUTS REQUIRED FROM USER
        expect(game.checkTotalScore()).toBe(17);
        expect(game.checkFrameCount()).toBe(3);
        expect(game.checkFirstRoll()).toBe('TBC');
        expect(game.holdFrameScore.length).toBe(0);
      });
    });
  });

});

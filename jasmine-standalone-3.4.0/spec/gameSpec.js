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
      expect(game._frames[0][0]).toBe(5);
      expect(game._frames[0][1]).toBe(3);
    });
    it('calculates the score when the frame is over', function() {
      expect(game.checkTotalScore()).toBe(8);
      expect(game.checkFrameCount()).toBe(2);
      expect(game.checkFirstRoll()).toBe('TBC');
      expect(game.holdFrameScore.length).toBe(0);
    });
    describe('when inputting scores for 2nd frame', function() {
      beforeEach(function() {
        game.inputScore(2); // INPUTS REQUIRED FROM USER
        game.inputScore(7); // INPUTS REQUIRED FROM USER
      });
      it('notes a score for the first and second rolls', function() {
        expect(game._frames[1][0]).toBe(2);
        expect(game._frames[1][1]).toBe(7);
      });
      it('calculates the score when the frame is over', function() {
        expect(game.checkTotalScore()).toBe(17);
        expect(game.checkFrameCount()).toBe(3);
        expect(game.checkFirstRoll()).toBe('TBC');
        expect(game.holdFrameScore.length).toBe(0);
      });
    });
  });

  describe('spares', function() {
    beforeEach(function() {
      game.inputScore(5);
      game.inputScore(3); // THIS IS A NORMAL FRAME
      game.inputScore(3);
      game.inputScore(7); // THIS IS A SPARE
    });
    it('has a record of which frames where spares', function() {
      expect(game.spares).toContain(2);
    });
  });

  describe('spikes', function() {
    beforeEach(function() {
      game.inputScore(5);
      game.inputScore(3); // THIS IS A NORMAL FRAME 
      game.inputScore(10); // THIS IS A STRIKE
    });
    it('has a record of which frames where spares', function() {
      expect(game.strikes).toContain(2);
    });
  });

});

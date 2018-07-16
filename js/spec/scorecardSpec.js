'use strict';

describe('Scorecard', function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe('keeps track of user rolls', function() {
    it('stores roll 1 score in an array', function() {
      scorecard.enterScore(3);
      expect(scorecard.getFrame()[0]).toEqual(3);
    });
    beforeEach(function() {
      scorecard.enterScore(3);
      scorecard.enterScore(5);
    });
    it('stores roll 2 score in an array', function() {
      expect(scorecard.getBaseScores()[0][1]).toEqual(5);
    });
    it('sends turn score to an array once turn is finished', function() {
      expect(scorecard.getBaseScores()).toEqual([[3,5]])
    });
    it('resets frame at start of each turn', function() {
      expect(scorecard.getFrame()).toEqual([])
    });
  });

  describe('keeps track of turns and rolls', function() {
    it('starts game on turn 1', function() {
      expect(scorecard.getTurn()).toEqual(1);
    });
    it('starts game on roll 1', function() {
      expect(scorecard.getRoll()).toEqual(1);
    });
    it('ends turn after score is input in second roll', function() {
      scorecard.enterScore(3);
      scorecard.enterScore(5);
      expect(scorecard.getTurn()).toEqual(2);
    });
  });

  describe('keeps track of modified final scores', function() {
    it('contains modified scores in a seperate array from base scores', function() {
      scorecard.enterScore(3);
      scorecard.enterScore(5);
      expect(scorecard.getFinalScores()).toEqual([8]);
    });
  });

  describe('understands spares and strikes', function() {
    it('spare is set to false by default', function() {
      expect(scorecard._spareBonus).toEqual(false);
    });
    it('understands when a spare takes place', function() {
      scorecard.enterScore(3);
      scorecard.enterScore(7);
      expect(scorecard._spareBonus).toEqual(true);
    });
    it('modifies final scores based on spare bonus', function() {
      scorecard.enterScore(3);
      scorecard.enterScore(7);
      scorecard.enterScore(5);
      console.log(scorecard);
      expect(scorecard.getFinalScores()[0]).toEqual(15);
    });
  });
});

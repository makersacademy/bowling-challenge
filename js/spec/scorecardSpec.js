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
    beforeEach(function() {
      scorecard.enterScore(3);
      scorecard.enterScore(5);
    });
    it('contains modified scores in a seperate array from base scores', function() {
      expect(scorecard.getFinalScores()).toEqual([8]);
    });
    it('returns a total rolling score', function() {
      scorecard.enterScore(2);
      scorecard.enterScore(1);
      expect(scorecard.totalScore()).toEqual(11);
    });
  });

  describe('understands spares', function() {
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
      expect(scorecard.getFinalScores()[0]).toEqual(15);
    });
  });

  describe('understands strikes', function() {
    it('strike is set to false by default', function() {
      expect(scorecard._strikeBonus).toEqual(false);
    });
    it('understands when a strike takes place', function() {
      scorecard.enterScore(10);
      expect(scorecard._strikeBonus).toEqual(true);
    });
    it('modifies final scores based on strike bonus', function() {
      scorecard.enterScore(10);
      scorecard.enterScore(7);
      scorecard.enterScore(2);
      expect(scorecard.getFinalScores()[0]).toEqual(19);
    });
    it('modifies scores based on consecutive strikes', function() {
      scorecard.enterScore(10);
      scorecard.enterScore(10);
      expect(scorecard.getFinalScores()[0]).toEqual(20);
    });
    it('modifies scores based on triple strikes', function() {
      scorecard.enterScore(10);
      scorecard.enterScore(10);
      scorecard.enterScore(10);
      expect(scorecard.getFinalScores()[0]).toEqual(30);
    });
  });
});

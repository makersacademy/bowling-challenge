'use strict';

describe('Scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe('calculating two rolls of one frame.', function(){
    it('starts with an empty scorecard array', function() {
      expect(scorecard.currentGameScore()).toEqual([]);
    });

    it('starts with an empty currentframe array', function() {
      expect(scorecard.currentFrame).toEqual([]);
    });

    it('stores first roll in the rollOneScore', function() {
      scorecard.calculateCurrentRoll(3);
      expect(scorecard.rollOneScore).toEqual(3);
    });

    it('stores second roll in rollTwoscore if rollOne has been taken', function() {
      scorecard.calculateCurrentRoll(4);
      scorecard.calculateCurrentRoll(7);
      expect(scorecard.rollTwoScore).toEqual(7);
    });
  });
});

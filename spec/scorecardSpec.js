'use strict';

describe ('Scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe ('#roll', function() {
    it('rolling the ball adds knockedPins score to an array', function() {
      scorecard.roll(4);
      expect(scorecard.getPointsTracker()).toEqual([4]);
    });

    it('rolling the ball adds one count to currentRoll tracker', function() {
      scorecard.roll(4);
      scorecard.roll(5);
      expect(scorecard.getCurrentRoll()).toEqual(2);
    });

  });

  describe ('#isStrike', function() {
    it('returns false when the game starts', function() {
      expect(scorecard.isStrike()).toEqual(false);
    });

    it('returns true when the first roll scores 10', function () {
      scorecard.roll(10);
      expect(scorecard.isStrike()).toEqual(true);
    });

  });

  describe ('#isSpare', function() {
    it('returns false when the game starts', function() {
      expect(scorecard.isSpare()).toEqual(false);
    });

    it('returns true if total of the frame score is 10', function () {
      scorecard.roll(4);
      scorecard.roll(6);
      expect(scorecard.isSpare()).toEqual(true);
    });

  });

});

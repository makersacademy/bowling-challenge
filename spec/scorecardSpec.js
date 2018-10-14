'use strict';

describe ('Scorecard', function() {

  var scorecard;

  function playGame(rolls, knockedPins) {
    for (var i = 0; i < rolls; i++) {
    scorecard.roll(knockedPins);
  }
};

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

  });

  describe ('#strikeBonus', function() {
    it('calculates bonus points for scoring one strike in a game', function () {
      scorecard.roll(10);
      scorecard.roll(5);
      scorecard.roll(4);
      playGame(16, 0);
      expect(scorecard.totalScore()).toEqual(28);
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

  describe ('#totalScore', function() {
    it('calculates the total score of a game', function() {
      playGame(20, 4);
      expect(scorecard.totalScore()).toEqual(80);
    });

  });

});

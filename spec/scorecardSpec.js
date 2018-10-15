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

  });

  describe ('#spareBonus', function() {
    it('calculates bonus points for scoring one spare in a game', function () {
      scorecard.roll(5);
      scorecard.roll(5);
      scorecard.roll(3);
      playGame(17, 0);
      expect(scorecard.totalScore()).toEqual(16);
    });

  });

  describe ('#totalScore', function() {
    it('calculates the total score of a game', function() {
      playGame(20, 4);
      expect(scorecard.totalScore()).toEqual(80);
    });

    it('a perfect game scores 300 points', function() {
      playGame(20, 10);
      expect(scorecard.totalScore()).toEqual(300);
    });

    it('a gutter game scores 0 points', function() {
      playGame(20, 0);
      expect(scorecard.totalScore()).toEqual(0);
    });

  });

});

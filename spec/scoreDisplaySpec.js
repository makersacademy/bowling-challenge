'use strict';

describe('Score Display', function() {

  var scoreDisplay;

  it('returns the total score', function() {
    scoreDisplay = new ScoreDisplay(133);
    expect(scoreDisplay.getTotalScore()).toEqual(133);
  });

  it('resets the to zero', function() {
    scoreDisplay = new ScoreDisplay(125);
    scoreDisplay.reset();
    expect(scoreDisplay.totalScore).toEqual(0);
  });

  describe('Identifies a score as', function() {

    it('a gutter game', function() {
      scoreDisplay = new ScoreDisplay(0);
      expect(scoreDisplay.isGutterGame()).toEqual(true);
    });

    it('not a gutter game', function() {
      scoreDisplay = new ScoreDisplay(132);
      expect(scoreDisplay.isGutterGame()).toEqual(false);
    });

    it('a perfect scoring game', function() {
      scoreDisplay = new ScoreDisplay(300);
      expect(scoreDisplay.isPerfectGame()).toEqual(true);
    });

    it('not a perfect scoring game', function() {
      scoreDisplay = new ScoreDisplay(149);
      expect(scoreDisplay.isPerfectGame()).toEqual(false);
    });

  });




});

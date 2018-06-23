'use strict';

describe('Score Display', function() {

  var scoreDisplay;

  it('returns the total score', function() {
    scoreDisplay = new ScoreDisplay(133);
    expect(scoreDisplay.getTotalScore()).toEqual(133);
  });

  it('identifies a gutter game', function() {
    scoreDisplay = new ScoreDisplay(0);
    expect(scoreDisplay.isGutterGame()).toEqual(true);
  });

  it('identifies when the score is not a gutter game', function() {
    scoreDisplay = new ScoreDisplay(132);
    expect(scoreDisplay.isGutterGame()).toEqual(false);
  });

  it('identifies a perfect scoring game', function() {
    scoreDisplay = new ScoreDisplay(300);
    expect(scoreDisplay.isPerfectGame()).toEqual(true);
  });

  it('identifies when the score is not a perfect game', function() {
    scoreDisplay = new ScoreDisplay(149);
    expect(scoreDisplay.isPerfectGame()).toEqual(false);
  });

  it('resets the to zero', function() {
    scoreDisplay = new ScoreDisplay(125);
    scoreDisplay.reset();
    expect(scoreDisplay.totalScore).toEqual(0);
  });

});

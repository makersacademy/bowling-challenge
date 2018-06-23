'use strict';

describe('Score Display', function() {

  var scoreDisplay;

  it('returns the total score', function() {
    scoreDisplay = new ScoreDisplay(133);
    expect(scoreDisplay.getTotalScore()).toEqual(133);
  });

});

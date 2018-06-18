'use strict';

describe('Score Calculator', function() {

  var scoreCalculator;

  beforeEach(function() {
    scoreCalculator = new ScoreCalculator();
  });

  it('is intialised with a container for scores', function() {
    expect(scoreCalculator.scores).toEqual([]);
  });

  it('has a default score of zero', function() {
    expect(scoreCalculator.getScore()).toEqual(0);
  });

});

'use strict';

describe('Score Calculator', function() {

  var scoreCalculator;
  var scoreArgs;

  beforeEach(function() {
    scoreCalculator = new ScoreCalculator();
  });

  it('is intialised with a container for scores', function() {
    expect(scoreCalculator.scores).toEqual([]);
  });

  it('has a default score of zero', function() {
    expect(scoreCalculator.getScore()).toEqual(0);
  });

  it('accepts a list of scores and stores them in the scores array', function() {
    var scores = ([[10, 1], [2, 6], [4, 4], [2, 6], [1, 6], [2, 1], [2, 6], [4, 4], [1, 6], [3, 6], [0, 0]])
    console.log(scores.length);
    scoreCalculator.addScore(scores);
    expect(scoreCalculator.scores).toContain([10, 1], [2, 6], [4, 4], [2, 6], [1, 6], [2, 1], [2, 6], [4, 4], [1, 6], [3, 6], [0, 0]);
  });

});

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

  it('accepts a list of scores and stores them in the scores array', function() {
    var scores = ([[10, 0], [2, 6], [4, 4], [2, 6], [1, 6], [2, 1], [2, 6], [4, 4], [1, 6], [3, 6], [0, 0]])
    scoreCalculator.addScore(scores);
    expect(scoreCalculator.scores).toEqual([[10, 0], [2, 6], [4, 4], [2, 6], [1, 6], [2, 1], [2, 6], [4, 4], [1, 6], [3, 6], [0, 0]]);
  });

  it('calculates a total score for the game', function() {
    var scores = ([[1, 4], [4, 5], [6, 4], [5, 5], [10, 0], [0, 1], [7, 3], [6, 4], [10, 0], [2, 8], [6, 0]])
    scoreCalculator.addScore(scores);
    scoreCalculator.calculateScore();
    console.log(scoreCalculator.totalScore);
    expect(scoreCalculator.totalScore).toEqual(133);
  });

  // sort the iteration, it's only going through the first four numbers, it's not looping. So I do need to have a second loop.

});

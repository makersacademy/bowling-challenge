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

  it('clears the scores', function() {
    var scores = ([[8, 2], [9, 0], [4, 4], [7, 2], [9, 0], [10, 0], [10, 0], [8, 0], [3, 5], [9, 1], [7, 0]])
    scoreCalculator.addScore(scores);
    scoreCalculator.clearScore();
    expect(scoreCalculator.scores).toEqual([]);
  });

  it('accepts a list of scores and stores them in the scores array', function() {
    var scores = ([[10, 0], [2, 6], [4, 4], [2, 6], [1, 6], [2, 1], [2, 6], [4, 4], [1, 6], [3, 6], [0, 0]])
    scoreCalculator.addScore(scores);
    expect(scoreCalculator.scores).toEqual([[10, 0], [2, 6], [4, 4], [2, 6], [1, 6], [2, 1], [2, 6], [4, 4], [1, 6], [3, 6], [0, 0]]);
  });

  describe('Calculates the total score', function() {

    it('for a varied game', function() {
      var scores = ([[1, 4], [4, 5], [6, 4], [5, 5], [10, 0], [0, 1], [7, 3], [6, 4], [10, 0], [2, 8], [6, 0]])
      scoreCalculator.addScore(scores);
      scoreCalculator.calculateScore();
      expect(scoreCalculator.totalScore).toEqual(133);
    });

    it('for a perfect game', function() {
      var scores = ([[10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10]])
      scoreCalculator.addScore(scores);
      scoreCalculator.calculateScore();
      expect(scoreCalculator.totalScore).toEqual(300);
    });

    it('for a game with a range of spares', function() {
      var scores = ([[8, 0], [7, 0], [5, 3], [9, 1], [9, 1], [10, 0], [8, 0], [5, 1], [3, 7], [9, 0], [0, 0]])
      scoreCalculator.addScore(scores);
      scoreCalculator.calculateScore();
      expect(scoreCalculator.totalScore).toEqual(122);
    });

    it('for a game with a mix of spares and strikes', function() {
      var scores = ([[8, 2], [9, 0], [4, 4], [7, 2], [9, 0], [10, 0], [10, 0], [8, 0], [3, 5], [9, 1], [7, 0]])
      scoreCalculator.addScore(scores);
      scoreCalculator.calculateScore();
      expect(scoreCalculator.totalScore).toEqual(133);
    });

    it('for a gutter game', function() {
      var scores = ([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]])
      scoreCalculator.addScore(scores);
      scoreCalculator.calculateScore();
      expect(scoreCalculator.totalScore).toEqual(0);
    });
  });

});

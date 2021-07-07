'use strict';

describe("Score unit test: ", function() {
  var score;
  var game;

  beforeEach(function(){
    score = new Score();
    game = new Game();
  });

  it('A User Game score is stored', function() {
    score.storeRollScore(1);
    expect(score._rollScore).toEqual([1]);
  });

  it('A User can Roll 2 times and the calculated score 5 points', function() {
    score.storeScore(1);
    score.storeScore(4);
    expect(score.getScore()).toEqual(5);
  });

  it('gets the bonus', function() {
    score._bonus = [10];
    expect(score.getBonus()).toEqual([10]);
  });

  it('gets the score card', function() {
    score._rollScore = [5, 10];
    expect(score.getScoreCard()).toEqual([5, 10]);
  });
  
  it('resets the roll score and total score', function() {
    score._totalScore = [1];
    score._rollScore = [1];
    score.resetScore();
    expect(score._totalScore).toEqual([]);
    expect(score._rollScore).toEqual([]);
  });
});

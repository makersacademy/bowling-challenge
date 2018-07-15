'use strict';

describe("Calculate Score: ", function() {
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
    score.calculateScore(1);
    score.calculateScore(4);
    expect(score.getScore()).toEqual(5);
  });
});

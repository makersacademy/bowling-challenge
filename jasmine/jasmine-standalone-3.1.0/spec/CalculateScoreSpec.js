'use strict';

describe("Calculate Score: ", function() {
  var calc;
  var game;


  beforeEach(function(){
    calc = new CalculateScore();
    game = new Game();
  });

  it('A User Game score is stored', function() {
    calc.storeRollScore(1);
    expect(calc.rollScore).toEqual([1]);
  });

  it('A User can Roll 2 times and the calculated score 5 points', function() {
    calc.calculateScore(1);
    calc.calculateScore(4);
    expect(calc.getScore()).toEqual(5);
  });
});

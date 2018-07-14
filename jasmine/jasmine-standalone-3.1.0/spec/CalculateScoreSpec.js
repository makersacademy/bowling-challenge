'use strict';

describe("Calculate Score: ", function() {
  var calc;

  beforeEach(function(){
    calc = new CalculateScore();
  });

  it('A User can Roll 2 times and score 5 points', function() {
    calc.calculateScore(1);
    calc.calculateScore(4);
    expect(calc.getScore()).toEqual(5);
  });

  it('A User can Roll a Strike and score 10 points', function() {
    calc.calculateScore(10);
    expect(calc.getScore()).toEqual(10);
  });

});

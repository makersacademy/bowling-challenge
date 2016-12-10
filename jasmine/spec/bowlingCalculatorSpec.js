'use strict';

describe('bowlingCalculator', function(){

  var bowlingcalculator;

  beforeEach(function(){
    bowlingcalculator = new BowlingCalculator();
  });

  it("initializes with a total score set to zero", function(){
    expect(bowlingcalculator.totalScore).toEqual(0);
  });

});

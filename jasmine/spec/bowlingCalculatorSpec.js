'use strict';

describe('bowlingCalculator', function(){

  var bowlingcalculator;

  beforeEach(function(){
    bowlingcalculator = new BowlingCalculator();
  });

  it("should initialize with a total score set to zero", function(){
    expect(bowlingcalculator.totalScore).toEqual(0);
  });

  it("should be able to add to the total score", function(){
    bowlingcalculator.addToScore(3)
    expect(bowlingcalculator.totalScore).toEqual(3);
  });

});

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

  describe("edge cases", function() {

    it("should not accept negative numbers for scores", function(){
      expect(function(){bowlingcalculator.addToScore(-5)}).toThrowError("Invalid input: negative number.")
    });

    it("should not accept anything except numbers for scores", function(){
      expect(function(){bowlingcalculator.addToScore("not a number")}).toThrowError("Invalid input: not a number.")
    });

  });

});

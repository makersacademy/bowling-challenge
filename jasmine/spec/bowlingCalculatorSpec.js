'use strict';

describe('bowlingCalculator', function(){

  var bowlingcalculator;

  beforeEach(function(){
    bowlingcalculator = new BowlingCalculator();
  });

  describe("#new()", function(){

    it("should initialize with a total score set to zero", function(){
      expect(bowlingcalculator.totalScore).toEqual(0);
    });

    it("should initialize with an empty balls array", function() {
      expect(bowlingcalculator.balls).toEqual([]);
    });

  });

  describe("#addToScore(number)", function(){

    it("should be able to add to the total score", function(){
      bowlingcalculator.addToScore(3)
      expect(bowlingcalculator.totalScore).toEqual(3);
    });

  });

  describe("#throwBall(pins)", function(){

    it("should store balls you throw separately", function(){
      bowlingcalculator.throwBall(5);
      bowlingcalculator.throwBall(3);
      expect(bowlingcalculator.balls).toContain(5, 3);
    });

    it("should not accept negative numbers for balls thrown", function(){
      expect(function(){bowlingcalculator.throwBall(-5)}).toThrowError("Invalid input: negative number.")
    });

    it("should not accept anything except numbers for balls thrown", function(){
      expect(function(){bowlingcalculator.throwBall("not a number")}).toThrowError("Invalid input: not a number.")
    });

    it("should not accept numbers higher than 10", function(){
      expect(function(){bowlingcalculator.throwBall(11)}).toThrowError("Invalid input: max score per throw is 10")
    });

    // should decrease number of balls left to throw

  });

  describe("#endTurn()", function(){

    it("should add the balls array to the total score", function(){
      bowlingcalculator.throwBall(5);
      bowlingcalculator.throwBall(3);
      bowlingcalculator.endTurn();
      expect(bowlingcalculator.totalScore).toEqual(8);
    });

    it("should empty the balls array", function(){
      bowlingcalculator.throwBall(5);
      bowlingcalculator.throwBall(3);
      bowlingcalculator.endTurn();
      expect(bowlingcalculator.balls).toEqual([]);
    });

  });

});

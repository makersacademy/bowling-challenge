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

    it("should initialize with frames property set to 10", function(){
      expect(bowlingcalculator.frames).toEqual(10);
    });

    it("should initialize with throws property set to 2", function(){
      expect(bowlingcalculator.throws).toEqual(2)
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

    it("should not accept multiple balls with a combined value of over 10", function(){
      bowlingcalculator.throwBall(5);
      expect(function(){bowlingcalculator.throwBall(6)}).toThrowError("Invalid input: trying to score more than 10 pins")
    });

    it("should decrease throws by 1", function(){
      bowlingcalculator.throwBall(5);
      expect(bowlingcalculator.throws).toEqual(1);
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

    it("should reduce the number of frames left by 1", function(){
      bowlingcalculator.endTurn();
      expect(bowlingcalculator.frames).toEqual(9);
    });

  });

});

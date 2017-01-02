'use strict';

describe('BowlingCalculator', function(){

  var bowlingcalculator;

  beforeEach(function(){
    bowlingcalculator = new BowlingCalculator();
  });

  describe("#new()", function(){

    it("should initialize with an empty score array", function(){
      expect(bowlingcalculator.score).toEqual([]);
    })

    it("should initialize with an empty current balls array", function() {
      expect(bowlingcalculator.currentBalls).toEqual([]);
    });

    it("should initialize with an empty previous balls array", function(){
      expect(bowlingcalculator.previousBalls).toEqual([]);
    });

    it("should initialize with frames property set to 10", function(){
      expect(bowlingcalculator.frames).toEqual(10);
    });

    it("should initialize with throws property set to 2", function(){
      expect(bowlingcalculator.throws).toEqual(2);
    });

  });

  describe("#throwBall(pins)", function(){

    it("should store the balls you throw", function(){
      bowlingcalculator.throwBall(5);
      bowlingcalculator.throwBall(3);
      expect(bowlingcalculator.currentBalls).toContain(5, 3);
    })

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

    it("should set your throws to zero if you throw a strike", function(){
      bowlingcalculator.throwBall(10);
      expect(bowlingcalculator.throws).toEqual(0);
    });

    it("should raise an error if you try to throw a ball with 0 throws left", function(){
      bowlingcalculator.throwBall(8);
      bowlingcalculator.throwBall(2);
      expect(function(){bowlingcalculator.throwBall(1)}).toThrowError("No throws left.")
    });

    it("should raise an error if you try to throw a ball with no frames left", function(){
      bowlingcalculator.frames = 0;
      expect(function(){bowlingcalculator.throwBall(1)}).toThrowError("No frames left.")
    });

  });

  describe("#endTurn()", function(){

    it("should add the sum of the currentBalls array into the score array", function(){
      bowlingcalculator.throwBall(5);
      bowlingcalculator.throwBall(3);
      bowlingcalculator.endTurn();
      expect(bowlingcalculator.score).toContain(8);
    });

    it("should copy the currentBalls array into previousBalls", function(){
      bowlingcalculator.throwBall(5);
      bowlingcalculator.throwBall(3);
      bowlingcalculator.endTurn();
      expect(bowlingcalculator.previousBalls).toContain([5, 3]);
    });

    it("should empty the balls array", function(){
      bowlingcalculator.throwBall(5);
      bowlingcalculator.throwBall(3);
      bowlingcalculator.endTurn();
      expect(bowlingcalculator.currentBalls).toEqual([]);
    });

    it("should reduce the number of frames left by 1", function(){
      bowlingcalculator.endTurn();
      expect(bowlingcalculator.frames).toEqual(9);
    });

    it("should reset the number of throws back up to 2", function(){
      bowlingcalculator.throwBall(3);
      bowlingcalculator.throwBall(5)
      bowlingcalculator.endTurn();
      expect(bowlingcalculator.throws).toEqual(2);
    });

    it("should add this turn's score to last turn if you got a strike last turn", function(){
      bowlingcalculator.throwBall(10);
      bowlingcalculator.endTurn();
      bowlingcalculator.throwBall(3);
      bowlingcalculator.throwBall(5);
      bowlingcalculator.endTurn();
      expect(bowlingcalculator.totalScore()).toEqual(26);
    });

    it("should add your first ball to last turn's score if you got a spare last turn", function(){
      bowlingcalculator.throwBall(5);
      bowlingcalculator.throwBall(5);
      bowlingcalculator.endTurn();
      bowlingcalculator.throwBall(3);
      bowlingcalculator.throwBall(5);
      bowlingcalculator.endTurn();
      expect(bowlingcalculator.totalScore()).toEqual(21);
    });

  });

  describe("#totalScore()", function(){

    it("should return 0 at the start", function(){
      expect(bowlingcalculator.totalScore()).toEqual(0);
    });

    it("should return 8 if you throw a 3, then a 5, the end your turn", function(){
      bowlingcalculator.throwBall(3);
      bowlingcalculator.throwBall(5);
      bowlingcalculator.endTurn();
      expect(bowlingcalculator.totalScore()).toEqual(8);
    })

  });

  describe("#_isStrikeLastTurn()", function(){

    it("should return true if you got a strike last turn", function(){
      bowlingcalculator.throwBall(10);
      bowlingcalculator.endTurn();
      expect(bowlingcalculator._isStrikeLastTurn()).toBeTruthy();
    });

    it("should return false if you did not get a strike last turn", function(){
      bowlingcalculator.throwBall(3);
      bowlingcalculator.throwBall(5);
      bowlingcalculator.endTurn();
      expect(bowlingcalculator._isStrikeLastTurn()).toBeFalsy();
    });

  });

  describe("#_isSpareLastTurn()", function(){

    it("should return true if you got a spare last turn", function(){
      bowlingcalculator.throwBall(5);
      bowlingcalculator.throwBall(5);
      bowlingcalculator.endTurn();
      expect(bowlingcalculator._isSpareLastTurn()).toBeTruthy();
    });

    it("should return false if you didn't get a spare last turn", function(){
      bowlingcalculator.throwBall(5);
      bowlingcalculator.throwBall(1);
      bowlingcalculator.endTurn();
      expect(bowlingcalculator._isSpareLastTurn()).toBeFalsy();
    });

  });

});

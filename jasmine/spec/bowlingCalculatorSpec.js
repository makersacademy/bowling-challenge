'use strict';

describe('BowlingCalculator', function(){

  var bowlingcalculator;

  beforeEach(function(){
    bowlingcalculator = new BowlingCalculator();
  });

  describe("#new()", function(){

    it("should initialize with an empty score array", function(){
      expect(bowlingcalculator.currentTurn).toEqual([]);
    })

    it("should initialize with an empty current turn array", function() {
      expect(bowlingcalculator.currentTurn).toEqual([]);
    });

    it("should initialize with frames property set to 10", function(){
      expect(bowlingcalculator.frames).toEqual(10);
    });

    it("should initialize with throws property set to 2", function(){
      expect(bowlingcalculator.throws).toEqual(2);
    });

    it("should initialize with a bonus property set to null", function(){
      expect(bowlingcalculator.bonus).toEqual(null);
    });

  });

  describe("#throwBall(pins)", function(){

    it("should store the balls you throw", function(){
      bowlingcalculator.throwBall(5);
      bowlingcalculator.throwBall(3);
      expect(bowlingcalculator.currentTurn).toContain(5, 3);
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

    it("should set bonus to strike if you knock over 10 pins with the first throw", function(){
      bowlingcalculator.throwBall(10);
      expect(bowlingcalculator.currentTurn.bonus).toEqual('strike');
    })

    it("should set bonus to spare if you knock over 10 pins cumulatively", function(){
      bowlingcalculator.throwBall(8);
      bowlingcalculator.throwBall(2);
      expect(bowlingcalculator.currentTurn.bonus).toEqual('spare');
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

    it("should add the currentTurn array into the total score", function(){
      bowlingcalculator.throwBall(5);
      bowlingcalculator.throwBall(3);
      bowlingcalculator.endTurn();
      expect(bowlingcalculator.score).toContain([5,3]);
    });

    it("should empty the balls array", function(){
      bowlingcalculator.throwBall(5);
      bowlingcalculator.throwBall(3);
      bowlingcalculator.endTurn();
      expect(bowlingcalculator.currentTurn).toEqual([]);
    });

    it("should reduce the number of frames left by 1", function(){
      bowlingcalculator.endTurn();
      expect(bowlingcalculator.frames).toEqual(9);
    });

    xit("should give you bonus points if you got a strike last turn", function(){
      bowlingcalculator.throwBall(10);
      bowlingcalculator.endTurn();
      bowlingcalculator.throwBall(3);
      bowlingcalculator.throwBall(3);
      bowlingcalculator.endTurn();
      expect(bowlingcalculator.totalScore).toEqual(22);
    })

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

});

'use strict';

describe('Bowling', function() {
  var bowling;
  beforeEach(() => {
    bowling = new Bowling();
  });


  describe('#intializes with array', function() {
    it("creates array for scorecard", function() {
      
      expect(bowling._scorecard).toBeDefined();
    });
  });


  describe('#saving turns in scorecard array', function() {
    it("saves turn input into in turn array which is then saved in scorecard array", function() {
      bowling.addTurn([3, 4])
      bowling.addTurn([5, 2])
      bowling.addTurn([1, 4])
      expect(bowling._scorecard).toEqual([[3, 4], [5, 2], [1, 4]]);
    });
  });

  describe('#counts round number', function() {
    it("saves count number", function() {
      bowling.addTurn([3, 4])
      bowling.addTurn([3, 4])
      expect(bowling._count).toEqual(3);
    });
  });

  describe('#counts 0 for 20 0 rolls', function() {
    it("totals bowling score", function() {
      
      bowling.addTurn([0, 0])
      bowling.addTurn([0, 0])
      bowling.addTurn([0, 0])
      bowling.addTurn([0, 0])
      bowling.addTurn([0, 0])
      bowling.addTurn([0, 0])
      bowling.addTurn([0, 0])
      bowling.addTurn([0, 0])
      bowling.addTurn([0, 0])
      bowling.addTurn([0, 0, 0])
      // bowling.scoreCalculatorPins(bowling._scorecard[0])
      bowling.scoreTotaller(bowling._scorecard)
      expect(bowling._score).toEqual(0);
    });
  });

  describe('#counts score for array of ten arrays', function() {
    it("totals bowling score", function() {
      
      bowling.addTurn([3, 4])
      bowling.addTurn([3, 4])
      bowling.addTurn([3, 4])
      bowling.addTurn([3, 4])
      bowling.addTurn([3, 4])
      bowling.addTurn([3, 4])
      bowling.addTurn([3, 4])
      bowling.addTurn([3, 4])
      bowling.addTurn([3, 4])
      bowling.addTurn([3, 4, 0])
      // bowling.scoreCalculatorPins(bowling._scorecard[0])
      bowling.scoreTotaller(bowling._scorecard)
      expect(bowling._score).toEqual(70);
    });
  });


  describe('#counts score for array of ten arrays', function() {
    it("totals bowling score", function() {
      
      bowling.addTurn([6, 4])
      bowling.addTurn([6, 4])
      bowling.addTurn([6, 4])
      bowling.addTurn([6, 4])
      bowling.addTurn([3, 4])
      bowling.addTurn([3, 4])
      bowling.addTurn([3, 4])
      bowling.addTurn([3, 4])
      bowling.addTurn([3, 7])
      bowling.addTurn([6, 4, 6])
      // bowling.scoreCalculatorPins(bowling._scorecard[0])
      bowling.scoreTotaller(bowling._scorecard)
      expect(bowling._score).toEqual(121);
    });
  });

  describe('#counts score for array of ten arrays', function() {
    it("totals bowling score", function() {
      
      bowling.addTurn([4, 4])
      bowling.addTurn([3, 4])
      bowling.addTurn([10, 0])
      bowling.addTurn([10, 0])
      bowling.addTurn([3, 7])
      bowling.addTurn([3, 4])
      bowling.addTurn([3, 4])
      bowling.addTurn([6, 2])
      bowling.addTurn([8, 2])
      bowling.addTurn([10, 4, 6])
      // bowling.scoreCalculatorPins(bowling._scorecard[0])
      bowling.scoreTotaller(bowling._scorecard)
      expect(bowling._score).toEqual(133);
    });
  });

  describe('#counts 300 score for perfect game', function() {
    it("totals bowling score correctly", function() {
      
      bowling.addTurn([10, 0])
      bowling.addTurn([10, 0])
      bowling.addTurn([10, 0])
      bowling.addTurn([10, 0])
      bowling.addTurn([10, 0])
      bowling.addTurn([10, 0])
      bowling.addTurn([10, 0])
      bowling.addTurn([10, 0])
      bowling.addTurn([10, 0])
      bowling.addTurn([10, 10, 10])
      // bowling.scoreCalculatorPins(bowling._scorecard[0])
      bowling.scoreTotaller(bowling._scorecard)
      expect(bowling._score).toEqual(300);
    });
  });

  describe('#restarts game', function() {
    it("resets to resemble new instance of bowling game", function() {
      var bowling2 = new Bowling();
      bowling.addTurn([3, 4])
      bowling.reset()
      expect(bowling).toEqual(bowling2)
  });
});
// #     it("has power-saving mode on by default", () => {
// #         expect(thermostat._powersaving).toBe("ON");
// #     });  
// #   });

// #     describe('#up', function() {

// #         it("the temperature can be increased incrementally", function() {
// #           // var thermostat = new Thermostat()
// #           thermostat.up()
// #           expect(thermostat.temperature).toBe(21)
// #         });

// #         it("can not exceed temp to 26 degree in power-saving mode", () => {
// #           thermostat.temperature = 25;
// #           thermostat.up();
// #           expect(thermostat.temperature).toBe(25);
// #         });

// #         it("can not exceed 32 degrees in normal mode", () => {
// #           thermostat._powersaving = false
// #           thermostat.temperature = 32
// #           thermostat.up();
// #           expect(thermostat.temperature).toBe(32);
// #         });


    });
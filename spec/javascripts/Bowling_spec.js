'use strict';

describe('Bowling', function() {
  var bowling;
  beforeEach(() => {
    bowling = new Bowling();
  });


  describe('#intializes with array', function() {
    it("creates array for scorecard", function() {
      var bowling = new Bowling()
      expect(bowling._scorecard).toBeDefined();
    });
  });

  describe('#saves turn', function() {
    it("saves string in turn array", function() {
      var bowling = new Bowling()
      bowling.turn("3", "4")
      expect(bowling._turn).toEqual(["3", "4"]);
    });
  });

  describe('#resets turn array when score added to scorecard', function() {
    it("saves string in turn array", function() {
      var bowling = new Bowling()
      bowling.turn("3", "4")
      bowling.addTurn(bowling._turn)
      expect(bowling._turn).toEqual([]);
    });
  });

  describe('#saving turns in scorecard array', function() {
    it("saves turn input into in turn array which is then saved in scorecard array", function() {
      var bowling = new Bowling()
      bowling.turn("3", "4")
      bowling.addTurn(bowling._turn)
      bowling.turn("5", "2")
      bowling.addTurn(bowling._turn)
      bowling.turn("1", "4")
      bowling.addTurn(bowling._turn)
      expect(bowling._scorecard).toEqual([["3", "4"], ["5", "2"], ["1", "4"] ]);
    });
  });

  describe('#counts round number', function() {
    it("saves count number", function() {
      var bowling = new Bowling()
      bowling.turn("3", "4")
      bowling.addTurn(bowling._turn)
      bowling.turn("3", "4")
      bowling.addTurn(bowling._turn)
      expect(bowling._count).toEqual(3);
    });
  });


  describe('#counts score for turn excluding spare and strike', function() {
    it("adds number to score array", function() {
      var bowling = new Bowling()
      bowling.turn("3", "4")
      bowling.addTurn(bowling._turn)
      bowling.scoreCalculatorPins(bowling._scorecard[0])
      expect(bowling._scores).toEqual([7]);
    });
  });

  describe('#counts score for multiple turns excluding spare and strike', function() {
    it("adds numbers to score array", function() {
      var bowling = new Bowling()
      bowling.turn("3", "4")
      bowling.addTurn(bowling._turn)
      bowling.scoreCalculatorPins(bowling._scorecard[bowling._count - 2])
      bowling.turn("3", "5")
      bowling.addTurn(bowling._turn)
      bowling.scoreCalculatorPins(bowling._scorecard[bowling._count - 2])
      expect(bowling._scores).toEqual([7, 8]);
    });
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


// #       });
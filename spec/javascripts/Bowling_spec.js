'use strict';

describe('Bowling', function() {
  var bowling;
  beforeEach(() => {
    bowling = new Bowling();
  });


  describe('#intializes with array', function() {
    it("creates array", function() {
      var bowling = new Bowling()
      expect(bowling._round).toBeDefined();
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
      bowling.addturn(bowling._turn)
      expect(bowling._turn).toEqual([]);
    });
  });

  describe('#saving turns in round array', function() {
    it("saves string in turn array which is saved in round array", function() {
      var bowling = new Bowling()
      bowling.turn("3", "4")
      bowling.addturn(bowling._turn)
      bowling.turn("5", "2")
      bowling.addturn(bowling._turn)
      bowling.turn("1", "4")
      bowling.addturn(bowling._turn)
      expect(bowling._round).toEqual([["3", "4"], ["5", "2"], ["1", "4"] ]);
    });
  });

  describe('#counts round number', function() {
    it("saves count number", function() {
      var bowling = new Bowling()
      bowling.turn("3", "4")
      bowling.addturn(bowling._turn)
      bowling.turn("3", "4")
      bowling.addturn(bowling._turn)
      expect(bowling._count).toEqual(3);
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
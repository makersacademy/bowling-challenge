'use strict';

describe("Roll", function(){

  var roll;
  var firstRoll;

  describe("first roll", function(){

    it("cannot be a spare on first roll", function(){
      roll = new Roll();
      expect(roll.isSpare()).toEqual(false);
    });

    describe("no pins fall", function(){
      beforeEach(function(){
        spyOn(Math, 'random').and.returnValue(0);
        roll = new Roll();
      });

      it("first roll returns 10 pins", function(){
        expect(roll.numStandingPins()).toEqual(10);
        // expect(roll.numStandingPins() <= numStandingPins).toBeTruthy();
      });

      it("is not a strike", function(){
        expect(roll.isStrike()).toEqual(false);
      });
    });

    describe("all pins fall", function(){
      beforeEach(function(){
        spyOn(Math, 'random').and.returnValue(0.99);
        roll = new Roll();
      });

      it("first roll returns 0 pins", function(){
        expect(roll.numStandingPins()).toEqual(0);
        // expect(roll.numStandingPins() <= numStandingPins).toBeTruthy();
      });

      it("is a strike", function(){
        expect(roll.isStrike()).toEqual(true);
      });
    });

    describe("5 pins fall", function(){
      beforeEach(function(){
        spyOn(Math, 'random').and.returnValue(0.5);
        roll = new Roll();
      });

      it("first roll returns 5 pins", function(){
        expect(roll.numStandingPins()).toEqual(5);
        // expect(roll.numStandingPins() <= numStandingPins).toBeTruthy();
      });

      it("is not a strike", function(){
        expect(roll.isStrike()).toEqual(false);
      });
    });

  });

  describe("second roll", function(){
    beforeEach(function(){
      firstRoll  = {
        numStandingPins: function() {
          return 5;
        },
        isSpare: function() {
          return false;
        },
        isStrike: function() {
          return false;
        }
      };
    });

    describe("no pins fall", function(){
      beforeEach(function(){
        spyOn(Math, 'random').and.returnValue(0);
        roll = new Roll(firstRoll);
      });

      it("same number of pins as in first roll", function(){
        expect(roll.numStandingPins()).toEqual(firstRoll.numStandingPins());
        // expect(roll.numStandingPins() <= numStandingPins).toBeTruthy();
      });

      it("is not a strike", function(){
        expect(roll.isStrike()).toEqual(false);
      });

      it("is not a spare", function(){
        expect(roll.isStrike()).toEqual(false);
      });
    });

    describe("all remaining pins fall", function(){
      beforeEach(function(){
        spyOn(Math, 'random').and.returnValue(0.99);
        roll = new Roll(firstRoll);
      });

      it("standing pins = 0", function(){
        expect(roll.numStandingPins()).toEqual(0);
        // expect(roll.numStandingPins() <= numStandingPins).toBeTruthy();
      });

      it("is not a strike", function(){
        expect(roll.isStrike()).toEqual(false);
      });

      it("is a spare", function(){
        expect(roll.isStrike()).toEqual(true);
      });
    });
  });
});

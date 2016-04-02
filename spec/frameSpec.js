'use strict';

describe("Frame", function(){

  var frame;
  var roll;
  var firstRoll, secondRoll;

  describe("default", function(){

    beforeEach(function(){
      roll  = {
        numStandingPins: function() {
          return 5;
        },
        numFelledPins: function() {
          return 5;
        },
        isSpare: function() {
          return false;
        },
        isStrike: function() {
          return false;
        }
      };

      spyOn(Roll, "createInstance").and.returnValue(roll);
      frame = new Frame(Roll);
    });

    it("has a zero score", function(){
      expect(frame.getScore()).toEqual(0);
    });

    it("has no rolls", function(){
      expect(frame.getRolls()).toEqual([]);
    });

    it("can create rolls", function(){
      expect(frame.createRoll()).toEqual(roll);
    });
  });

  describe("first roll is a strike", function(){
    beforeEach(function(){
      firstRoll  = {
        numStandingPins: function() {
          return 0;
        },
        numFelledPins: function() {
          return 10;
        },
        isSpare: function() {
          return false;
        },
        isStrike: function() {
          return true;
        }
      };

      spyOn(Roll, "createInstance").and.returnValue(firstRoll);
      frame = new Frame(Roll);
      frame.roll();
    });

    it("#isStrike", function(){
      expect(frame.isStrike()).toEqual(true);
    });

    it("#isSpare", function(){
      expect(frame.isSpare()).toEqual(false);
    });

    it("#isComplete", function(){
      expect(frame.isComplete()).toEqual(true);
    });

    it("score = 10", function(){
      expect(frame.getScore()).toEqual(10);
    });
  });

  describe("first roll is not a strike, second is a spare", function(){

    beforeEach(function(){
      firstRoll  = {
        numStandingPins: function() {
          return 10;
        },
        numFelledPins: function() {
          return 0;
        },
        isSpare: function() {
          return false;
        },
        isStrike: function() {
          return false;
        },
        id: 'roll 1'
      };
      secondRoll  = {
        numStandingPins: function() {
          return 0;
        },
        numFelledPins: function() {
          return 10;
        },
        isSpare: function() {
          return true;
        },
        isStrike: function() {
          return false;
        },
        id: 'roll 2'
    };

      spyOn(Roll, "createInstance").and.returnValues(firstRoll, secondRoll);

      frame = new Frame(Roll);
      frame.roll();
      frame.roll();
    });

    it("#isStrike", function(){
      expect(frame.isStrike()).toEqual(false);
    });

    it("#isSpare", function(){
      expect(frame.isSpare()).toEqual(true);
    });

    it("#isComplete", function(){
      expect(frame.isComplete()).toEqual(true);
    });

    it("score = 10", function(){
      expect(frame.getScore()).toEqual(10);
    });
  });
});

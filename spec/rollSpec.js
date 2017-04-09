'use strict';

describe("Roll", function(){

  var roll;
  var firstRoll;

  describe("first roll", function(){


    it("cannot be a spare", function(){
      roll =  Roll.createInstance();
      expect(roll.isSpare()).toEqual(false);
    });

    describe("no pins fall", function(){
      beforeEach(function(){
        spyOn(Math, 'random').and.returnValue(0);
        roll =  Roll.createInstance();
      });

      it("numStandingPins returns 10", function(){
        expect(roll.numStandingPins()).toEqual(10);
        // expect(roll.numStandingPins() <= numStandingPins).toBeTruthy();
      });

      it("numFelledPins returns 0", function(){
        expect(roll.numFelledPins()).toEqual(0);
        // expect(roll.numStandingPins() <= numStandingPins).toBeTruthy();
      });

      it("is not a strike", function(){
        expect(roll.isStrike()).toEqual(false);
      });
    });

    describe("all pins fall", function(){
      beforeEach(function(){
        spyOn(Math, 'random').and.returnValue(0.99);
        roll =  Roll.createInstance();
      });

      it("numStandingPins returns 0", function(){
        expect(roll.numStandingPins()).toEqual(0);
        // expect(roll.numStandingPins() <= numStandingPins).toBeTruthy();
      });

      it("numFelledPins returns 10", function(){
        expect(roll.numFelledPins()).toEqual(10);
        // expect(roll.numStandingPins() <= numStandingPins).toBeTruthy();
      });

      it("is a strike", function(){
        expect(roll.isStrike()).toEqual(true);
      });
    });

    describe("5 pins fall", function(){
      beforeEach(function(){
        spyOn(Math, 'random').and.returnValue(0.5);
        roll =  Roll.createInstance();
      });

      it("numStandingPins returns 5 pins", function(){
        expect(roll.numStandingPins()).toEqual(5);
        // expect(roll.numStandingPins() <= numStandingPins).toBeTruthy();
      });

      it("is not a strike", function(){
        expect(roll.isStrike()).toEqual(false);
      });
    });

  });

//   describe("5 pins fell on first roll - second roll", function(){
//     beforeEach(function(){
//       firstRoll  = {
//         numStandingPins: function() {
//           return 5;
//         },
//         isSpare: function() {
//           return false;
//         },
//         isStrike: function() {
//           return false;
//         }
//       };
//     });
//
//     it("cannot be a strike", function(){
//       roll =  Roll.createInstance(firstRoll);
//       expect(roll.isStrike()).toEqual(false);
//     });
//
//     describe("no pins fall", function(){
//       beforeEach(function(){
//         spyOn(Math, 'random').and.returnValue(0);
//         roll =  Roll.createInstance(firstRoll);
//       });
//
//       it("same number of pins as in first roll", function(){
//         expect(roll.numStandingPins()).toEqual(firstRoll.numStandingPins());
//         // expect(roll.numStandingPins() <= numStandingPins).toBeTruthy();
//       });
//
//       it("is not a spare", function(){
//         expect(roll.isSpare()).toEqual(false);
//       });
//     });
//
//     describe("all remaining pins fall", function(){
//       beforeEach(function(){
//         spyOn(Math, 'random').and.returnValue(0.99);
//         roll =  Roll.createInstance(firstRoll);
//       });
//
//       it("standing pins = 0", function(){
//         expect(roll.numStandingPins()).toEqual(0);
//         // expect(roll.numStandingPins() <= numStandingPins).toBeTruthy();
//       });
//
//       it("is a spare", function(){
//         expect(roll.isSpare()).toEqual(true);
//       });
//     });
//
//     describe("3 pins fall", function(){
//       beforeEach(function(){
//         spyOn(Math, 'random').and.returnValue(0.5);
//         roll = Roll.createInstance(firstRoll);
//       });
//
//       it("numStandingPins returns 2 pins", function(){
//         expect(roll.numStandingPins()).toEqual(2);
//         // expect(roll.numStandingPins() <= numStandingPins).toBeTruthy();
//       });
//
//       it("is not a strike", function(){
//         expect(roll.isStrike()).toEqual(false);
//       });
//     });
//   });
});

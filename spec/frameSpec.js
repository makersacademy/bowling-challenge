'use strict';

describe("Frame", function(){

  var frame;

  var rollPointer = 0;
  var rollArray = [];
  var firstRoll  = {
    numStandingPins:  function() { return 5; },
    numFelledPins:    function() { return 5; },
    isSpare:          function() { return false; },
    isStrike:         function() { return false; }
  };

  var crapRoll  = {
    numStandingPins:  function() { return 10; },
    numFelledPins:    function() { return 0; },
    isSpare:          function() { return false; },
    isStrike:         function() { return false; }
  };

  var spareRoll = {
    numStandingPins:  function() { return 0; },
    numFelledPins:    function() { return 10; },
    isSpare:          function() { return true; },
    isStrike:         function() { return false; }
  };

  var strikeRoll = {
    numStandingPins:  function() { return 0; },
    numFelledPins:    function() { return 10; },
    isSpare:          function() { return false; },
    isStrike:         function() { return true; }
  };





  describe("by default:", function(){

    beforeEach(function(){

      // spyOn(Roll, "createInstance").and.returnValue(firstRoll);
      frame =  Frame.createInstance(rollArray,rollPointer);
    });

    it("has a zero score", function(){
      expect(frame.getTotal(rollArray)).toEqual(0);
    });

    it("has a roll pointer", function(){
      expect(frame.rollPointer()).toEqual(rollPointer);
    });

    it("is not a strike", function(){
      expect(frame.isStrike()).toEqual(false);
    });

    it("is not a spare", function(){
      expect(frame.isSpare()).toEqual(false);
    });

    it("is not complete", function(){
      expect(frame.isComplete()).toEqual(false);
    });
  });

  describe("first roll is a strike", function(){
    beforeEach(function(){
      rollArray = [strikeRoll];
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
      expect(frame.getTotal()).toEqual(10);
    });
  });

  describe("first roll is not a strike, second is a spare", function(){
    beforeEach(function(){
      spyOn(Roll, "createInstance").and.returnValues(crapRoll, spareRoll);
      frame =  Frame.createInstance(Roll);
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
      expect(frame.getTotal()).toEqual(10);
    });
  });

  // describe("calculates bonuses from subsequent frames:", function(){
  //   describe("strike", function(){
  //     beforeEach(function(){
  //       spyOn(Roll, "createInstance").and.returnValue(strikeRoll);
  //       frame =  Frame.createInstance(Roll);
  //       frame.roll();
  //     });
  //
  //     it(" followed by two strikes: score = 30", function(){
  //       frame.pushNextFrame(strikeFrame);
  //       frame.pushNextFrame(strikeFrame);
  //       expect(frame.getTotal()).toEqual(30);
  //     });
  //
  //     it(" followed by strike followed by non-strike: score = 23", function(){
  //       frame.pushNextFrame(strikeFrame);
  //       frame.pushNextFrame(averageFrame);
  //       expect(frame.getTotal()).toEqual(23);
  //     });
  //
  //     it(" followed by non-strike: score = 15", function(){
  //       frame.pushNextFrame(averageFrame);
  //       expect(frame.getTotal()).toEqual(15);
  //     });
  //   });
  //
  //   describe("spare", function(){
  //     beforeEach(function(){
  //       spyOn(Roll, "createInstance").and.returnValues(crapRoll, spareRoll);
  //       frame =  Frame.createInstance(Roll);
  //       frame.roll();
  //       frame.roll();
  //     });
  //     it("followed by strike: score = 20", function(){
  //       frame.pushNextFrame(strikeFrame);
  //       expect(frame.getTotal()).toEqual(20);
  //     });
  //
  //     it("followed by non-strike: score = 13", function(){
  //       frame.pushNextFrame(averageFrame);
  //       expect(frame.getTotal()).toEqual(13);
  //     });
  //   });
  // });
});

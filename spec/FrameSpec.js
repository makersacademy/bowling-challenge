'use strict';

describe("Frame", function() {
  var frame;

  beforeEach(function() {
    var knockedPins = 5
    frame = new Frame(knockedPins)
  });


  describe("- keeping track of the rolls", function() {    
    it("should keep track of how many rolls have been made", function() {
      expect(frame.rollNumber).toEqual(0)
    });

    it("should add new frame's knocked down pins to the first roll", function() {
      expect(frame.rollOne).toEqual(5)
    });

    it("should be able to hold the second roll's score", function() {
      expect(frame.rollTwo).toEqual(0)
    });

    it("should be able to hold the total score for both rolls", function() {
      expect(frame.totalScore).toEqual(0)
    });
  });

  describe("- keeping track of a Strike", function() {
    it("should mark frame as a Strike if KnockedPins is 10", function() {
      frame.checkStrike(10)
      expect(frame.isStrike).toEqual(true)
    });

    it("should mark rollNumber as 2 if rolled a strike in first roll of frame", function() {
      frame.checkStrike(10)
      expect(frame.rollNumber).toEqual(2)
    });
  });

  describe("- keeping track of a Spare", function() {
    it("should mark frame as a Spare if both rolls equal 10", function() {
      frame.rollOne = 5
      frame.rollTwo = 5
      frame.checkSpare(5)
      expect(frame.isSpare).toEqual(true)
    });
  });

  describe("ten", function() {
    it("should be able to hold a third roll", function() {
      expect(frame.rollThree).toEqual(0)
    });

    describe("- the first roll", function() {
      it("should mark the first roll as strike if 10 pins were knocked", function() {
        frame.rollNumber = 0
        frame.tenthFrame(10)
        expect(frame.isStrike).toEqual(true)
      });

      it("should mark rollNumber as 1 after first roll", function() {
        frame.rollNumber = 0
        frame.tenthFrame(5)
        expect(frame.rollNumber).toEqual(1)
      });
    });

    describe("- the second roll", function() {
      it("should mark roll number as 2", function() {
        frame.rollNumber = 1
        frame.tenthFrame(5)
        expect(frame.rollNumber).toEqual(2)
      });

      it("should mark frame as spare if roll one and two equals 10", function() {
        frame.rollNumber = 1
        frame.rollOne = 5
        frame.tenthFrame(5)
        expect(frame.isSpare).toEqual(true)
      });

      it("should end game if the last two rolls are not a spare or strike", function() {
        frame.rollNumber = 1
        frame.rollOne = 5
        expect(frame.tenthFrame(4)).toEqual("Game has ended")
      });
    });

    describe("- third roll", function() {
      it("should mark roll number as 3", function() {
        frame.tenthFrame(10)
        frame.tenthFrame(9)
        expect(frame.rollNumber).toEqual(3)
      });

      it("should end game after third roll", function() {
        frame.tenthFrame(10)
        expect(frame.tenthFrame(9)).toEqual("Game has ended")
      });
    });
  });

});

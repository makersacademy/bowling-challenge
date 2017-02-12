'use strict';

describe("Frame", function() {
  var frame;

  beforeEach(function() {
    var knockedPins = 5
    frame = new Frame(knockedPins)
  });


  describe("- keeping track of the bowls", function() {
    it("should keep track of how many bowls have been made", function() {
      expect(frame.bowlNumber).toEqual(0)
    });

    it("should add the knocked down pins of the new frame to the first bowl", function() {
      expect(frame.bowlOne).toEqual(5)
    });

    it("should be able to hold the second bowls score", function() {
      expect(frame.bowlTwo).toEqual(0)
    });

    it("should be able to hold the total score for both bowls", function() {
      expect(frame.totalScore).toEqual(0)
    });
  });

  describe("- keeping track of a strike", function() {
    it("should mark frame as a strike if knockedPins is 10", function() {
      frame.checkStrike(10)
      expect(frame.isStrike).toEqual(true)
    });

    it("should mark bowlNumber as 2 if a strike is bowled in first bowl of frame", function() {
      frame.checkStrike(10)
      expect(frame.bowlNumber).toEqual(2)
    });
  });

  describe("- keeping track of a spare", function() {
    it("should mark frame as a spare if both bowls equal 10", function() {
      frame.bowlOne = 5
      frame.bowlTwo = 5
      frame.checkSpare(5)
      expect(frame.isSpare).toEqual(true)
    });
  });

  describe("ten", function() {

  // });

    describe("- the first bowl", function() {
      it("should mark the first bowl as a strike if 10 pins are knocked down", function() {
        frame.bowlNumber = 0
        frame.tenthFrame(10)
        expect(frame.isStrike).toEqual(true)
      });

      it("should mark bowlNumber as 1 after first bowl", function() {
        frame.bowlNumber = 0
        frame.tenthFrame(5)
        expect(frame.bowlNumber).toEqual(1)
      });
    });

    describe("- the second bowl", function() {
      it("should mark bowl number as 2", function() {
        frame.bowlNumber = 1
        frame.tenthFrame(5)
        expect(frame.bowlNumber).toEqual(2)
      });

      it("should mark frame as spare if bowl one and two sum to 10", function() {
        frame.bowlNumber = 1
        frame.bowlOne = 5
        frame.tenthFrame(5)
        expect(frame.isSpare).toEqual(true)
      });

      it("should end game if the last to bowls are not a spare or strike", function() {
        frame.bowlNumber = 1
        frame.bowlOne = 5
        expect(frame.tenthFrame(4)).toEqual("Game Over")
      });
    });
  });
});

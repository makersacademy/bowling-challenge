'use strict';

describe("Frame", function() {
  var frame;

  beforeEach(function() {
    var knockedPins = 5
    frame = new Frame(knockedPins)
  });

  it("should keep track of how many rolls have been made", function() {
    expect(frame.rollNumber).toEqual(0)
  });

  describe("keeping track of the rolls", function() {
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

  describe("keeping track of a Strike", function() {
    it("should mark frame as a Strike if KnockedPins is 10", function() {
      frame.checkStrike(10)
      expect(frame.isStrike).toEqual(true)
    });

    it("should mark rollNumber as 2 if rolled a strike in first roll of frame", function() {
      frame.checkStrike(10)
      expect(frame.rollNumber).toEqual(2)
    });
  });

  describe("keeping track of a Spare", function() {
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
  });

});

'use strict';

describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  })

  describe("bowl", function() {
    it("should add the score bowled to the frame's score", function() {
      frame.bowl(6);
      expect(frame.score).toEqual(6);
    })
    it("increases the roll number by one on each roll", function() {
      frame.bowl(3)
      expect(frame.rollNumber).toEqual(2)
    })
  })

  describe("final frame", function() {
    it("should be set to the final frame when new Frame is passed true", function() {
      var finalFrame = new Frame(true)
      expect(finalFrame.isFinalFrame).toEqual(true)
    })
  })
})
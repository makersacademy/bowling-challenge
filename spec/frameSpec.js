'use strict';

describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  })

  describe ("roll the ball", function() {
    it("rolls the ball twice in a frame with less than 10 pins down ", function() {
      spyOn(Math, "floor").and.returnValue(4);
      for (var i = 0; i < 2; i++) { frame.roll(); }
      expect(frame.frameContent).toEqual([4, 4]);
    });

    it("finishes the frame if the first roll is a strike", function() {
      spyOn(Math, "floor").and.returnValue(10);
      frame.roll();
      expect(frame.isFrameOver()).toEqual(true);
    });
  });

  describe ("roll number is accessible", function() {
    it("returns one after the first roll in the frame", function() {
      spyOn(Math, "floor").and.returnValue(4);
      frame.roll();
      expect(frame.getRollNumber()).toEqual(1);
    })

    it ("returns two after the second roll in the frame", function() {
      spyOn(Math, "floor").and.returnValue(4);
      frame.roll();
      frame.roll();
      expect(frame.getRollNumber()).toEqual(2);
    })

    it ("returns three after the bonus roll in the last frame", function() {
      spyOn(Math, "floor").and.returnValue(5);
      frame.setFrameNumber(10);
      for (var i = 0; i < 3; i++) { frame.roll() }
      expect(frame.getRollNumber()).toEqual(3);
    })
  })

  describe("handle the 10th frame", function() {
    it("lets user rolls 3 times in the 10th frame", function() {
      spyOn(Math, "floor").and.returnValue(5);
      frame.setFrameNumber(10);
      for (var i = 0; i < 3; i++) { frame.roll(); };
      expect(frame.isFrameOver()).toEqual(true);
    })
  });
})

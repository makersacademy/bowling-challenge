'use strict';

describe("Frame", function() {

  var frame;
  var lastFrame;

  beforeEach(function() {
    frame = new Frame(1);
    lastFrame = new Frame(10);
  })

  describe ("roll the ball", function() {
    it("rolls the ball twice in a frame with less than 10 pins down ", function() {
      spyOn(Math, "floor").and.returnValue(4);
      frame.roll();
      frame.roll();
      expect(frame.frameContent).toEqual([4, 4]);
    });

    it("finishes the frame if the first roll is a strike", function() {
      spyOn(Math, "floor").and.returnValue(10);
      frame.roll();
      expect(frame.isFrameOver()).toEqual(true);
    });
  });

  describe("handle the 10th frame", function() {
    it("lets user rolls 3 times in the 10th frame", function() {
      spyOn(Math, "floor").and.returnValue(5);
      for (var i = 0; i < 3; i++) {
        lastFrame.roll();
      };
      expect(lastFrame.isFrameOver()).toEqual(true);
    })
  });
})

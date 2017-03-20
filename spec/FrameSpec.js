'use strict';

describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe("calculates scores", function() {
    it("can put the score after a roll into the roll array", function() {
      frame.roll(7);
      expect(frame._rolls).toEqual([7]);
    });

    it("calculates total score for a frame with two rolls", function() {
      frame.roll(7);
      frame.roll(2);
      expect(frame.calculateFrameScore()).toEqual(9);
    });
  });

});

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

    it("returns true if it's a strike, i.e. all pins hit with first roll", function() {
      frame.roll(10);
      expect(frame.isStrike()).toBe(true);
    });

    it("returns false if it isn't a strike", function() {
      frame.roll(5);
      expect(frame.isStrike()).toBe(false);
    });

    it("returns true if it's a spare, i.e. all pins hit within one frame", function() {
      frame.roll(4);
      frame.roll(6);
      expect(frame.isSpare()).toBe(true);
    });

    it("returns false if it isn't a spare", function() {
      frame.roll(2);
      frame.roll(3);
      expect(frame.isSpare()).toBe(false);
    });

    it("returns false for spare, if it's a strike", function() {
      frame.roll(10);
      expect(frame.isSpare()).toBe(false);
    });
  });

});

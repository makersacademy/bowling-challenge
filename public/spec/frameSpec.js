"use strict";

describe("Frame", function() {
  
  var frame, spareFrame, strikeFrame;

  describe("isStrike()", function() {
    it("returns true when first roll is a strike", function() {
      strikeFrame = new Frame([10]);
      expect(strikeFrame.isStrike()).toBe(false);
    });
    it("returns false when first roll is not a strike", function () {
      frame = new Frame([5, 4]);
      expect(frame.isStrike()).toBe(false);
    });
  });
  describe("isSpare()", function() {
    it("returns true when first two rolls total 10", function() {
      spareFrame = new Frame([5, 5]);
      expect(spareFrame.isSpare()).toBe(true);
    });
    it("returns false when first roll is a strike", function() {
      strikeFrame = new Frame([10]);
      expect(strikeFrame.isSpare()).toBe(false);
    });
  });
  describe("getBasePoints()", function() {
    it("returns base points of frame", function() {
      frame = new Frame([3, 4]);
      expect(frame.points()).toBe(7);
    });
  });
  describe("spareBonus()", function() {
    it("returns points for first roll of next frame", function() {
      spareFrame = new Frame([5, 5]);
      frame = new Frame([3, 6]);
      expect(spareFrame.spareBonus(frame)).toBe(3);
    });
  });
  describe("strikeBonus()", function() {
    it("returns points for first two rolls of next frame", function() {
      strikeFrame = new Frame([10]);
      frame = new Frame([3, 6]);
      expect(strikeFrame.strikeBonus(frame)).toBe(9);
    });
  });
});

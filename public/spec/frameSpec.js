"use strict";

describe("Frame", function() {
  
  var frame;

  describe("isStrike()", function() {
    it("returns true when first roll is a strike", function() {
      frame = new Frame([10]);
      expect(frame.isStrike()).toBe(true);
    });
    it("returns false when first roll is not a strike", function () {
      frame = new Frame([5, 4]);
      expect(frame.isStrike()).toBe(false);
    });
  });
  describe("isSpare()", function() {
    it("returns true when frame base point total is 10", function() {
      frame = new Frame([5, 5]);
      expect(frame.isSpare()).toBe(true);
    });
    it("returns false when first roll is a strike", function() {
      frame = new Frame([10]);
      expect(frame.isSpare()).toBe(false);
    });
  });
  describe("getBasePoints()", function() {
    it("returns base points of frame", function() {
      frame = new Frame([3, 4])
      expect(frame.getBasePoints()).toBe(7);
    });
  });
  describe("spareBonus()", function() {
    it("returns points for first roll of frame", function() {
    frame = new Frame([3,6]);
    expect(frame.spareBonus()).toBe(3);
    })
  })
  describe("strikeBonus()", function() {
    it("returns points for first two rolls of frame", function() {
      frame = new Frame([3,6]);
    expect(frame.strikeBonus()).toBe(9);
    })
  })
});

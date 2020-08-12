"use strict";

describe("Frame", function() {
  var frame, nonStrikeRoll, strikeRoll;
  beforeEach(function() {
    frame = new Frame();
    nonStrikeRoll = 5;
    strikeRoll = 10;
  });
  describe("isStrike()", function() {
    it("returns true when first roll is a strike", function() {
      frame.add(strikeRoll);
      expect(frame.isStrike()).toBe(true);
    });
    it("returns false when first roll is not a strike", function () {
      frame.add(nonStrikeRoll);
      expect(frame.isStrike()).toBe(false);
    });
  });
  describe("isSpare()", function() {
    it("returns true when frame base point total is 10", function() {
      frame.add(nonStrikeRoll);
      frame.add(nonStrikeRoll);
      expect(frame.isSpare()).toBe(true);
    });
    it("returns false when first roll is a strike", function() {
      frame.add(strikeRoll);
      expect(frame.isSpare()).toBe(false);
    });
  });
  describe("getBasePoints()", function() {
    it("returns base points of frame", function() {
      frame.add(nonStrikeRoll);
      frame.add(nonStrikeRoll);
      expect(frame.getBasePoints()).toBe(nonStrikeRoll + nonStrikeRoll);
    });
  });
});

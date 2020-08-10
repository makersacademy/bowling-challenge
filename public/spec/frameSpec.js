"use strict";

describe("Frame", function() {
  var frame;
  beforeEach(function() {
    frame = new Frame();
  });
  describe("isStrike()", function() {
    it("returns true when first roll is a strike", function() {
      var strikeRoll = 10;
      frame.add(strikeRoll);
      expect(frame.isStrike()).toBe(true);
    })
    it("returns false when first roll is not a strike", function () {
      var nonStrikeRoll = 5;
      frame.add(nonStrikeRoll);
      expect(frame.isStrike()).toBe(false);
    });
  });
  describe("isSpare()", function() {
    it("returns true when rolls total 10", function() {
      var aRoll = 5;
      frame.add(aRoll);
      frame.add(aRoll);
      expect(frame.isSpare()).toBe(true);
    });
    it("returns false when first roll is a strike", function() {
      var strikeRoll = 10;
      frame.add(strikeRoll);
      expect(frame.isSpare()).toBe(false);
    });
  });
});

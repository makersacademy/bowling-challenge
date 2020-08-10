"use strict";

describe("Frame", function() {
  var frame;

  describe("isStrike()", function() {
    frame = new Frame();

    it("returns true when first roll is a strike", function() {
      var firstRoll = 10;
      frame.add(firstRoll);
      expect(frame.isStrike()).toBe(true);
    })
  })
})
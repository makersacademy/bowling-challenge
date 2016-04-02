"use strict";

describe("Frame", function () {
  var frame;

  beforeEach(function () {
    frame = new Frame();
  });

  it("should start with a zero score", function () {
    expect(frame.getScore()).toEqual(0);
  });

  describe("log rolls", function () {
    it("each roll can only hit 10 pins maximum", function () {
      expect(function () { frame.logRoll(11) }).toThrowError(frame.PINS_ERROR);
    });

    it("there are only 10 pins for 2 rolls", function () {
      frame.logRoll(3);
      expect(function () { frame.logRoll(8) }).toThrowError(frame.PINS_ERROR);
    });
  });

  describe("strike", function () {
    it("finishes the frame with a strike", function () {
      frame.logRoll(10);
      expect(frame.isComplete()).toEqual(true);
    });
  });
});

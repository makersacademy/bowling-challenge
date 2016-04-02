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
    it("starts with the first roll", function () {
      expect(frame.isFirstRoll).toEqual(true);
    });

    it("has a second roll", function () {
      frame.logRoll(2);
      expect(frame.isFirstRoll).toEqual(false);
    });

    it("each roll can only hit 10 pins maximum", function () {
      expect(function () { frame.logRoll(11) }).toThrowError(frame.PINS_ERROR);
    });

    it("there are only 10 pins for 2 rolls", function () {
      frame.logRoll(3);
      expect(function () { frame.logRoll(8) }).toThrowError(frame.PINS_ERROR);
    });
  });
});

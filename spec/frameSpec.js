"use strict";

describe("Frame", function () {
  var frame;

  beforeEach(function () {
    frame = new Frame();
  });

  function logRolls(first, second) {
    frame.logRoll(first);
    frame.logRoll(second);
  };

  describe("log rolls", function () {
    it("each roll can only hit 10 pins maximum", function () {
      expect(function () { frame.logRoll(11) }).toThrowError(frame.PINS_ERROR);
    });

    it("there are only 10 pins for 2 rolls", function () {
      expect(function () { logRolls(3, 8) }).toThrowError(frame.PINS_ERROR);
    });
  });

  describe("getScore", function () {
    it("should start with a zero score", function () {
      expect(frame.getScore()).toEqual(0);
    });

    it("returns a single roll's score", function () {
      frame.logRoll(3);
      expect(frame.getScore()).toEqual(3);
    });

    it("returns the sum of two rolls' scores", function () {
      logRolls(3, 5);
      expect(frame.getScore()).toEqual(8);
    });
  });

  describe("strike", function () {
    it("is a strike when 10 pins are knocked down in 1 roll", function () {
      frame.logRoll(10);
      expect(frame.isStrike()).toEqual(true);
    });
  });

  describe("spare", function () {
    it("is a spare when 10 pins are knowcked down in 2 rolls", function () {
      logRolls(6, 4);
      expect(frame.isSpare()).toEqual(true);
    });
  });

  describe("frame complete", function () {
    it("is complete when it is a strike", function () {
      frame.logRoll(10);
      expect(frame.isComplete()).toEqual(true);
    });

    it("is complete after 2 rolls when no strike", function () {
      logRolls(6, 4);
      expect(frame.isComplete()).toEqual(true);
    });
  });
});

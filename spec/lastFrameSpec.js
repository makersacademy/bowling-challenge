"use strict";

describe("LastFrame", function () {
  var lastFrame

  beforeEach(function () {
    lastFrame = new LastFrame();
  });

  describe("log rolls", function () {
    it("each roll can only hit 10 pins maximum", function () {
      expect(function () { lastFrame.logRoll(11) }).toThrowError(lastFrame.PINS_ERROR);
    });

    it("there are only 10 pins for 2 rolls", function () {
      lastFrame.logRoll(3);
      expect(function () { lastFrame.logRoll(8) }).toThrowError(lastFrame.PINS_ERROR);
    });
  });

  describe("getScore", function () {
    it("should start with a zero score", function () {
      expect(lastFrame.getScore()).toEqual(0);
    });

    it("returns a single roll's score", function () {
      lastFrame.logRoll(3);
      expect(lastFrame.getScore()).toEqual(3);
    });

    it("returns the sum of two rolls' scores", function () {
      lastFrame.logRoll(3);
      lastFrame.logRoll(5);
      expect(lastFrame.getScore()).toEqual(8);
    });

    it("returns the sum of three rolls' scores", function () {
      lastFrame.logRoll(10);
      lastFrame.logRoll(6);
      lastFrame.logRoll(3);
      expect(lastFrame.getScore()).toEqual(19);
    });
  });

  describe("strike", function () {
    beforeEach(function () {
      lastFrame.logRoll(10);
    })

    it("is a strike when 10 pins are knocked down in 1 roll", function () {
      expect(lastFrame.isStrike()).toEqual(true);
    });
  });

});

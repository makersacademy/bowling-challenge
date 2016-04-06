"use strict";

describe("LastFrame", function () {
  var lastFrame

  beforeEach(function () {
    lastFrame = new LastFrame();
  });

  function logRolls(first, second) {
    lastFrame.logRoll(first);
    lastFrame.logRoll(second);
  };

  describe("log rolls", function () {
    it("each roll can only hit 10 pins maximum", function () {
      expect(function () { lastFrame.logRoll(11) }).toThrowError(lastFrame.PINS_ERROR);
    });

    it("there are only 10 pins for the first 2 rolls", function () {
      expect(function () { logRolls(3, 8) }).toThrowError(lastFrame.PINS_ERROR);
    });

    it("if strike, there are only 10 pins for the 2 bonus rolls", function () {
      lastFrame.logRoll(10);
      expect(function () { logRolls(5, 6) }).toThrowError(lastFrame.PINS_ERROR);
    });
  });

  describe("get score", function () {
    it("should start with a zero score", function () {
      expect(lastFrame.getScore()).toEqual(0);
    });

    it("returns a single roll's score", function () {
      lastFrame.logRoll(3);
      expect(lastFrame.getScore()).toEqual(3);
    });

    it("returns the sum of two rolls' scores", function () {
      logRolls(3, 5);
      expect(lastFrame.getScore()).toEqual(8);
    });

    it("returns the sum of three rolls' scores", function () {
      lastFrame.logRoll(10);
      logRolls(3, 6);
      expect(lastFrame.getScore()).toEqual(19);
    });
  });

  describe("second roll", function () {
    it("starts with the first roll", function () {
      expect(lastFrame.isSecondRoll()).toEqual(false);
    });

    it("is the second roll after the first roll", function () {
      lastFrame.logRoll(3);
      expect(lastFrame.isSecondRoll()).toEqual(true);
    });
  });

  describe("strike", function () {
    it("is a strike when 10 pins are knocked down in 1 roll", function () {
      lastFrame.logRoll(10);
      expect(lastFrame.isStrike()).toEqual(true);
    });
  });

  describe("spare", function () {
    it("is a spare when 10 pins are knowcked down in 2 rolls", function () {
      logRolls(6, 4);
      expect(lastFrame.isSpare()).toEqual(true);
    });
  });

  describe("frame complete", function () {
    describe("no strike or spare", function () {
      it("is complete after 2 rolls", function () {
        logRolls(3, 5);
        expect(lastFrame.isComplete()).toEqual(true);
      });
    });

    describe("strike", function () {
      it("is complete after 2 bonus rolls", function () {
        lastFrame.logRoll(10);
        logRolls(3, 6);
        expect(lastFrame.isComplete()).toEqual(true);
      });
    });

    describe("spare", function () {
      it("is complete after 1 bonus roll", function () {
        logRolls(6, 4);
        lastFrame.logRoll(5);
        expect(lastFrame.isComplete()).toEqual(true);
      });
    });
  });
});

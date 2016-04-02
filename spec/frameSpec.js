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
    beforeEach(function () {
      frame.logRoll(10);
    })

    it("is a strike when 10 pins are knocked down in 1 roll", function () {
      expect(frame.isStrike()).toEqual(true);
    });

    it("finishes the frame with a strike", function () {
      expect(frame.isComplete()).toEqual(true);
    });
  });

  describe("spare", function () {
    it("is a spare when 10 pins are knowcked down in 2 rolls", function () {
      frame.logRoll(6);
      frame.logRoll(4);
      expect(frame.isSpare()).toEqual(true);
    });
  });
});

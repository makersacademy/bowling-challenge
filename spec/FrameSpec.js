'use strict';

describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe("Calculates scores", function() {
    it("can put the score after a roll into the roll array", function() {
      frame.roll(7);
      expect(frame._rolls).toEqual([7]);
    });

    it("calculates total score for a frame with two rolls", function() {
      frame.roll(7);
      frame.roll(2);
      expect(frame.calculateFrameScore()).toEqual(9);
    });

    it("returns true if it's a strike, i.e. all pins hit with first roll", function() {
      frame.roll(10);
      expect(frame.isStrike()).toBe(true);
    });

    it("returns false if it isn't a strike", function() {
      frame.roll(5);
      expect(frame.isStrike()).toBe(false);
    });

    it("returns true if it's a spare, i.e. all pins hit within one frame", function() {
      frame.roll(4);
      frame.roll(6);
      expect(frame.isSpare()).toBe(true);
    });

    it("returns false if it isn't a spare", function() {
      frame.roll(2);
      frame.roll(3);
      expect(frame.isSpare()).toBe(false);
    });

    it("returns false for spare, if it's a strike", function() {
      frame.roll(10);
      expect(frame.isSpare()).toBe(false);
    });
  });

  describe("Completed frame", function() {

    it("returns true after two rolls", function() {
      frame.roll(4);
      frame.roll(5);
      expect(frame.isComplete()).toBe(true);
    });

    it("returns true after a strike", function() {
      frame.roll(10);
      expect(frame.isComplete()).toBe(true);
    });

    it("returns false after one roll if it isn't a strike", function() {
      frame.roll(9);
      expect(frame.isComplete()).toBe(false);
    });
  });

  describe("Adds bonus to score", function() {

    it("calculates bonus for a strike based on the next two rolls", function() {
      frame.roll(10);
      frame.bonus([4,3]);
      expect(frame.calculateFinalScore()).toEqual(17);
    });

    it("calculates bonus for a spare based on the next roll", function() {
      frame.roll(3);
      frame.roll(7);
      frame.bonus([5]);
      expect(frame.calculateFinalScore()).toEqual(15);
    });

    it("doesn't add second roll's score to spare as a bonus", function() {
      frame.roll(3);
      frame.roll(7);
      frame.bonus([5, 2]);
      expect(frame.calculateFinalScore()).toEqual(15);
    });

    it("doesn't add bonus if it's neither a strike, nor a spare", function() {
      frame.roll(3);
      frame.roll(5);
      frame.bonus([5, 2]);
      expect(frame.calculateFinalScore()).toEqual(8);
    });
  });

  describe("End of frame alerts", function() {

    it("tells if a frame is finished", function() {
      frame.roll(1)
      frame.roll(0)
      expect(frame.isComplete()).toBe(true);
      expect(frame.alert()).toEqual("This frame is finished.")
    });

    it("tells if the frame is the last one", function() {
      var frame = new Frame(true);
      expect(frame.final()).toBe(true);
    });
  });
});

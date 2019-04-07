'use strict';

describe("Frame", function () {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('rolls', function () {

    it("returns the number of pins rolled over in a roll", function () {
      expect(frame.roll(5)).toEqual(5);
    });

  });

  describe('collectPins', function () {

    it("collects pins rolled over in a roll", function () {
      frame.roll(5);
      frame.collectPins(5);
      expect(frame.pinsRolled).toEqual([5]);
    });
    
  });

  describe('normalRolls', function () {

    it("returns normalRolls if both rolls in a frame rolls less than 10 pins", function () {
      frame.roll(3);
      frame.roll(5);
      frame.collectPins(3);
      frame.collectPins(5);
      expect(frame.normalRolls()).toEqual(true);
    });

  });

  describe('strike', function () {

    it("returns a strike if first roll in a frame rolls over 10 pins", function () {
      frame.roll(10);
      frame.collectPins(10);
      expect(frame.strike()).toEqual(true);
    });

  });

  describe('spare', function () {

    it("returns a spare if player knocks down all 10 pins with two rolls of a frame", function () {
      frame.roll(6);
      frame.roll(4);
      frame.collectPins(6);
      frame.collectPins(4);
      expect(frame.spare()).toEqual(true);
    });

  });

  describe('score', function () {

    it("returns the score of the frame in the scenario of a strike", function () {
      frame.roll(10);
      frame.collectPins(10);
      expect(frame.strike()).toEqual(true);
      expect(frame.score()).toEqual(10);
    });

    it("returns the score of the frame in the scenario of a spare", function () {
      frame.roll(6);
      frame.roll(4);
      frame.collectPins(6);
      frame.collectPins(4);
      expect(frame.spare()).toEqual(true);
      expect(frame.score()).toEqual(10);
    });
    
    it("returns the score of the frame in the scenario of a gutter", function () {
      frame.roll(0);
      frame.roll(0);
      frame.collectPins(0);
      frame.collectPins(0);
      expect(frame.score()).toEqual(0);
    });

    it("returns the score of the frame in the scenario of normal rolls", function () {
      frame.roll(3);
      frame.roll(5);
      frame.collectPins(3);
      frame.collectPins(5);
      expect(frame.score()).toEqual(8);
    });

  });

});
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

  describe('strike', function () {

    it("returns a strike if first roll in a frame rolls over 10 pins", function () {
      frame.roll(10);
      frame.collectPins(10);
      expect(frame.strike()).toEqual(true);
    });

  });

});
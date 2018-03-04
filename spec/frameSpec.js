'use strict';

describe('Frame', function () {

  var regularFrame;
  var spareFrame;
  var strikeFrame;
  
  beforeEach(function () {
    regularFrame = new Frame(3, 3);
    spareFrame = new Frame(5, 5);
    strikeFrame = new Frame(10);
  });

  describe('Strike and Spare', function() {
    it('returns true for a strike', function() {
      expect(strikeFrame.isStrike()).toEqual(true);
    });
    it('returns true for a spare', function() {
      expect(spareFrame.isSpare()).toEqual(true);
    });
  });

  describe('frameScore', function() {
    it('returns the correct amount for strikes', function() {
      expect(strikeFrame.frameScore).toEqual(10);
    });
  });
});
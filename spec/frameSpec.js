'use strict';

describe('Frame', function() {
  var frame

  beforeEach(function() {
    frame = new Frame();
  });

  describe('bowl', function() {

    it("adds the first bowl to the first bowl pin count", function() {
      frame.bowl(5);
      var firstBowl = frame.pin_count[0];
      expect(firstBowl).toEqual(5);
    });

    it("adds the second bowl to the second bowl pin count", function() {
      frame.bowl(5);
      frame.bowl(2);
      var secondBowl = frame.pin_count[1];
      expect(secondBowl).toEqual(2);
    });
  });

  describe('whichRoll', function() {

    it("knows when it's the first roll", function() {
      expect(frame.whichRoll()).toEqual(1);
    });

    it("knows when it's the second roll", function() {
      frame.bowl(3);
      expect(frame.whichRoll()).toEqual(2);
    });
  });
  
});

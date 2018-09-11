"use strict";

describe('Frame', function() {
  var frame, strikeFrame, spareFrame;

  beforeEach(function(){
    frame = new Frame();
    frame.addPins(4);
    frame.addPins(3);
    strikeFrame = new Frame();
    strikeFrame.addPins(10);
    spareFrame = new Frame()
    spareFrame.addPins(4);
    spareFrame.addPins(6);
  });

  describe('.addPins', function() {
    it('Adds pins to the roll array', function() {
      expect(frame.roll).toEqual([4, 3]);
    });
  });

  describe('.score', function() {
    it('Returns total score for frame', function() {
      expect(frame.score()).toEqual(7);
    });

    it('Returns total score for only one roll', function() {
      expect(strikeFrame.score()).toEqual(10);
    })
  });

  describe('.bonus', function() {
    it('Returns null if no bonus points', function() {
      expect(frame.bonus()).toEqual(null);
    });

    it('Returns strike if bonus points required', function() {
      expect(strikeFrame.bonus()).toEqual("strike");
    });

    it('Returns spare if bonus points required', function() {
      expect(spareFrame.bonus()).toEqual("spare");
    });
  });
});

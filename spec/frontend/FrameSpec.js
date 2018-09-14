"use strict";

describe('Frame', function() {
  var frame, strikeFrame, spareFrame, tenthFrame;

  beforeEach(function(){
    frame = new Frame();
    frame.addPins(4);
    frame.addPins(3);
    strikeFrame = new Frame();
    strikeFrame.addPins(10);
    spareFrame = new Frame()
    spareFrame.addPins(4);
    spareFrame.addPins(6);
    tenthFrame = new Frame();
    tenthFrame.addPins(1);
    tenthFrame.addPins(2);
    tenthFrame.addPins(2);
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

  describe('._isTenthFrame', function() {
    it('Returns false if not tenth frame', function() {
      expect(frame._isTenthFrame).toEqual(false);
    });

    it('Returns true if tenth frame', function() {
      expect(tenthFrame._isTenthFrame).toEqual(true);
    });
  });

  describe('.scoreForBonus', function() {
    it('Returns total score if not tenth frame', function() {
      expect(frame.scoreForBonus()).toEqual(7);
    });

    it('Returns first two rolls if tenth frame', function() {
      expect(tenthFrame.scoreForBonus()).toEqual(3);
    });
  });
});

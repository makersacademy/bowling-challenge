"use strict";

describe('Frame', function() {
  var frame, strikeFrame, spareFrame, tenthFrame;

  beforeEach(function(){
    frame = new Frame();
    strikeFrame = new Frame();
    spareFrame = new Frame()
    tenthFrame = new Frame();
  });

  describe('.addPins', function() {
    beforeEach(function() {
      frame.addPins(4);
      frame.addPins(3);
    })

    it('Adds pins to the roll array', function() {
      expect(frame.roll).toEqual([4, 3]);
    });
  });

  describe('.score', function() {
    beforeEach(function() {
      frame.addPins(4);
      frame.addPins(3);
      strikeFrame.addPins(10);
    });

    it('Returns total score for frame', function() {
      expect(frame.score()).toEqual(7);
    });

    it('Returns total score for only one roll', function() {
      expect(strikeFrame.score()).toEqual(10);
    })
  });

  describe('.bonus', function() {
    beforeEach(function() {
      frame.addPins(4);
      frame.addPins(3);
      strikeFrame.addPins(10);
      spareFrame.addPins(4);
      spareFrame.addPins(6);
    });

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

  describe('.scoreForBonus', function() {
    beforeEach(function() {
      frame.addPins(4);
      frame.addPins(3);
      tenthFrame.addPins(1);
      tenthFrame.addPins(2);
      tenthFrame.addPins(2);
    });

    it('Returns total score if not tenth frame', function() {
      expect(frame.scoreForBonus()).toEqual(7);
    });

    it('Returns first two rolls if tenth frame', function() {
      expect(tenthFrame.scoreForBonus()).toEqual(3);
    });
  });
});

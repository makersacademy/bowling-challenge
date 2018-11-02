'use strict';

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('Frames < 10', function() {
    it('starts with no rolls', function() {
      expect(frame.getrolls()).toEqual([]);
    });

    // it('starts with framenumber', function() {
    //   expect(frame.getrolls()).toEqual([]);
    // });

    it('saves a roll', function() {
      frame.roll(1)
      expect(frame.getrolls()).toEqual([1]);
    });

    it('saves a second roll', function() {
      frame.roll(1)
      frame.roll(9)
      expect(frame.getrolls()).toEqual([1,9]);
    });

    it('gets frame size of 2', function() {
      frame.roll(1)
      frame.roll(9)
      expect(frame.getFrameSize()).toEqual(2);
    });

    it('closes frame', function() {
      frame.roll(1)
      frame.roll(9)
      expect(frame.isFrameOpen()).toEqual(false);
    });

    it('records a strike', function() {
      frame.roll(10)
      expect(frame.hasStrike()).toEqual(true);
    });

    it('records a spare', function() {
      frame.roll(1)
      frame.roll(9)
      expect(frame.hasSpare()).toEqual(true);
    });

    it('sets the second roll to 0 then a strike', function () {
      frame.roll(10)
      expect(frame.isFrameOpen()).toEqual(false)
    })

    it('raises an error when trying to roll more than 2', function() {
      frame.roll(1)
      frame.roll(9)
      expect(frame.roll(2)).toEqual("Only 2 rolls allowed")
    });
  });

  describe('scoring a frame', function() {
    it('closes frame', function() {
      // frame = new Frame()
      // console.log(frame)
      frame.roll(1)
      frame.roll(9)
      expect(frame.getPinsScore()).toEqual(10)
    });
  });
});

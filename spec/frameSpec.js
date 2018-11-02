'use strict';

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('Frames < 10', function() {
    it('starts with no bowls', function() {
      expect(frame.getbowls()).toEqual([]);
    });

    it('saves a bowl', function() {
      frame.bowl(1)
      expect(frame.getbowls()).toEqual([1]);
    });

    it('saves a second bowl', function() {
      frame.bowl(1)
      frame.bowl(9)
      expect(frame.getbowls()).toEqual([1,9]);
    });

    it('gets frame size of 2', function() {
      frame.bowl(1)
      frame.bowl(9)
      expect(frame.getFrameSize()).toEqual(2);
    });

    it('closes frame', function() {
      frame.bowl(1)
      frame.bowl(9)
      expect(frame.isFrameOpen()).toEqual(false);
    });

    it('records a strike', function() {
      frame.bowl(10)
      expect(frame.hasStrike()).toEqual(true);
    });

    it('records a spare', function() {
      frame.bowl(1)
      frame.bowl(9)
      expect(frame.hasSpare()).toEqual(true);
    });

    it('sets the second bowl to 0 then a strike', function () {
      frame.bowl(10)
      expect(frame.isFrameOpen()).toEqual(false)
    })

    it('raises an error when trying to bowl more than 2', function() {
      frame.bowl(1)
      frame.bowl(9)
      expect(frame.bowl(2)).toEqual("Only 2 bowls allowed")
    });
  });

  describe('scoring a frame', function() {
    it('closes frame', function() {
      // frame = new Frame()
      // console.log(frame)
      frame.bowl(1)
      frame.bowl(9)
      expect(frame.getPinsScore()).toEqual(10)
    });
  });
});

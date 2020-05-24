'use strict';

describe('Frame', function() {

  var frame;

  describe('isStrike', function() {
    it('Frame instances return true when is strike', function() {
      frame = new Frame([10, 0]);
      expect(frame.isStrike()).toBe(true);
    });

    it('Frame instances return false when is not strike', function() {
      frame = new Frame([2, 2]);
      expect(frame.isStrike()).toBe(false);
    });

    it('Frame instances return false when is not strike', function() {
      frame = new Frame([5, 5]);
      expect(frame.isStrike()).toBe(false);
    });
  });

  describe('isSpare', function() {
    it('Frame instances return true when is spare', function() {
      frame = new Frame([5, 5]);
      expect(frame.isSpare()).toBe(true);
    });

    it('Frame instances return true when is spare', function() {
      frame = new Frame([7, 3]);
      expect(frame.isSpare()).toBe(true);
    });

    it('Frame instances return false when is strike', function() {
      frame = new Frame([10, 0]);
      expect(frame.isSpare()).toBe(false);
    });

    it('Frame instances return false when is not spare', function() {
      frame = new Frame([3, 3]);
      expect(frame.isSpare()).toBe(false);
    });

  });



});

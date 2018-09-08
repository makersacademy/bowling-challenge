'use strict;'

describe('Frame', function() {
  describe('isStrike', function() {
    it('returns true if the frame is a strike', function() {
      var frame = new Frame(10, 0);
      expect(frame.isStrike()).toEqual(true);
    });

    it('returns false if the frame is not a strike', function() {
      var frame = new Frame(2, 3);
      expect(frame.isStrike()).toEqual(false);
    });
  });

  describe('isSpare', function() {
    it('returns true if a frame is a spare', function() {
      var frame = new Frame(5, 5);
      expect(frame.isSpare()).toEqual(true);
    });

    it('returns false if the frame is not a spare', function() {
      var frame = new Frame(1, 2);
      expect(frame.isSpare()).toEqual(false);
    });
  });

  describe('frameScore', function() {
    it('returns the sum of the rolls in the frame', function(){
      var frame = new Frame(4, 3);
      expect(frame.frameScore()).toEqual(7);
    });

    it('returns the sum of the rolls in the frame', function() {
      var frame = new Frame(4, 6, 3);
      expect(frame.frameScore()).toEqual(13);
    });
  });

  describe('.isNormal', function() {
    it('returns true for a frame with no bonus', function() {
      var frame = new Frame(2, 0);
      expect(frame.isNormal()).toEqual(true);
    });

    it('returns false for a frame with bonus', function() {
      var frame = new Frame(10, 0);
      expect(frame.isNormal()).toEqual(false);
    });
  });
});

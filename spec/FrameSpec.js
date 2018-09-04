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
});

describe('Frame', function() {
  var frame;

  regular_frame = new Frame([3,4]);
  spare_frame = new Frame([5,5]);
  strike_frame = new Frame([10]);
  tenth_frame = new Frame([10,3,3]);

  describe('initialize', function() {
    it('has two rolls', function() {
      expect(regular_frame.roll1).toEqual(3);
      expect(regular_frame.roll2).toEqual(4);
    });

    it('allows up to 3 rolls if it is the 10th frame', function() {
      expect(tenth_frame.roll3).toEqual(3);
    });

    it('recognises a spare frame', function() {
      expect(spare_frame.isSpare).toEqual(true);
    });

    it('recognises a strike frame', function() {
      expect(strike_frame.isStrike).toEqual(true);
    });
  });

  describe('calculateFrameScore', function() {
    it('calculates an open frame', function() {
      expect(regular_frame.score).toEqual(7);
    });
  });
});

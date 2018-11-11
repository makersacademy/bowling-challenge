describe('Frame', function() {
  var frame;

  open_frame = new Frame([3,4]);
  spare_frame = new Frame([5,5]);
  strike_frame = new Frame([10]);
  tenth_frame = new Frame([10,3,3]);

  describe('initialize', function() {
    it('has two rolls', function() {
      expect(open_frame.roll1).toEqual(3);
      expect(open_frame.roll2).toEqual(4);
    });

    it('allows up to 3 rolls', function() {
      expect(tenth_frame.roll3).toEqual(3);
    });

    it('recognises a spare frame', function() {
      expect(spare_frame.isSpare).toEqual(true);
    });

    it('recognises a strike frame', function() {
      expect(strike_frame.isStrike).toEqual(true);
    });
  });
});

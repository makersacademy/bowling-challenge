describe('Frame', function() {
  let frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('strikes', function() {
    it('returns true for isStrike if player strikes', function() {
      frame.setValues(10);
      expect(frame.isStrike()).toEqual(true);
    });
    it('returns false for isStrike if player does not strike', function() {
      frame.setValues(5, 5);
      expect(frame.isStrike()).toEqual(false);
    });
  });
});

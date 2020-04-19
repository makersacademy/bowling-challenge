describe('Frame', function() {
  let frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('isStrike', function() {
    it('returns true if player strikes', function() {
      frame.setValues(10);
      expect(frame.isStrike()).toEqual(true);
    });
    it('returns false if player does not strike', function() {
      frame.setValues(5, 5);
      expect(frame.isStrike()).toEqual(false);
    });
  });

  describe('isOpenFrame', function() {
    it('returns true if if frame is open', function() {
      frame.setValues(5, 3);
      expect(frame.isOpenFrame()).toEqual(true);
    });
  });
});


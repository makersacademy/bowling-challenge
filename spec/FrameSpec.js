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
    it('returns false if if player strikes', function() {
      frame.setValues(10);
      expect(frame.isOpenFrame()).toEqual(false);
    });
    it('returns false if player spares', function() {
      frame.setValues(5, 5);
      expect(frame.isOpenFrame()).toEqual(false);
    });
  });

  describe('isSpare', function() {
    it('returns true if if roll is spare', function() {
      frame.setValues(5, 5);
      expect(frame.isSpare()).toEqual(true);
    });
    it('returns false if if roll is a strike', function() {
      frame.setValues(10);
      expect(frame.isSpare()).toEqual(false);
    });
  });
});


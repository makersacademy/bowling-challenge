describe('Frame', function() {
  let frame;

  describe('isStrike', function() {
    it('returns true if player strikes', function() {
      frame = new Frame(10);
      expect(frame.isStrike()).toEqual(true);
    });
    it('returns false if player does not strike', function() {
      frame = new Frame(5, 5);
      expect(frame.isStrike()).toEqual(false);
    });
  });

  describe('isOpenFrame', function() {
    it('returns true if frame is open', function() {
      frame = new Frame(5, 3);
      expect(frame.isOpenFrame()).toEqual(true);
    });
    it('returns false if player strikes', function() {
      frame = new Frame(10);
      expect(frame.isOpenFrame()).toEqual(false);
    });
    it('returns false if player spares', function() {
      frame = new Frame(5, 5);
      expect(frame.isOpenFrame()).toEqual(false);
    });
  });

  describe('isSpare', function() {
    it('returns true if roll is spare', function() {
      frame = new Frame(5, 5);
      expect(frame.isSpare()).toEqual(true);
    });
    it('returns false if roll is a strike', function() {
      frame = new Frame(10);
      expect(frame.isSpare()).toEqual(false);
    });
    it('returns false if frame is open', function() {
      frame = new Frame(5, 2);
      expect(frame.isSpare()).toEqual(false);
    });
  });

  describe('edge cases', function() {
    it('rejects greater than 10', function() {
      expect(function() {
        new Frame(12);
      }).toThrowError('Must score between 0 and 10');
    });

    it('rejects less than 0', function() {
      expect(function() {
        new Frame(-1);
      }).toThrowError('Must score between 0 and 10');
    });
  });
});


describe ('Frame', function() {
  var frame

  beforeEach(function() {
    frame = new Frame();
});

  describe('#roll', function() {
    it ('roll adds to frame score', function() {
      frame.roll(5)
      frame.calcScore();
      expect(frame.score).toEqual(5);
    });
  });

  describe('#isComplete', function() {
      it ('is true when 2 rolls have been completed', function() {
        frame.rolls = [4, 5];
        expect(frame.isComplete()).toEqual(true);
      });
  });

  describe('#resetPins', function() {
    it('resets when isComplete is true', function() {
      frame.rolls = [4, 5];
      frame.resetPins();
      expect(frame.rolls.length).toBe(0);
    });
  });

  describe('#isStrike', function() {
    it('returns true if 10 pins knocked down on first roll', function() {
      frame.rolls = [10];
      expect(frame.isStrike()).toBe(true);
    });
  })

  describe('#isSpare', function() {
    it('returns true if 10 pins knocked down within 2 rolls', function() {
      frame.rolls = [5, 5];
      expect(frame.isSpare()).toBe(true);
    })
  })
});

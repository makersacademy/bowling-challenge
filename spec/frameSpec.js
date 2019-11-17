describe ('Frame', function() {
  var frame

  beforeEach(function() {
    frame = new Frame();
});

  describe('#roll', function() {
    it ('roll adds to frame score', function() {
      frame.roll(5);
      expect(frame.calcScore()).toEqual(5);
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
});

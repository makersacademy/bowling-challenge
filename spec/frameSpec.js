describe('Frame', function() {
  var frame;
  beforeEach(function() {
    frame = new Frame(Roll);
  });

  describe('#rolls', function() {
    it('has an array of rolls', function() {
      expect(frame.rolls.length).toEqual(2);
    });
  });

  describe('#currentRoll', function() {
    it('starts with a currentRoll of 0', function() {
      expect(frame.currentRoll).toEqual(0);
    });
  });

  describe('#nextRoll', function() {
    it('adds to currentRoll', function() {
      frame.nextRoll();
      expect(frame.currentRoll).toEqual(1);
    });
  });
});
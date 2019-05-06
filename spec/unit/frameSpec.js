describe('frame', function() {

  beforeEach(function() {
      frame = new Frame();
  });

  describe('::new', function() {
    it('will initialise with 0 pins hits', function() {
      expect(frame.score()).toEqual(0);
    });
  });

  describe('#pinsHit', function() {
    it('records the number of pins hit in the frame', function() {
      var number = 1;
      frame.pinsHit(number);
      expect(frame._rolls[0]).toEqual(number);
    });
  });

  describe('#score', function() {
    it('returns the score for the frame', function() {
      expect(frame.score()).toEqual(0);
      frame.pinsHit(3);
      frame.pinsHit(5);
      expect(frame.score()).toEqual(8);
    });
  });

  describe('#calcuateScore', function() {
    it('calculates the score for the frame', function() {
      frame.pinsHit(3);
      frame.pinsHit(2);
      expect(frame.score()).toEqual(5);
    });
  });

  describe('#isComplete', function() {
    it('returns true if 2 rolls are taken in frame', function() {
      expect(frame.isComplete()).toBe(false);
      frame.pinsHit(2);
      frame.pinsHit(6);
      expect(frame.isComplete()).toBe(true);
    });
    // Add it for returns true after strike
  });
});

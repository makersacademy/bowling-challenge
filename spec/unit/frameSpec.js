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
      expect(frame.score()).toEqual(number);
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
});

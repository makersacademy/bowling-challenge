describe ('Frame', function() {

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('Creating frames', function() {
    it('creates a new frame as an empty array', function() {
      expect(frame._frame).toEqual([]);
    });
  });

  describe('#roll', function() {
    it('pushes a roll into the frame array', function(){
      frame.roll(1);
      frame.roll(2);
      expect(frame._frame).toEqual([1,2]);
    });
  });

  describe('#calculateFrameScore', function() {
    it('calculates total score of a frame', function() {
      frame.roll(1);
      frame.roll(2);
      expect(frame.calculateFrameScore()).toEqual(3);
    });
  });

  describe('#_isStrike', function() {
    it('returns true when strike gets hit', function() {
      frame.roll(10);
      expect(frame.isStrike()).toBe(true);
    });
    it('returns false when strike is not hit', function() {
      frame.roll(0);
      frame.roll(10);
      expect(frame.isStrike()).toBe(false);
    });
  });


});

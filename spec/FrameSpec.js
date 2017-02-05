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

  describe('#isStrike', function() {
    it('returns true when frame results in strike', function() {
      frame.roll(10);
      expect(frame.isStrike()).toBe(true);
    });
    it('returns false when frame does not result in strike', function() {
      frame.roll(0);
      frame.roll(10);
      expect(frame.isStrike()).toBe(false);
    });
  });

  describe('#isSpare', function() {
    it('returns true when frame results in spare', function() {
      frame.roll(0);
      frame.roll(10);
      expect(frame.isSpare()).toBe(true);
    });
    it('returns false when frame does not result in spare', function() {
      frame.roll(8);
      frame.roll(1);
      expect(frame.isSpare()).toBe(false);
    });
  });


});

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('#score', function() {
    it('returns 0 by default', function() {
      expect(frame.score).toEqual(0);
    });
  });

  describe('#isComplete', function() {
    it('returns false by default', function() {
      expect(frame.isComplete()).toBe(false);
    });
  });

  describe('#bowl', function() {
    it('throws error if score > 10', function() {
      expect(function(){frame.bowl(11)}).toThrowError('Invalid score');
    });
    it('increases score', function() {
      frame.bowl(5);
      expect(frame.score).toEqual(5);
    });
    it('increases _numberOfThrows', function() {
      frame.bowl(5);
      expect(frame._numberOfThrows).toEqual(1);
    });
    it('throws error if frame is complete', function() {
      frame.bowl(5);
      frame.bowl(5);
      expect(function(){frame.bowl(5)}).toThrowError('Frame is already complete');
    });
    it('increases _numberOfThrows by 2 if score is 10', function() {
      frame.bowl(10);
      expect(frame._numberOfThrows).toEqual(2);
    });
  });

});

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

  describe('#throwArray', function() {
    it('returns [] by default', function() {
      expect(frame.throwArray).toEqual([]);
    });
    it('adds scores to array after bowl', function() {
      frame.bowl(7);
      frame.bowl(2);
      expect(frame.throwArray).toEqual([7,2]);
    });
  });

  describe('#isSpare', function() {
    it('returns false by default', function() {
      expect(frame.isSpare).toBe(false);
    });
  });

  describe('#isStrike', function() {
    it('returns false by default', function() {
      expect(frame.isStrike).toBe(false);
    });
  });

  describe('#_checkForSpare', function() {
    it('sets isSpare to true when spare', function() {
      frame.bowl(2);
      frame.bowl(8);
      expect(frame.isSpare).toBe(true);
    });
    it('pushes "/" into throwArray', function() {
      frame.bowl(2);
      frame.bowl(8);
      expect(frame.throwArray).toContain('/');
    });
  });

  describe('#isComplete', function() {
    it('returns false by default', function() {
      expect(frame.isComplete()).toBe(false);
    });
  });

  describe('#_evaluateThrow', function() {
    it('increases _numberOfThrows by 2 if score is 10', function() {
      frame.bowl(10);
      expect(frame._numberOfThrows).toEqual(2);
    });
    it('pushes "X" into throwArray', function() {
      frame.bowl(10);
      expect(frame.throwArray).toContain('X');
    });
    it('sets isStrike to true when strike', function() {
      frame.bowl(10);
      expect(frame.isStrike).toBe(true);
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
  });

});

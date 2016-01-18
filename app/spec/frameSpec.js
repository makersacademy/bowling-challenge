describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('#getFrameData', function() {
    it('should return an object with rolls and total', function() {
      expect(frame.getFrameData()).toEqual({rolls: [], total: 0, bonus: 0});
    });
  });

  describe('#addRoll', function() {
    it('should add the roll to frame', function() {
      frame.addRoll(5);
      expect(frame.getFrameData().rolls).toEqual([5]);
    });

    it('should calculate the total after both rolls', function() {
      frame.addRoll(3);
      frame.addRoll(6);
      expect(frame.getFrameData().total).toEqual(9);
    });

    it('should lead to the correct recording of a spare', function() {
      frame.addRoll(3);
      frame.addRoll(7);
      expect(frame.getFrameData().bonus).toEqual(1);
    });

    it('should lead to the correct recording of a strike', function() {
      frame.addRoll(10);
      expect(frame.getFrameData().bonus).toEqual(2);
    });

    it('throws error if more than 10 pins used', function() {
      frame.addRoll(8);
      expect(function() {
        frame.addRoll(4);
      }).toThrow('Cannot knock down more than 10 pins');
    });
  });

  describe('#isComplete', function() {
    it('should return true if 2 rolls have been done in frame', function() {
      frame.addRoll(5);
      frame.addRoll(3);
      expect(frame.isComplete()).toBe(true);
    });

    it('should return false if frame is not complete', function() {
      frame.addRoll(5);
      expect(frame.isComplete()).toBe(false);
    });
  });
});

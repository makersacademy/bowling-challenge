describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  })

  describe('#getFrameData', function() {
    it('should return an object with rolls and total', function() {
      expect(frame.getFrameData()).toEqual({rolls: [], total: 0})
    })
  });

  describe('#addRoll', function() {
    it('should add the roll to frame', function() {
      frame.addRoll(5);
      expect(frame.getFrameData().rolls).toEqual([5]);
    });

    it('should calculate the total for this frame after both rolls', function() {
      frame.addRoll(3);
      frame.addRoll(6);
      expect(frame.getFrameData().total).toEqual(9);
    });
  });

  describe('#isComplete', function() {
    it('should return true if 2 rolls have been done in frame', function() {
      frame.addRoll(5);
      frame.addRoll(3);
      expect(frame.isComplete()).toBe(true);
    })

    it('should return false if frame is not complete', function() {
      frame.addRoll(5);
      expect(frame.isComplete()).toBe(false);
    });
  });

});

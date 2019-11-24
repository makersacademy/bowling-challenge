describe ('Frame', function() {
  var frame

  beforeEach(function() {
    frame = new Frame();
});

  describe('#inputFrame', function() {
    it ('adds to frames', function() {
      frame.inputFrame([5, 4]);
      expect(frame.frames.length).toBe(1);
    });
  });

  describe('#calcTotalScore', function() {
    it ('calculates score for all frames', function() {
      frame.frames = [[10, 0], [5, 5], [6, 3], [5, 2]];
      expect(frame.calcTotalScore()).toBe(52);
    });
  });

  describe('#calcFrameScore', function() {
    it ('calculates score for frame', function() {
      rolls = [5, 3];
      expect(frame.calcFrameScore(rolls)).toBe(8);
    });
  });
});

describe("Frame", function() {
  var frame

  describe("totalPoints", function() {
    it('calculates the score for a single frame', function() {
      frame = new Frame([4,5])
      expect(frame.totalPoints()).toBe(9);
    });

    it('calculates the total score for a strike frame', function() {
      frame = new Frame([3,3])
      strikeFrame = new Frame([10])
      expect(strikeFrame.totalPoints(frame)).toBe(16);
    });
  });
});

describe("Frame", function() {
  var frame

  describe("totalPoints", function() {
    it('calculates the score for a single frame', function() {
      frame = new Frame([4,5])
      expect(frame.totalPoints()).toBe(9);
    });
  });
});

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

    it('calculates the total score for a spare frame', function() {
      frame = new Frame([3,3])
      spareFrame = new Frame([5,5])
      expect(spareFrame.totalPoints(frame)).toBe(13);
    });

    it('calculates the total score for 2 strikes in a row given another frame', function() {
      strike1 = new Frame([10])
      strike2 = new Frame([10])
      frame = new Frame([2,6])
      expect(strike1.totalPoints(strike2, frame)).toBe(22)
    });

    it('calculates the total score for 3 strikes in a row', function() {
      strike1 = new Frame([10])
      strike2 = new Frame([10])
      strike3 = new Frame([10])
      expect(strike1.totalPoints(strike2, strike3)).toBe(new Frame([10,10,10]).totalPoints())
    });
  });
});

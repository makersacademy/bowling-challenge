describe('Score', function() {
  var score;

  score = new Score();
  regular_frame = new Frame([3,4]);
  spare_frame = new Frame([5,5]);
  strike_frame = new Frame([10,0]);

  describe('calculateFrameScore', function() {
    it('returns the score for an open frame', function() {
      expect(score.calculateFrameScore(regular_frame)).toEqual(7);
    });
  });
});

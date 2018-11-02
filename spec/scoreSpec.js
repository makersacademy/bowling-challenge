describe('Score', function() {
  var score;

  score = new Score();
  regular_frame = new Frame([3,4]);
  spare_frame = new Frame([5,5]);
  strike_frame = new Frame([10,0]);

  describe('calculateFrameScore', function() {
    it('returns the score for an open frame', function() {
      score.calculateFrameScore([regular_frame])
      expect(regular_frame.score).toEqual(7);
    });

    it('returns the score for a spare frame', function() {
      score.calculateFrameScore([spare_frame, regular_frame])
      expect(spare_frame.score).toEqual(13);
    });

    // it('returns the score for a strike frame', function() {
    //   score.calculateFrameScore([strike_frame, regular_frame])
    //   expect(strike_frame.score).toEqual(24);
    // });
  });
});

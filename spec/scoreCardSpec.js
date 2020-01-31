describe('scorecard', function() {
  let bowling;

  beforeEach(function() {
    scorecard = new scoreCard();
  });

  describe('total score', function() {
    it('has an empty score array as default', function() {
      expect(scorecard.score).toEqual([]);
    });
  });

  describe('frames', function() {
    it('has an empty frames array as default', function() {
      expect(scorecard.frame).toEqual([]);
    });
  });
});
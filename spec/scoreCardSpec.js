describe('scorecard', function() {
  let bowling;

  beforeEach(function() {
    scorecard = new scoreCard();
  });

  describe('', function() {
    it('has an empty score array as default', function() {
      expect(scorecard.score).toEqual([]);
    });
  });
});
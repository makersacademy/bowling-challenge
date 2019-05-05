describe('feature: gutter game', function() {

  beforeEach(function() {
    scorecard = new Scorecard();
    for (var i = 0; i < 20; i++) {
      scorecard.record(0);
    };
  });

  describe('completed game', function() {
    it('knows the game is completed', function() {
      expect(scorecard.isComplete()).toBe(true);
    });
    it('returns a final score total of 0', function() {
      expect(scorecard.total()).toEqual(0);
    });
  });
});

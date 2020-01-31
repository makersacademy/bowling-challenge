describe('scorecard', function() {
  let bowling;

  beforeEach(function() {
    scorecard = new scoreCard();
  });

  describe('total score', function() {
    it('has an empty score array as default', function() {
      expect(scorecard.score).toEqual([]);
    });

    it('frames arrays get pushed into score array', function() {
      scorecard.points(4, 5);
      expect(scorecard.score).toEqual([[4, 5]]);
    });
  });

  describe('frames', function() {
    it('has an empty frames array as default', function() {
      expect(scorecard.frame).toEqual([]);
    });
  });
});
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

    it('empties frames array after each frame', function() {
      scorecard.points(4, 5);
      expect(scorecard.frame).toEqual([]);
    });

    it('has a maximum of 10 frames', function() {
      for (var i = 0; i < 11; i++) {
        scorecard.points(2, 3);
      }
      expect(scorecard.score.length).toEqual(10);
    });
  });

  describe('frames', function() {
    it('has an empty frames array as default', function() {
      expect(scorecard.frame).toEqual([]);
    });
  });

  describe('total', function() {
    it('returns total score after final frame', function() {
      for (var i = 0; i < 10; i++) {
        scorecard.points(2, 3);
      }
      expect(scorecard.totalScore()).toEqual(50);
    });
  });
});
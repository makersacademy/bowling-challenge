describe("ScoreCard", function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new ScoreCard();
  });

  describe('shows current score', function() {
    it('assumes the default score is zero', function() {
      expect(scorecard.totalScore).toBe(0);
    });

    it('has a total score that can be modified', function() {
      scorecard.addPoints(1)
      expect(scorecard.totalScore).toBe(1)
    });

    it('can be reset to 0', function() {
      scorecard.addPoints(10)
      scorecard.resetPoints()
      expect(scorecard.totalScore).toBe(0)
    });
  });

  describe('it shows each frame score', function() {
    it('assumes the default frame score is zero', function() {
      expect(scorecard.frameScore).toBe(0)
    });

    it('can have a frame score that can be modified', function() {
      scorecard.addFramePoints(10)
      expect(scorecard.frameScore).toBe(10)
    });
  });

});

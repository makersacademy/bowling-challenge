describe('ScoreCard', function() {

  beforeEach(function() {
    scorecard = new ScoreCard();
  });

  describe('Play a game', function() {
    it('logs two frames', function() {
      scorecard.addFrame({
        total: function() {
          return 8
        }
      })
      scorecard.addFrame({
        total: function() {
          return 6
        }
      })
      expect(scorecard.frames.length).toEqual(2);
    });
  });

});

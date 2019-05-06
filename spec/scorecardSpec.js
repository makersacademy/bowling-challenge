describe('Bowling ScoreCard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new ScoreCard();
  });

  describe('Playing a game', function() {
    it('user can roll a gutter ball', function() {
      for (var i = 0; i < 20; i++) {
        scorecard.roll(0);
      }
      expect(scorecard.score()).toEqual(0);
    });
  });

});

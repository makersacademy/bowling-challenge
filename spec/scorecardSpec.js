describe('Bowling ScoreCard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new ScoreCard();
  });

  describe('Scoring a game', function() {
    it('user can roll a gutter ball', function() {
      rollHelper(0, 20); 
      expect(scorecard.score()).toEqual(0);
    });

    it('user can roll a game of 1s', function() {
      rollHelper(1, 20);
      expect(scorecard.score()).toEqual(20);
    });
  });

  var rollHelper = function (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      scorecard.roll(pins);
    }
  };

});

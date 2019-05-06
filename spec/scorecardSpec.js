describe('Bowling ScoreCard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new ScoreCard();
  });

  it('frames are empty at game start', function() {
    expect(scorecard.frames()).toEqual([]);
  });

  it('starts with a score of 0', function() {
    expect(scorecard._totalScore).toEqual(0);
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

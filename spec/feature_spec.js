describe ('Example Bowling Game', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe('Game 1', function() {
    it ('The scorecard calculates the correct total', function() {
      scorecard.recordScore(1, 8)
      scorecard.recordScore(1, 1)
      scorecard.recordScore(2, 0)
      scorecard.recordScore(2, 9)
      scorecard.recordScore(3, 2)
      scorecard.recordScore(3, 8)
      scorecard.recordScore(4, 10)
      scorecard.recordScore(5, 6)
      scorecard.recordScore(5, 3)
      scorecard.recordScore(6, 7)
      scorecard.recordScore(6, 0)
      scorecard.recordScore(7, 5)
      scorecard.recordScore(7, 2)
      scorecard.recordScore(8, 10)
      scorecard.recordScore(9, 0)
      scorecard.recordScore(9, 6)
      scorecard.recordScore(10, 2)
      scorecard.recordScore(10, 8)
      scorecard.recordScore(10, 10)
      expect(scorecard._runningTotal()).toEqual(122)
    });
  });

});

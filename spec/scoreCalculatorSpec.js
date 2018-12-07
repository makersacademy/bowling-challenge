'user strict'

describe('ScoreCalculator', function() {
  var scoreCalculator;

  beforeEach(function(){
    scoreCalculator = new ScoreCalculator();
  });

  describe('sumRoundScore', function(){
    it('returns the sum a frames scores', function() {
      expect(scoreCalculator.sumRoundScore([3,5])).toEqual(8);
    })
  })

  describe('totalScore', function() {
    it('returns the total score for the match if there are no spares or strikes', function() {
      var match = new Match()

      for (var i = 0; i < 10; i++) {
        match.playFrame(3, 4);
      }

      var scoresArray = match.runningFrameScores
      var strikeRounds = match.strikeRounds
      var spareRounds = match.spareRounds

      expect(scoreCalculator.totalScore(scoresArray, strikeRounds, spareRounds)).toEqual(70);
    })

    it('returns the total score for the match if there are spares and strikes', function() {
      var match = new Match()

      match.playFrame(1, 2);
      match.playFrame(4, 3);
      match.playFrame(10);
      match.playFrame(4, 3);
      match.playFrame(5, 5);
      match.playFrame(1, 2);
      match.playFrame(3, 4);
      match.playFrame(4, 2);
      match.playFrame(1, 3);
      match.playFrame(4, 5);

      var scoresArray = match.runningFrameScores
      var strikeRounds = match.strikeRounds
      var spareRounds = match.spareRounds

      expect(scoreCalculator.totalScore(scoresArray, strikeRounds, spareRounds)).toEqual(74);

    })
  })

  describe('doubleRoundsAfterStrikes', function() {
    it ('returns an array of the rounds that come after strikes', function() {
      var match = new Match()

      match.playFrame(4, 5);
      match.playFrame(10);
      match.playFrame(2, 4);
      match.playFrame(10);
      match.playFrame(3, 2);

      var scoresArray = match.runningFrameScores
      var strikeRounds = match.strikeRounds

      expect(scoreCalculator.doubleRoundsAfterStrikes(scoresArray, strikeRounds)).toEqual([[4,5], [10], [2,2,4,4], [10], [3,3,2,2]])
    })
  })

  describe('doubleRollsAfterSpares', function() {
    it ('returns an array of the rounds that come after spare', function() {
      var match = new Match()

      match.playFrame(5, 5);
      match.playFrame(2, 4);
      match.playFrame(3, 7);
      match.playFrame(3, 3);

      var scoresArray = match.runningFrameScores
      var spareRounds = match.spareRounds

      expect(scoreCalculator.doubleRollsAfterSpares(scoresArray, spareRounds)).toEqual([[5,5], [2,4,2], [3,7], [3,3,3]])
    })
  })

})

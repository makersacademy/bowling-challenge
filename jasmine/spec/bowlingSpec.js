describe('BowlingScorecard',function() {

  var bowlingScorecard;

  beforeEach(function() {
    bowlingScorecard = new BowlingScorecard();
  });

  describe('Roll Score', function() {
    it('Roll score is set to 0 at the beginning of the game', function() {
      expect(bowlingScorecard.getCurrentRollScore()).toEqual(0);
    });

    it('Bowler enters roll score', function() {
      bowlingScorecard.rollScore(5);
      expect(bowlingScorecard.getCurrentRollScore()).toEqual(5);
      bowlingScorecard.rollScore(3);
      expect(bowlingScorecard.getCurrentRollScore()).toEqual(3);
    });

    it('Roll score 2 is auto updated to 0 when roll score 1 equals 10', function() {
      bowlingScorecard.rollScore(10);
      expect(bowlingScorecard.frame).toEqual([10, 0]);
    });
  });

  describe('Frame Score', function() {
    it('Roll score is added to frame score', function() {
      bowlingScorecard.rollScore(5);
      bowlingScorecard.rollScore(3);
      expect(bowlingScorecard.frame).toEqual([5, 3]);
    });

    it('Frame array reset to empty after 2 rolls', function() {
      bowlingScorecard.rollScore(5);
      bowlingScorecard.rollScore(3);
      bowlingScorecard.totalScore();
      expect(bowlingScorecard.frame).toEqual([])
    });
  });

  describe('Total Score', function() {
    it('Each frame score gets added', function() {
      bowlingScorecard.rollScore(5);
      bowlingScorecard.rollScore(3);
      bowlingScorecard.totalScore();
      bowlingScorecard.rollScore(6);
      bowlingScorecard.rollScore(2);
      bowlingScorecard.totalScore();
      expect(bowlingScorecard.total.length).toEqual(2);
      expect(bowlingScorecard.total).toEqual([[5, 3], [6, 2]]);
    });
  });
});

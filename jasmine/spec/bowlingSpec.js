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
      expect(bowlingScorecard.frame).toEqual(jasmine.arrayContaining([10, 0]));
    });
  });

  describe('Frame Score', function() {
    it('Roll score is added to frame score', function() {
      bowlingScorecard.rollScore(5);
      bowlingScorecard.rollScore(3);
      expect(bowlingScorecard.frame).toEqual(jasmine.arrayContaining([5, 3]));
    });
  });
});

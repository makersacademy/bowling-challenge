describe('BowlingScorecard',function() {

  var bowlingScorecard;

  beforeEach(function() {
    bowlingScorecard = new BowlingScorecard();
  });

  describe('Roll Score', function() {
    it('Roll score is set to 0 at the beginning of the game', function() {
      expect(bowlingScorecard.getCurrentRollScore()).toEqual(0);
    });

    it('User enters roll score', function() {
      bowlingScorecard.rollScore(5);
      expect(bowlingScorecard.getCurrentRollScore()).toEqual(5);
      bowlingScorecard.rollScore(3);
      expect(bowlingScorecard.getCurrentRollScore()).toEqual(3);
    });
  });

  describe('Frame Score', function() {
    it('Roll score is added to frame score', function() {
      bowlingScorecard.rollScore(5);
      bowlingScorecard.frameScore();
      expect(bowlingScorecard.frame).toContain(5);
    });
  });
});

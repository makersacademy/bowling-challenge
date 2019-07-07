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
    it('Each frame score gets added to the total', function() {
      bowlingScorecard.rollScore(5);
      bowlingScorecard.rollScore(3);
      bowlingScorecard.totalScore();
      bowlingScorecard.rollScore(6);
      bowlingScorecard.rollScore(2);
      bowlingScorecard.totalScore();
      expect(bowlingScorecard.total.length).toEqual(2);
      expect(bowlingScorecard.total).toEqual([[5, 3], [6, 2]]);
    });

    it('Returns a cum score for the game', function() {
      bowlingScorecard.rollScore(5);
      bowlingScorecard.rollScore(3);
      bowlingScorecard.totalScore();
      bowlingScorecard.rollScore(6);
      bowlingScorecard.rollScore(2);
      bowlingScorecard.totalScore();
      expect(bowlingScorecard.cumScore()).toEqual(16);
    });
  });

  describe('Bonus Points', function() {
    it('Current frame score added to previous frame if strike achieved on first roll in previous frame', function(){
      bowlingScorecard.rollScore(10);
      bowlingScorecard.totalScore();
      bowlingScorecard.rollScore(5);
      bowlingScorecard.rollScore(3);
      bowlingScorecard.totalScore();
      bowlingScorecard.counter();
      bowlingScorecard.bonusStrike();
      expect(bowlingScorecard.total.length).toEqual(2);
      expect(bowlingScorecard.total).toEqual([[10, 0, 8], [5, 3]])
      expect(bowlingScorecard.cumScore()).toEqual(26);
    });
  });

  describe('Frame Counter', function() {
    it('Increases by 1 after each frame has been completed', function() {
      bowlingScorecard.rollScore(5);
      bowlingScorecard.rollScore(3);
      bowlingScorecard.totalScore();
      bowlingScorecard.rollScore(6);
      bowlingScorecard.rollScore(2);
      bowlingScorecard.totalScore();
      bowlingScorecard.counter();
      expect(bowlingScorecard.frameCount).toEqual(2);
    });

    it('previousFrame function returns previous frame', function() {
      bowlingScorecard.rollScore(5);
      bowlingScorecard.rollScore(3);
      bowlingScorecard.totalScore();
      bowlingScorecard.rollScore(6);
      bowlingScorecard.rollScore(2);
      bowlingScorecard.totalScore();
      bowlingScorecard.counter();
      expect(bowlingScorecard.previousFrame()).toEqual([5, 3])
    });
  });
});

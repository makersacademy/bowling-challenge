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

    it('Perfect game - 12 strikes - total score = 300', function() {
      bowlingScorecard.rollScore(10);
      bowlingScorecard.totalScore();
      bowlingScorecard.counter();
      bowlingScorecard.bonusStrike1();
      bowlingScorecard.bonusStrike2();
      bowlingScorecard.rollScore(10);
      bowlingScorecard.totalScore();
      bowlingScorecard.counter();
      bowlingScorecard.bonusStrike1();
      bowlingScorecard.bonusStrike2();
      bowlingScorecard.rollScore(10);
      bowlingScorecard.totalScore();
      bowlingScorecard.counter();
      bowlingScorecard.bonusStrike1();
      bowlingScorecard.bonusStrike2();
      bowlingScorecard.rollScore(10);
      bowlingScorecard.totalScore();
      bowlingScorecard.counter();
      bowlingScorecard.bonusStrike1();
      bowlingScorecard.bonusStrike2();
      bowlingScorecard.rollScore(10);
      bowlingScorecard.totalScore();
      bowlingScorecard.counter();
      bowlingScorecard.bonusStrike1();
      bowlingScorecard.bonusStrike2();
      bowlingScorecard.rollScore(10);
      bowlingScorecard.totalScore();
      bowlingScorecard.counter();
      bowlingScorecard.bonusStrike1();
      bowlingScorecard.bonusStrike2();
      bowlingScorecard.rollScore(10);
      bowlingScorecard.totalScore();
      bowlingScorecard.counter();
      bowlingScorecard.bonusStrike1();
      bowlingScorecard.bonusStrike2();
      bowlingScorecard.rollScore(10);
      bowlingScorecard.totalScore();
      bowlingScorecard.counter();
      bowlingScorecard.bonusStrike1();
      bowlingScorecard.bonusStrike2();
      bowlingScorecard.rollScore(10);
      bowlingScorecard.totalScore();
      bowlingScorecard.counter();
      bowlingScorecard.bonusStrike1();
      bowlingScorecard.bonusStrike2();
      bowlingScorecard.rollScore(10);
      bowlingScorecard.totalScore();
      bowlingScorecard.counter();
      bowlingScorecard.bonusStrike1();
      bowlingScorecard.bonusStrike2();
      bowlingScorecard.lastFrameStrikeBonus(10, 10);
      bowlingScorecard.counter();
      expect(bowlingScorecard.frameCount).toEqual(10);
      expect(bowlingScorecard.total[9]).toEqual([10, 0, 20]);
      expect(bowlingScorecard.cumScore()).toEqual(300);
    });
  });

  describe('Bonus Points', function() {
    it('Current frame score added to previous frame if strike achieved on first roll in previous frame', function() {
      bowlingScorecard.rollScore(10);
      bowlingScorecard.totalScore();
      bowlingScorecard.rollScore(5);
      bowlingScorecard.rollScore(3);
      bowlingScorecard.totalScore();
      bowlingScorecard.counter();
      bowlingScorecard.bonusStrike1();
      expect(bowlingScorecard.total.length).toEqual(2);
      expect(bowlingScorecard.total).toEqual([[10, 0, 8], [5, 3]])
      expect(bowlingScorecard.cumScore()).toEqual(26);
    });

    it ('If strike in previous frame and current frame achieved, add 10 plus first roll score of next frame to previous frame', function() {
      bowlingScorecard.rollScore(10);
      bowlingScorecard.totalScore();
      bowlingScorecard.counter();
      bowlingScorecard.bonusStrike1();
      bowlingScorecard.bonusStrike2();
      bowlingScorecard.rollScore(10);
      bowlingScorecard.totalScore();
      bowlingScorecard.counter();
      bowlingScorecard.bonusStrike1();
      bowlingScorecard.bonusStrike2();
      bowlingScorecard.rollScore(5);
      bowlingScorecard.rollScore(3);
      bowlingScorecard.totalScore();
      bowlingScorecard.counter();
      bowlingScorecard.bonusStrike1();
      bowlingScorecard.bonusStrike2();
      bowlingScorecard.rollScore(5);
      bowlingScorecard.rollScore(3);
      bowlingScorecard.totalScore();
      bowlingScorecard.counter();
      bowlingScorecard.bonusStrike1();
      bowlingScorecard.bonusStrike2();
      expect(bowlingScorecard.total.length).toEqual(4);
      expect(bowlingScorecard.total).toEqual([[10, 0, 10, 5], [10, 0, 8], [5, 3], [5, 3]])
      expect(bowlingScorecard.cumScore()).toEqual(59);
    });

    it('Roll 1 score of current frame added to previous frame if spare achieved on previous frame', function() {
      bowlingScorecard.rollScore(8);
      bowlingScorecard.rollScore(2);
      bowlingScorecard.totalScore();
      bowlingScorecard.rollScore(5);
      bowlingScorecard.rollScore(3);
      bowlingScorecard.totalScore();
      bowlingScorecard.counter();
      bowlingScorecard.bonusSpare();
      expect(bowlingScorecard.total.length).toEqual(2);
      expect(bowlingScorecard.total).toEqual([[8, 2, 5], [5, 3]])
      expect(bowlingScorecard.cumScore()).toEqual(23);
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

    it('previousFrame1 function returns previous frame', function() {
      bowlingScorecard.rollScore(5);
      bowlingScorecard.rollScore(3);
      bowlingScorecard.totalScore();
      bowlingScorecard.rollScore(6);
      bowlingScorecard.rollScore(2);
      bowlingScorecard.totalScore();
      bowlingScorecard.counter();
      expect(bowlingScorecard.total[bowlingScorecard.frameCount - 2]).toEqual([5, 3]);
      expect(bowlingScorecard.previousFrame1()).toEqual([5, 3]);
    });

    it('previousFrame2 function returns frame from 2 frames ago', function() {
      bowlingScorecard.rollScore(5);
      bowlingScorecard.rollScore(3);
      bowlingScorecard.totalScore();
      bowlingScorecard.rollScore(6);
      bowlingScorecard.rollScore(2);
      bowlingScorecard.totalScore();
      bowlingScorecard.rollScore(8);
      bowlingScorecard.rollScore(1);
      bowlingScorecard.totalScore();
      bowlingScorecard.counter();
      expect(bowlingScorecard.total[bowlingScorecard.frameCount - 3]).toEqual([5, 3]);
      expect(bowlingScorecard.previousFrame2()).toEqual([5, 3]);
    });
  });

  describe('Last Frame - Frame 10', function() {
    it('Allows 2 additional rolls if roll 1 in frame 10 is a strike', function() {
      bowlingScorecard.rollScore(5);
      bowlingScorecard.rollScore(3);
      bowlingScorecard.totalScore();
      bowlingScorecard.rollScore(5);
      bowlingScorecard.rollScore(3);
      bowlingScorecard.totalScore();
      bowlingScorecard.rollScore(5);
      bowlingScorecard.rollScore(3);
      bowlingScorecard.totalScore();
      bowlingScorecard.rollScore(5);
      bowlingScorecard.rollScore(3);
      bowlingScorecard.totalScore();
      bowlingScorecard.rollScore(5);
      bowlingScorecard.rollScore(3);
      bowlingScorecard.totalScore();
      bowlingScorecard.rollScore(5);
      bowlingScorecard.rollScore(3);
      bowlingScorecard.totalScore();
      bowlingScorecard.rollScore(5);
      bowlingScorecard.rollScore(3);
      bowlingScorecard.totalScore();
      bowlingScorecard.rollScore(5);
      bowlingScorecard.rollScore(3);
      bowlingScorecard.totalScore();
      bowlingScorecard.rollScore(5);
      bowlingScorecard.rollScore(3);
      bowlingScorecard.totalScore();
      bowlingScorecard.rollScore(10);
      bowlingScorecard.totalScore();
      bowlingScorecard.counter();
      bowlingScorecard.lastFrameStrikeBonus(5, 3);
      expect(bowlingScorecard.frameCount).toEqual(10);
      expect(bowlingScorecard.total.length).toEqual(10);
      expect(bowlingScorecard.total).toEqual([[5, 3], [5, 3], [5, 3], [5, 3], [5, 3], [5, 3], [5, 3], [5, 3], [5, 3], [10, 0, 8]])
      expect(bowlingScorecard.cumScore()).toEqual(90);
    });
  });
});

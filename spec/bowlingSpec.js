describe('Bowling Scorecard', function() {

  var bowlingScorecard

  beforeEach(function() {
    bowlingScorecard = new BowlingScorecard();
  });

  describe('when initialised is', function() {
    it('set at 0', function() {
      expect(bowlingScorecard.totalScore).toEqual(0);
    });
  });

  describe('when one ball is bowled', function() {
    it('sets score to 3', function() {
      bowlingScorecard.nextBall(3);
      bowlingScorecard.nextBall(0);
      expect(bowlingScorecard.totalScore).toEqual(3);
      expect(bowlingScorecard.history[0][0]).toEqual(3);
      expect(bowlingScorecard.history[0][1]).toEqual(0);
    });
  });

  describe('when one frame is bowled', function() {
    it('sets scroe to 7', function() {
      bowlingScorecard.nextBall(3);
      bowlingScorecard.nextBall(4);
      expect(bowlingScorecard.totalScore).toEqual(7);
      expect(bowlingScorecard.history[0][0]).toEqual(3);
      expect(bowlingScorecard.history[0][1]).toEqual(4);
    });
  });

  describe('when two frames are played', function() {
    it('sets score to 10', function() {
      bowlingScorecard.nextBall(1);
      bowlingScorecard.nextBall(2);
      bowlingScorecard.nextBall(3);
      bowlingScorecard.nextBall(4);
      expect(bowlingScorecard.totalScore).toEqual(10);
      expect(bowlingScorecard.history[1][0]).toEqual(3);
      expect(bowlingScorecard.history[1][1]).toEqual(4);
    });
  });

  describe('when there is a strike just get one ball per frame', function() {
    it('sets score to 10 and 0', function() {
      bowlingScorecard.nextBall(10);
      bowlingScorecard.nextBall(4);
      expect(bowlingScorecard.history[0][0]).toEqual(10);
      expect(bowlingScorecard.history[0][1]).toEqual(0);
      expect(bowlingScorecard.history[1][0]).toEqual(4);
    });
  });

  describe('when there is a spare you get a bonus for the previous round', function() {
    it('sets previous score to 14', function() {
      bowlingScorecard.nextBall(7);
      bowlingScorecard.nextBall(3);
      bowlingScorecard.nextBall(4);
      bowlingScorecard.nextBall(0);
      expect(bowlingScorecard.frameScore[0]).toEqual(14);
      expect(bowlingScorecard.history[1][0]).toEqual(4);
      expect(bowlingScorecard.totalScore).toEqual(18);
    });
  });

  describe('when there is a strike you get a bonus for the next two balls', function() {
    it('sets previous score to 14', function() {
      bowlingScorecard.nextBall(10);
      bowlingScorecard.nextBall(3);
      bowlingScorecard.nextBall(4);
      expect(bowlingScorecard.frameScore[0]).toEqual(17);
      expect(bowlingScorecard.history[0][0]).toEqual(10);
      expect(bowlingScorecard.totalScore).toEqual(24);
    });
  });

  describe('when there is a double strike you get a bonus for the next two balls', function() {
    it('sets score to 47', function() {
      bowlingScorecard.nextBall(10);
      bowlingScorecard.nextBall(10);
      bowlingScorecard.nextBall(3);
      bowlingScorecard.nextBall(4);
      expect(bowlingScorecard.frameScore[0]).toEqual(23);
      expect(bowlingScorecard.frameScore[1]).toEqual(17);
      expect(bowlingScorecard.frameScore[2]).toEqual(7);
      expect(bowlingScorecard.totalScore).toEqual(47);
    });
  });

  describe('when there is a triple strike - turkey, you get a bonus for the next two balls', function() {
    it('sets previous score to 14', function() {
      bowlingScorecard.nextBall(10);
      bowlingScorecard.nextBall(10);
      bowlingScorecard.nextBall(10);
      bowlingScorecard.nextBall(4);
      bowlingScorecard.nextBall(3);
      expect(bowlingScorecard.frameScore[0]).toEqual(30);
      expect(bowlingScorecard.frameScore[1]).toEqual(24);
      expect(bowlingScorecard.frameScore[2]).toEqual(17);
      expect(bowlingScorecard.frameScore[3]).toEqual(7);
      expect(bowlingScorecard.totalScore).toEqual(78);
    });
  });

  describe('On the 10th frame if you dont get a spare only 2 balls are bowled', function() {
    it('sets previous score to 14', function() {
      for (var i = 1; i < 19; i++) {
        bowlingScorecard.nextBall(1);
      };
      // last frame - 18 to this point
      bowlingScorecard.nextBall(2);
      bowlingScorecard.nextBall(2);
      expect(bowlingScorecard.frameScore[9]).toEqual(4);
      expect(bowlingScorecard.totalScore).toEqual(22);
    });
  });

describe('On the 10th frame if you get a spare, bowl another ball', function() {
    it('sets previous score to 14', function() {
      for (var i = 1; i < 19; i++) {
        bowlingScorecard.nextBall(1);
      };
      // last frame - 18 to this point
      bowlingScorecard.nextBall(8);
      bowlingScorecard.nextBall(2);
      bowlingScorecard.nextBall(2);
      expect(bowlingScorecard.frameScore[9]).toEqual(14);
      expect(bowlingScorecard.totalScore).toEqual(32);
    });
  });

describe('On the 10th frame if you get a strike, bowl another ball', function() {
    it('sets previous score to 34', function() {
      for (var i = 1; i < 19; i++) {
        bowlingScorecard.nextBall(1);
      };
      // last frame - 18 to this point
      bowlingScorecard.nextBall(10);
      bowlingScorecard.nextBall(2);
      bowlingScorecard.nextBall(2);
      expect(bowlingScorecard.frameScore[9]).toEqual(16);
      expect(bowlingScorecard.totalScore).toEqual(34);
    });
  });

describe('On the 10th frame if you get 2 strike, bowl another ball', function() {
    it('sets previous score to 58', function() {
      for (var i = 1; i < 19; i++) {
        bowlingScorecard.nextBall(1);
      };
      // last frame - 18 to this point
      bowlingScorecard.nextBall(10);
      bowlingScorecard.nextBall(10);
      bowlingScorecard.nextBall(2);
      expect(bowlingScorecard.frameScore[9]).toEqual(40);
      expect(bowlingScorecard.totalScore).toEqual(58);
    });
  });



});
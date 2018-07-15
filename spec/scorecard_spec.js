describe ('Scorecard', function() {

  var scorecard;
  var frame1;
  var frame2;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe('.initialize', function() {
    it ('initializes with an array of 10 frames', function() {
      expect(scorecard.frames.length).toEqual (10);
    });
    it ('initializes with an array for current bonus frames', function(){
      expect(scorecard.currentBonusFrames).toEqual([]);
    });
    it ('initializes with an array for future bonus frames', function(){
      expect(scorecard.futureBonusFrames).toEqual([]);
    });
  });

  describe('.addScore', function() {
    it ('adds a score to the correct frame', function() {
      var frame = 1;
      var score = 5
      scorecard.addScore(frame, score)
      expect(scorecard.frames[(frame - 1)].totalScore()).toEqual (5);
    });
  });

  describe('.totalScore', function() {
    it ('calculates a running total of all frame scores', function() {
      scorecard.addScore(1, 3)
      scorecard.addScore(2, 4)
      expect(scorecard.totalScore()).toEqual (7);
    });
  });

  describe('When the player rolls an ordinary number', function() {
    describe('.checkScoreType', function() {
      it ('returns ordinary number', function() {
        scorecard.addScore(1, 3)
        expect(scorecard.checkScoreType(1, 3)).toEqual('Ordinary Roll')
      });
    });
    describe('._setBonusCondition', function() {
      it ('keeps the current bonus frames empty', function() {
        scorecard.addScore(1,3)
        expect(scorecard.currentBonusFrames).toEqual([0, 0])
      });
      it ('keeps the future bonus frames empty', function() {
        scorecard.addScore(1,3)
        expect(scorecard.futureBonusFrames).toEqual([0])
      });
    });
  });

  describe('When the player rolls a spare', function() {
    describe('.checkScoreType', function() {
      it ('returns spare', function() {
        scorecard.addScore(1, 3)
        scorecard.addScore(1, 7)
        expect(scorecard.checkScoreType(1, 3)).toEqual('Spare')
      });
    });
    describe('._setBonusCondition', function() {
      it ('adds the frame to the current bonus frames', function() {
        scorecard.addScore(1,3)
        scorecard.addScore(1,7)
        expect(scorecard.currentBonusFrames).toEqual([0, 1])
      });
      it ('keeps the future bonus frames empty', function() {
        scorecard.addScore(1,3)
        scorecard.addScore(1,7)
        expect(scorecard.futureBonusFrames).toEqual([0])
      });
    });
  })

  describe('When the player rolls a strike', function() {
    describe('.checkScoreType', function() {
      it ('returns strike', function() {
        scorecard.addScore(1, 10)
        expect(scorecard.checkScoreType(1, 10)).toEqual('Strike')
      });
    });
    describe('._setBonusCondition', function() {
      it ('adds the frame to the current bonus frames', function() {
        scorecard.addScore(1, 10)
        expect(scorecard.currentBonusFrames).toEqual([0, 1])
      });
      it ('add the frame to the future bonus frames', function() {
        scorecard.addScore(1, 10)
        expect(scorecard.futureBonusFrames).toEqual([1])
      });
    });
  })

});

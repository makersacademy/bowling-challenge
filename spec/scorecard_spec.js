describe ('Scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe('.initialize', function() {
    it ('initializes with an array of 10 frames', function() {
      expect(scorecard.frames.length).toEqual (10);
    });
    it ('initializes with an array for current bonus frames', function(){
      expect(scorecard.currentBonusFrames).toEqual([0,0]);
    });
    it ('initializes with an array for future bonus frames', function(){
      expect(scorecard.futureBonusFrames).toEqual([0]);
    });
  });

  describe('.addScore', function() {
    it ('adds the basic score to the correct frame', function() {
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
    beforeEach(function() {
      scorecard.addScore(2, 4);
    });

    describe('.checkScoreType', function() {
      it ('returns ordinary number', function() {
        expect(scorecard.checkScoreType(2, 4)).toEqual('Ordinary Roll')
      });
    });
    describe('._setBonusCondition', function() {
      it ('keeps the current bonus frames empty', function() {
        expect(scorecard.currentBonusFrames).toEqual([0, 0])
      });
      it ('keeps the future bonus frames empty', function() {
        expect(scorecard.futureBonusFrames).toEqual([0])
      });
    });
    describe('.addBonusScore', function() {
      it ('adds the bonus score to the correct frame', function() {
        scorecard.addScore(2, 5)
        scorecard.addScore(2, 3)
        expect(scorecard.frames[0].totalScore()).toEqual (4);
      });
    });
  });

  describe('When the player rolls a spare', function() {
    beforeEach(function() {
      scorecard.addScore(1, 3)
      scorecard.addScore(1, 7)
    });

    describe('.checkScoreType', function() {
      it ('returns spare', function() {
        expect(scorecard.checkScoreType(1, 7)).toEqual('Spare')
      });
    });
    describe('._setBonusCondition', function() {
      it ('adds the frame to the current bonus frames', function() {
        expect(scorecard.currentBonusFrames).toEqual([0, 1])
      });
      it ('keeps the future bonus frames empty', function() {
        expect(scorecard.futureBonusFrames).toEqual([0])
      });
    });
    describe('.addBonusScore', function() {
      it ('adds the bonus score to the correct frame', function() {
        scorecard.addScore(2, 5)
        scorecard.addScore(2, 3)
        expect(scorecard.frames[0].totalScore()).toEqual (15);
      });
    });
  })

  describe('When the player rolls a strike', function() {
    beforeEach(function() {
      scorecard.addScore(1, 10)
    });

    describe('.checkScoreType', function() {
      it ('returns strike', function() {
        expect(scorecard.checkScoreType(1, 10)).toEqual('Strike')
      });
    });
    describe('._setBonusCondition', function() {
      it ('adds the frame to the current bonus frames', function() {
        expect(scorecard.currentBonusFrames).toEqual([0, 1])
      });
      it ('add the frame to the future bonus frames', function() {
        expect(scorecard.futureBonusFrames).toEqual([1])
      });
    });
    describe('.addBonusScore', function() {
      it ('adds the bonus score to the correct frame', function() {
        scorecard.addScore(2, 5)
        scorecard.addScore(2, 3)
        expect(scorecard.frames[0].totalScore()).toEqual (18);
      });
    });
  });

  describe('When the player rolls 2 strikes', function() {
    beforeEach(function() {
      scorecard.addScore(1, 10)
      scorecard.addScore(2, 10)
    });

    describe('._setBonusCondition', function() {
      it ('adds 2 frame to the current bonus frames', function() {
        expect(scorecard.currentBonusFrames).toEqual([1, 2])
      });
      it ('add the frame to the future bonus frames', function() {
        expect(scorecard.futureBonusFrames).toEqual([2])
      });
    });
  })

});

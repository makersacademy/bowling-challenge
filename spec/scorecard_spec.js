describe ('Scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe('.initialize', function() {
    it ('initializes with an array of 10 frames', function() {
      expect(scorecard._frames.length).toEqual (10);
    });
    it ('initializes with an array for current bonus frames', function(){
      expect(scorecard._currentBonusFrames).toEqual([0,0]);
    });
    it ('initializes with an array for future bonus frames', function(){
      expect(scorecard._futureBonusFrames).toEqual([0]);
    });
  });

  describe('._addScoreToThisFrame', function() {
    it ('adds the basic score to the correct frame', function() {
      var frame = 1;
      var score = 5
      scorecard._addScoreToThisFrame(frame, score)
      expect(scorecard._frames[(frame - 1)].totalFrameScore()).toEqual (5);
    });
  });

  describe('._runningTotal', function() {
    it ('calculates a running total of all frame scores', function() {
      scorecard.recordScore(1, 3)
      scorecard.recordScore(2, 4)
      expect(scorecard._runningTotal()).toEqual (7);
    });
  });

  describe('.currentFrame', function() {
    xit ('stores the current frame', function() {
      var frame2 = new Frame();
      scorecard.recordScore(2, 3);
      expect(scorecard.currentFrame).toEqual (frame2);
    });
  });

  describe('When the player rolls an ordinary number', function() {
    beforeEach(function() {
      scorecard.recordScore(1, 4);
    });

    describe('._updateBonusFrames', function() {
      it ('keeps the current bonus frames empty', function() {
        expect(scorecard._currentBonusFrames).toEqual([0, 0])
      });
      it ('keeps the future bonus frames empty', function() {
        expect(scorecard._futureBonusFrames).toEqual([0])
      });
    });
    describe('._addBonusToOtherFrames', function() {
      it ('adds the bonus score to the correct frame', function() {
        expect(scorecard._frames[0].totalFrameScore()).toEqual (4);
      });
    });
  });

  describe('When the player rolls a spare', function() {
    beforeEach(function() {
      scorecard.recordScore(1, 3)
      scorecard.recordScore(1, 7)
    });

    describe('._updateBonusFrames', function() {
      it ('adds the frame to the current bonus frames', function() {
        expect(scorecard._currentBonusFrames).toEqual([0, 1])
      });
      it ('keeps the future bonus frames empty', function() {
        expect(scorecard._futureBonusFrames).toEqual([0])
      });
    });
    describe('._addBonusToOtherFrames', function() {
      it ('adds the bonus score to the correct frame', function() {
        scorecard.recordScore(2, 5)
        scorecard.recordScore(2, 3)
        expect(scorecard._frames[0].totalFrameScore()).toEqual (15);
      });
    });
  })

  describe('When the player rolls a strike', function() {
    beforeEach(function() {
      scorecard.recordScore(1, 10)
    });

    describe('._updateBonusFrames', function() {
      it ('adds the frame to the current bonus frames', function() {
        expect(scorecard._currentBonusFrames).toEqual([0, 1])
      });
      it ('adds the frame to the future bonus frames', function() {
        expect(scorecard._futureBonusFrames).toEqual([1])
      });
    });
    describe('._addBonusToOtherFrames', function() {
      it ('adds the bonus score to the correct frame', function() {
        scorecard.recordScore(2, 5)
        scorecard.recordScore(2, 3)
        expect(scorecard._frames[0].totalFrameScore()).toEqual (18);
      });
    });
  });

  describe('When the player rolls 2 strikes', function() {
    beforeEach(function() {
      scorecard.recordScore(1, 10)
      scorecard.recordScore(2, 10)
    });

    describe('._updateBonusFrames', function() {
      it ('adds 2 frame to the current bonus frames', function() {
        expect(scorecard._currentBonusFrames).toEqual([1, 2])
      });
      it ('adds the frame to the future bonus frames', function() {
        expect(scorecard._futureBonusFrames).toEqual([2])
      });
    });
  });

  describe('In the final round', function() {
    beforeEach(function() {
      scorecard.recordScore(9, 10)
      scorecard.recordScore(10, 10)
    });

    describe('._updateBonusFrames', function() {
      it ('does not add bonuses to the tenth frame', function() {
        expect(scorecard._currentBonusFrames).toEqual([9, 0])
      });
      it ('does not add the frame to the future bonus frames', function() {
        expect(scorecard._futureBonusFrames).toEqual([0])
      });
    });
  })

});

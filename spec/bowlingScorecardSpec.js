describe ("BowlingScorecard", function(){

  beforeEach(function(){
    bowlingScorecard = new BowlingScorecard();
  });

  previousFrame = function() {
    return bowlingScorecard._frames[bowlingScorecard._frames.length-2];
  };

  secondPreviousFrame = function() {
    return bowlingScorecard._frames[bowlingScorecard._frames.length-3];
  };

  describe('#score', function(){
    it('returns score', function(){
      bowlingScorecard.addScore(5);
      expect(bowlingScorecard.score()).toEqual(5);
    });
  });

  describe('frameNumber', function(){
    it('returns 1 for first frame', function(){
      expect(bowlingScorecard.frameNumber()).toEqual(1);
    });
  });

  describe('#pinsAvailableToHit', function(){
    it('returns 10 at start of frame', function(){
      expect(bowlingScorecard.pinsAvailableToHit()).toEqual(10);
    });
    it('returns 5 if 5 pins hit on first bowl', function(){
      bowlingScorecard.addScore(5);
      expect(bowlingScorecard.pinsAvailableToHit()).toEqual(5);
    });
  });

  describe('#addScore', function() {
    it('should add a score to a frame', function(){
      bowlingScorecard.addScore(5);
      expect(bowlingScorecard.frame().score()).toEqual(5);
    });
    describe('add two scores to a frame', function(){
      beforeEach(function(){
        bowlingScorecard.addScore(5);
        bowlingScorecard.addScore(5);
      });
      it('should create a new frame', function(){
        expect(bowlingScorecard.frameNumber()).toEqual(2);
      });
      it('should complete the frame', function(){
        expect(previousFrame().isComplete()).toBeTruthy();
      });
      it('should store the total of two rolls', function(){
        expect(previousFrame().score()).toEqual(10);
      });
    });
    it('should add a bonus of next roll score to a frame that is a spare', function(){
      bowlingScorecard.addScore(5);
      bowlingScorecard.addScore(5);
      bowlingScorecard.addScore(5);
      expect(previousFrame().score()).toEqual(15);
    });
    it('should add a bonus of next two roll scores to a frame that is a strike', function(){
      bowlingScorecard.addScore(10);
      expect(previousFrame().isStrike()).toBeTruthy();
      bowlingScorecard.addScore(4);
      bowlingScorecard.addScore(4);
      expect(secondPreviousFrame().score()).toEqual(18);
    });
  });

  describe('#isGameComplete', function(){
    it('should not be true when game starts', function(){
      expect(bowlingScorecard.isGameComplete()).toBeFalsy();
    });
    it('should not be true after one frame', function(){
      bowlingScorecard.addScore(5);
      bowlingScorecard.addScore(5);
      expect(bowlingScorecard.isGameComplete()).toBeFalsy();
    });
    it('should be complete when all 10 frames are played', function(){
      for (var i=0; i< 21; i++) {
        bowlingScorecard.addScore(4);
      }
      expect(bowlingScorecard.isGameComplete()).toBeTruthy();
    });
  });

});

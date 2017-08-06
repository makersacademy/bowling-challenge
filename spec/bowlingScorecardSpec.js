describe ("BowlingScorecard", function(){

  beforeEach(function(){
    bowlingScorecard = new BowlingScorecard();
  });

  describe('setGameComplete()', function(){
    it('isGameComplete returns false before setGameComplete()', function(){
      expect(bowlingScorecard.isGameComplete()).toBeFalsy();
    });
    it('isGameComplete returns true after setGameComplete()', function(){
      bowlingScorecard.setGameComplete();
      expect(bowlingScorecard.isGameComplete()).toBeTruthy();
    });
  });

  describe('score()', function(){
    it('returns score', function(){
      bowlingScorecard.addScore(5);
      expect(bowlingScorecard.score()).toEqual(5);
    });
  });

  describe('addScore()', function() {
    it('should add a score to a frame', function(){
      bowlingScorecard.addScore(5);
      expect(bowlingScorecard.currentFrame().score()).toEqual(5);
    });
    describe('add two scored to a frame', function(){
      beforeEach(function(){
        bowlingScorecard.addScore(5);
        bowlingScorecard.addScore(5);
      });
      it('should create a new frame', function(){
        expect(bowlingScorecard.currentFrameNumber()).toEqual(2);
      });
      it('should complete the frame', function(){
        expect(bowlingScorecard.previousFrame().isComplete()).toBeTruthy();
      });
      it('should store the total of two rolls', function(){
        expect(bowlingScorecard.previousFrame().score()).toEqual(10);
      });
    });
    it('should add a bonus of next roll score to a frame that is a spare', function(){
      bowlingScorecard.addScore(5);
      bowlingScorecard.addScore(5);
      bowlingScorecard.addScore(5);
      expect(bowlingScorecard.previousFrame().score()).toEqual(15);
    });
    it('should add a bonus of next two roll scores to a frame that is a strike', function(){
      bowlingScorecard.addScore(10);
      expect(bowlingScorecard.previousFrame().isStrike()).toBeTruthy();
      bowlingScorecard.addScore(4);
      bowlingScorecard.addScore(4);
      expect(bowlingScorecard.secondPreviousFrame().score()).toEqual(18);
    });
  });

  describe('a perfect game with score of 300', function() {
    it('score not equal 300 after 11 rolls', function(){
      for (var i=0; i< 11; i++) {
        bowlingScorecard.addScore(10);
      }
      expect(bowlingScorecard.score()).not.toEqual(300);
    });
    it('score equals 300 after 12 rolls', function(){
      for (var i=0; i< 12; i++) {
        bowlingScorecard.addScore(10);
      }
      expect(bowlingScorecard.score()).toEqual(300);
    });
  });

  describe('isGameComplete', function(){
    it('should not be true when game starts', function(){
      expect(bowlingScorecard.isGameComplete()).toBeFalsy();
    });
    it('should not be true after one frame', function(){
      bowlingScorecard.addScore(5);
      bowlingScorecard.addScore(5);
      expect(bowlingScorecard.isGameComplete()).toBeFalsy();
    });
    it('should be complete when all 10 frames are played', function(){
      for (var i=0; i< 20; i++) {
        bowlingScorecard.addScore(4);
      }
      expect(bowlingScorecard.isGameComplete()).toBeTruthy();
    });
  });

});
